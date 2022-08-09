import { useEffect } from 'react'
import { ContatoProps } from './interface'
import { Container, SubContainer, IconeDarLike, IconeLike } from './styles'
import Botao from '../Botao/index'

const Contato = ({
  image,
  name,
  description,
  id,
  item,
  repos,
  setRepos,
  like,
  setLike
}: ContatoProps): JSX.Element => {
  const likeRepo = () => {
    const selectedRepo = repos.map((repo: string | any) => {
      if (repo.id === id) {
        if (!repo.curtida || repo.curtida === false) {
          return {
            ...repo,
            curtida: true
           }
        }
        else if (repo.curtida && repo.curtida === true) {
          return {
            ...repo,
            curtida: false
           }
        }
      }
      else return {...repo}
    })
    setRepos(selectedRepo)
    localStorage.setItem('repos', JSON.stringify(selectedRepo))
  }


  return (
    <Container>
      <img src={image} />
      <SubContainer>
        <div>
          <p>{name}</p>
          <p>{description}</p>
        </div>
        {item.curtida && item.curtida === true ? (
          <Botao
            type="submit"
            icon={<IconeLike />}
            disabled={false}
            onClick={likeRepo}
          />
        ) : (
          <Botao
            type="submit"
            icon={<IconeDarLike />}
            disabled={false}
            onClick={likeRepo}
          />
        )}
      </SubContainer>
    </Container>
  )
}

export default Contato
