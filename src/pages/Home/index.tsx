import { Play } from 'phosphor-react'

import { HomeContainer, FormContainer, CountdownContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" type="text" />
          <label htmlFor="minutesAmount">durante</label>
          <input type="number" id="minutesAmount" />
          <span>minutos.</span>
        </FormContainer>
        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <button type="submit">
          <Play />
          Começar
        </button>
      </form>
    </HomeContainer>
  )
}
