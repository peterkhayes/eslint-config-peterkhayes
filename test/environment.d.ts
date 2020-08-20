declare global {
  namespace NodeJS {
    interface ProcessEnv {
      FILENAME: string;
    }
  }
}
