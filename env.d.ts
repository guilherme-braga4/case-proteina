declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_API_GITHUB: string;
    }
  }
}

export {}