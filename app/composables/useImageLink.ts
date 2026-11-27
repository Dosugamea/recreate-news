export const useImageLink = (relativeImagePath: string) => {
  const { app } = useRuntimeConfig()
  const endpoint = app.baseURL !== '/' ? app.baseURL : 'http://localhost:3000/'
  const imageSrc = (endpoint + relativeImagePath).replace(/([^:]\/)\/+/g, '$1')
  return imageSrc
}
