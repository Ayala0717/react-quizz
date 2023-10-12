import {
  Card,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { gradientDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import { useQuestionStore } from '../../store/questions'

import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'

import { type Question as QuestionType } from '../../types'

const getBackgroundColor = (info: QuestionType, answerIndex: number) => {
  const { userSelectedAnswer, correctAnswer } = info

  if (userSelectedAnswer == null) return 'transparent'

  if (correctAnswer != answerIndex && userSelectedAnswer === answerIndex)
    return 'transparent'

  if (correctAnswer === answerIndex) return 'green'

  if (userSelectedAnswer === answerIndex) return 'red'

  return 'transparent'
}

const Question = ({ info }: { info: QuestionType }) => {
  const selectAnswer = useQuestionStore((state) => state.selectAnswer)

  const createHandleClick = (answerIndex: number) => () => {
    selectAnswer(info.id, answerIndex)
  }

  return (
    <Card
      variant='outlined'
      sx={{ textAlign: 'left', bgcolor: '#222', padding: 2, marginTop: 4 }}
    >
      <Typography variant='h5'>{info.question}</Typography>

      <SyntaxHighlighter language='javascript' style={gradientDark}>
        {info.code}
      </SyntaxHighlighter>

      <List sx={{ bgcolor: '#444' }} disablePadding>
        {info.answers.map((answer, index) => (
          <ListItem key={index} divider disablePadding>
            <ListItemButton
              disabled={info.userSelectedAnswer != null}
              sx={{ bgcolor: getBackgroundColor(info, index) }}
              onClick={createHandleClick(index)}
            >
              <ListItemText primary={answer} sx={{ textAlign: 'center' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  )
}

export const Game = () => {
  const [questions, currentQuestion, goNextQuestion, goPrevQuestion] =
    useQuestionStore((state) => [
      state.questions,
      state.currentQuestion,
      state.goNextQuestion,
      state.goPrevQuestion,
    ])

  const questionInfo = questions[currentQuestion]

  return (
    <>
      <Stack
        direction='row'
        gap={2}
        alignItems='center'
        justifyContent='center'
      >
        <IconButton onClick={goPrevQuestion} disabled={currentQuestion === 0}>
          <ArrowBackIosNew />
        </IconButton>
        {currentQuestion + 1} / {questions.length}
        <IconButton
          onClick={goNextQuestion}
          disabled={currentQuestion >= questions.length - 1}
        >
          <ArrowForwardIos />
        </IconButton>
        <Question info={questionInfo} />
      </Stack>
    </>
  )
}
