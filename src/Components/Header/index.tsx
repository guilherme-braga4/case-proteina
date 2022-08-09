import React, {useState} from 'react'
import { Container, Form } from './styles'
import Filtro from '../Filtro/index'
import { HeaderProps } from './interface'

const Header = ({setRepos, repos}: HeaderProps) => {
  const [filterByLike, setFilterByLike] = useState(true)

  return (
      <Container>
        <Form>
          <Filtro
            setFilterByLike={setFilterByLike}
            filterByLike={filterByLike}
            setRepos={setRepos} 
            repos={repos}
          />
        </Form>
      </Container>
  )
}

export default Header

