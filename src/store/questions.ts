import { create } from 'zustand'
import { type Question } from '../types'
import confetti from 'canvas-confetti'
import { persist } from 'zustand/middleware'

interface State {
  questions: Question[]
  currentQuestion: number
  fetchQuestion: (limit: number) => Promise<void>
  selectAnswer: (questionId: number, answerIndex: number) => void
  goNextQuestion: () => void
  goPrevQuestion: () => void
  reset: () => void
}

export const useQuestionStore = create<State>()(
  persist(
    (set, get) => {
      return {
        questions: [],
        currentQuestion: 0,
        fetchQuestion: async (limit: number) => {
          console.log('fetching')

          try {
            const res = await fetch('http://localhost:4000/data.json')
            const json = await res.json()

            const questions = json
              .sort(() => Math.random() - 0.5)
              .slice(0, limit)

            set({ questions })
          } catch (error) {
            throw new Error("Couldn't fetch questions")
          } finally {
            console.log('fetched')
          }
        },
        selectAnswer: (questionId: number, answerIndex: number) => {
          const state = get()
          const newQuestions = structuredClone(state.questions)

          const questionIndex = newQuestions.findIndex(
            (data) => data.id === questionId
          )
          const questionInfo = newQuestions[questionIndex]

          const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex

          if (isCorrectUserAnswer) confetti()

          newQuestions[questionIndex] = {
            ...questionInfo,
            isCorrectUserAnswer,
            userSelectedAnswer: answerIndex,
          }

          set({ questions: newQuestions })
        },
        goNextQuestion: () => {
          const state = get()
          const nextQuestion = state.currentQuestion + 1

          if (nextQuestion < state.questions.length)
            set({ currentQuestion: nextQuestion })
        },
        goPrevQuestion: () => {
          const state = get()
          const previousQuestion = state.currentQuestion - 1

          if (previousQuestion >= 0) set({ currentQuestion: previousQuestion })
        },
        reset: () => {
          set({ currentQuestion: 0, questions: [] })
        },
      }
    },
    { name: 'questions' }
  )
)
