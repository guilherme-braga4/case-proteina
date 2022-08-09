import React, {useState} from 'react'
import { Container, Form } from './styles'
import Filtro from '../Filtro/index'
import { HeaderProps } from './interface'

const Header = ({setRepos, repos}: HeaderProps) => {
  const [newUser, setNewUser] = useState(false)

  return (
      <Container>
        <Form>
          <Filtro
            setNewUser={setNewUser}
            newUser={newUser}
            setRepos={setRepos} 
            repos={repos}
          />
        </Form>
      </Container>
  )
}

export default Header

