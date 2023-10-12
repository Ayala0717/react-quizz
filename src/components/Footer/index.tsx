import { useQuestionData } from '../../hooks/useQuestionData'

export const Footer = () => {
  const { correctAnswers, incorrectAnswers, unanswers } = useQuestionData()

  return (
    <footer style={{ marginTop: '16px' }}>
      <strong>{`✅ correctas ${correctAnswers} - incorrectas ❌ ${incorrectAnswers} - ❓ sin responder ${unanswers}`}</strong>
      <strong>
        Made with ❤️ by{' '}
        <a href='https://github.com/RobertoAyala'>Roberto Ayala</a>
      </strong>
    </footer>
  )
}
