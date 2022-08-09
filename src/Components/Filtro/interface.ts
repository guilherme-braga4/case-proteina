import axios, { AxiosResponse, AxiosError } from "axios";

export interface FiltroProps {
  setFilterByLike: React.Dispatch<React.SetStateAction<boolean>>
  filterByLike: boolean
  repos?: string[]
  setRepos: React.Dispatch<React.SetStateAction<any>>
}
