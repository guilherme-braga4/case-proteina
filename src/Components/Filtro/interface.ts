import axios, { AxiosResponse, AxiosError } from "axios";

export interface FiltroProps {
  setNewUser: React.Dispatch<React.SetStateAction<boolean>>
  newUser: boolean
  repos?: string[]
  setRepos: React.Dispatch<React.SetStateAction<any>>
}
