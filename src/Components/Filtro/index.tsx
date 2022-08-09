import React, { useEffect, useState } from 'react'
import { FiltroProps } from './interface'
import { Container } from './styles'
import Input from '../Input/index'
import { Req } from '../../Services/index'

const Filtro = ({ repos, setRepos }: FiltroProps) => {
  const [filtro, setFiltro] = useState<string>('')

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const getRepos = await Req.getRepos(filtro)
        setRepos(getRepos)
      } catch {
        console.log('Erro ao carregar os repositórios')
      }
    }
    fetchRepos()
  }, [filtro])

  //Função para filtrar contatos
  useEffect(() => {
    const pesquisa =
      filtro !== undefined
        ? repos?.filter((repo: any ) =>
            repo.owner.login.toLowerCase().includes(filtro.toLowerCase())
          )
        : repos
    if (pesquisa == undefined || pesquisa.length === 0) {
      return
    } else setRepos(pesquisa)
    console.log('repos', repos)
  }, [filtro])

  //Valor do Filtro
  const filterByName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target
    setFiltro(value)
  }

  return (
    <Container>
      <Input
        name="contato"
        placeholder="Pesquise pelo nome de um usuário do Github..."
        type="text"
        onChange={filterByName}
      />
    </Container>
  )
}

export default Filtro
