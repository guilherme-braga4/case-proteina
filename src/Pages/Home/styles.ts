import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  min-width: 100vw;
  background-color: #273443;
  overflow-y: auto;
`
// <JSX.Element|JSX.Element[]>
export const ListaContatos = styled.div`
  display: flex;
  padding: 3rem;
  flex-direction: column;
  background-color: #1ebea5;
  border-radius: 25px;
  min-width: 1150px;
  gap: 25px;
  transition: 5s;
`
