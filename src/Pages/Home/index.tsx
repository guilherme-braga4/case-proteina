import React, { useEffect, useState } from 'react'
import { Container, ListaContatos } from './styles'
import Contato from '../../Components/Contato/index'
import Header from '../../Components/Header/index'
import { Req } from '../../Services/index'
import image from '../../Assets/github.png'

const Home = () => {
  const [repos, setRepos] = useState<string[] >([])
  const [like, setLike] = useState<boolean>(true)


  //Função para obter os Repositórios
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const reposStorage = JSON.parse(localStorage.getItem('repos') || '[]')
        console.log('reposStorage', reposStorage)
        if (reposStorage.length == 0) {
          console.log('dentro do if')
          const getRepos = await Req.getRepos('guilherme-braga4')
          setRepos(getRepos)
       } else setRepos(reposStorage)
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
        {repos?.map((item: any, index: number) => {
          return (
            <Contato
              image={image}
              name={item.name}
              description={item.description}
              id={item.id}
              item={item}
              repos={repos}
              setRepos={setRepos}
              like={like}
              setLike={setLike}
            />
          )
        })}
      </ListaContatos>
    </Container>
  )
}

export default Home
