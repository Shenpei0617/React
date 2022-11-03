export const appConfig = {
  debug: true,
  devUrl: 'http://localhost:3000',
  prodUrl: 'https://www.abc.com',
  devServerUrl: 'http://localhost:5555',
}
export const imgUrl = appConfig.debug ? appConfig.devUrl : appConfig.prodUrl

export const imgServerUrl = appConfig.debug
  ? appConfig.devServerUrl
  : appConfig.prodUrl