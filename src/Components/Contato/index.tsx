import { ContatoProps } from './interface'
import { Container, SubContainer, IconeApagar } from './styles'

const Contato = ({
  image,
  name,
  description,
}: ContatoProps): JSX.Element => {

  return (
    <Container>
      <img src={image} />
      <SubContainer>
        <div>
          <p>{name}</p>
          <p>{description}</p>
        </div>
      </SubContainer>
    </Container>
  )
}

export default Contato
