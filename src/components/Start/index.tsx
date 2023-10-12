import { Button } from '@mui/material'
import { useQuestionStore } from '../../store/questions'

export const Start = () => {
  const fetchQuestions = useQuestionStore((state) => state.fetchQuestion)

  const handleClick = () => {
    fetchQuestions(10)
  }
  return (
    <Button onClick={handleClick} variant='contained'>
      Empezar!
    </Button>
  )
}
