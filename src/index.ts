import { httpServer } from './app'

const start = async () => {
  const PORT = process.env.PORT || 3001;
  process.env.NODE_ENV = 'dev'
  if (!PORT) {
    throw new Error('Port must be defined')
  }
  console.log(process.env.NODE_ENV)
  try {
    httpServer.listen(PORT, () => {
      console.log(`listen on port: ${PORT} backend ticket1234.`)
      console.log(`Swagger route: http://localhost:${PORT}/swagger`)
    })
  } catch (error) {
    console.error(error)
  }
}

start()
