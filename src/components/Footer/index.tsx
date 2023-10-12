import { Button } from '@mui/material'
import { useQuestionData } from '../../hooks/useQuestionData'
import { useQuestionStore } from '../../store/questions'

export const Footer = () => {
  const { correctAnswers, incorrectAnswers, unanswers } = useQuestionData()
  const reset = useQuestionStore((state) => state.reset)

  return (
    <footer style={{ marginTop: '16px' }}>
      <div
        style={{
          marginBottom: '16px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <strong>{`✅ correctas ${correctAnswers} - incorrectas ❌ ${incorrectAnswers} - ❓ sin responder ${unanswers}`}</strong>
        <Button style={{ marginTop: '8px' }} onClick={() => reset()}>
          Resetear Juego
        </Button>
      </div>
      <strong>
        Made with ❤️ by <a href='https://github.com/Ayala0717'>Roberto Ayala</a>
      </strong>
    </footer>
  )
}
