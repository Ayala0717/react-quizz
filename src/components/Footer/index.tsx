import { Button } from '@mui/material'
import { useQuestionData } from '../../hooks/useQuestionData'
import { useQuestionStore } from '../../store/questions'

export const Footer = () => {
  const { correctAnswers, incorrectAnswers, unanswers } = useQuestionData()
  const reset = useQuestionStore((state) => state.reset)

  return (
    <footer style={{ marginTop: '16px' }}>
      <div style={{ marginBottom: '16px', padding: '8px' }}>
        <strong>{`✅ correctas ${correctAnswers} - incorrectas ❌ ${incorrectAnswers} - ❓ sin responder ${unanswers}`}</strong>
        <Button onClick={() => reset()}>Resetear Juego</Button>
      </div>
      <strong>
        Made with ❤️ by{' '}
        <a href='https://github.com/RobertoAyala'>Roberto Ayala</a>
      </strong>
    </footer>
  )
}
