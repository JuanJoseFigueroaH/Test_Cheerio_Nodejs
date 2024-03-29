import { httpServer } from './app'

const start = async () => {
  const PORT = process.env.PORT || 3001;
  process.env.NODE_ENV = 'dev'
  if (!PORT) {
    throw new Error('Port must be defined')
  }
  try {
    httpServer.listen(PORT, () => {
      console.log(`Listen on port: ${PORT} backend Web Scraping.`)
      console.log(`Swagger route: http://localhost:${PORT}/swagger`)
    })
  } catch (error) {
    console.error(error)
  }
}

start()
