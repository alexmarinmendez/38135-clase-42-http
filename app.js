import express from 'express'

const app = express()

app.get('/', (req, res) => res.send({ message: 'Hola Mundo desde Express' }))

app.listen(8080, () => console.log('Server Up'))