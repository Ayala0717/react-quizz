import { Card, IconButton, Stack, Typography } from '@mui/material'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { gradientDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import { useQuestionStore } from '../../store/questions'

import { type Question as QuestionType } from '../../types'

const Question = ({ info }: { info: QuestionType }) => {
  return (
    <Card
      variant='outlined'
      sx={{ textAlign: 'left', bgcolor: '#222', padding: 2 }}
    >
      <Typography variant='h5'>{info.question}</Typography>
      <SyntaxHighlighter language='javascript' style={gradientDark}>
        {info.code}
      </SyntaxHighlighter>
    </Card>
  )
}

export const Game = () => {
  const [questions, currentQuestion] = useQuestionStore((state) => [
    state.questions,
    state.currentQuestion,
  ])

  const questionInfo = questions[currentQuestion]

  return (
    <>
      <Question info={questionInfo} />
    </>
  )
}
