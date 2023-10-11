import './App.css'
import { JavaScriptLogo } from './components/Logos'
import { Container, Stack, Typography } from '@mui/material'

function App() {
  return (
    <>
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
      </Container>
    </>
  )
}

export default App
