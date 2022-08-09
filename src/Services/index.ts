import axios, { AxiosResponse, AxiosError } from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_GITHUB,
  headers: {
    "Content-type": "application/json"
  }
})

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => api.get(url).then(responseBody),
	post: (url: string, body: {}) => api.post(url, body).then(responseBody),
	put: (url: string, body: {}) => api.put(url, body).then(responseBody),
	delete: (url: string) => api.delete(url).then(responseBody),
};

export const Req = {
	getRepos: (user: string): Promise<string[]> => requests.get(`/${user}/repos`),
};

export default api
