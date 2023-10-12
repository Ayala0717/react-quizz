import { useQuestionStore } from '../store/questions'

export const useQuestionData = () => {
  const questions = useQuestionStore((state) => state.questions)

  let correctAnswers = 0
  let incorrectAnswers = 0
  let unanswers = 0

  questions.forEach((question) => {
    const { correctAnswer, userSelectedAnswer } = question

    if (userSelectedAnswer === correctAnswer) correctAnswers++
    else if (userSelectedAnswer == null) unanswers++
    else incorrectAnswers++
  })

  return { correctAnswers, incorrectAnswers, unanswers }
}
