export const useImageLink = (relativeImagePath: string) => {
  const { app } = useRuntimeConfig()
  const imageSrc = (app.baseURL + relativeImagePath).replace(
    /([^:]\/)\/+/g,
    '$1'
  )
  return imageSrc
}
