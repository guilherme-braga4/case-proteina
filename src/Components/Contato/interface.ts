export interface ContatoProps {
  image: string
  name: string
  description: string
  id: number
  item: any
  repos: string[]
  setRepos: React.Dispatch<React.SetStateAction<any>>
  like: boolean
  setLike: React.Dispatch<React.SetStateAction<any>>
}
