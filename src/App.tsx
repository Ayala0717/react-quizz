import './App.css'
import { JavaScriptLogo } from './components/Logos'
import { Start } from './components/Start'
import { Game } from './components/Game'
import { useQuestionStore } from './store/questions'
import { Container, Stack, Typography } from '@mui/material'

function App() {
  const questions = useQuestionStore((state) => state.questions)

  console.log(questions)

  return (
    <main>
      <Container>
        <Stack
          direction='row'
          gap={5}
          justifyContent='center'
          alignItems='center'
        >
          <JavaScriptLogo />

          <Typography variant='h2' component='h1'>
            JavaScript Quizz
          </Typography>
        </Stack>

        {questions.length === 0 && <Start />}
        {questions.length > 0 && <Game />}
      </Container>
    </main>
  )
}

export default App
