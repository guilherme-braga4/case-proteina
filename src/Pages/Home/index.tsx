import React, { useEffect, useState } from 'react'
import { Container, ListaContatos } from './styles'
import Contato from '../../Components/Contato/index'
import Header from '../../Components/Header/index'
import { Req } from '../../Services/index'
import image from '../../Assets/github.png'

const Home = () => {
  const [repos, setRepos] = useState<string[]>([])

  //Função para obter os Repositórios
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const obterContatos = await Req.getRepos('guilherme-braga4')
        setRepos(obterContatos)
      } catch {
        console.log('Erro ao carregar os repositórios')
      }
    }
    fetchRepos()
  }, [])

  return (
    <Container>
     <Header setRepos={setRepos} repos={repos} />
      <ListaContatos>
        {repos?.map((item: any) => {
          return (
            <Contato
              image={image}
              name={item.name}
              description={item.description}
            />
          )
        })}
      </ListaContatos>
    </Container>
  )
}

export default Home
