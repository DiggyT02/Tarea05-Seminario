const express = require('express')
const app = express()

app.use(express.static('.'))

app.get('/buscar/dni/:dni', async function(req, res) {
  var dni = req.params.dni

  try {
    var respuesta = await fetch('https://api.decolecta.com/v1/reniec/dni?numero=' + dni, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer sk_11584.skX2BKRPsEkcRW0p6bWQLXG7pxlZYta4'
      }
    })

    var data = await respuesta.json()
    console.log('Respuesta DNI:', JSON.stringify(data))
    res.json(data)

  } catch (error) {
    console.log('Error DNI:', error.message)
    res.status(500).json({ error: error.message })
  }
})

app.get('/buscar/ruc/:ruc', async function(req, res) {
  var ruc = req.params.ruc

  try {
    var respuesta = await fetch('https://api.decolecta.com/v1/sunat/ruc?numero=' + ruc, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer sk_11584.skX2BKRPsEkcRW0p6bWQLXG7pxlZYta4'
      }
    })

    var data = await respuesta.json()
    console.log('Respuesta RUC:', JSON.stringify(data))
    res.json(data)

  } catch (error) {
    console.log('Error RUC:', error.message)
    res.status(500).json({ error: error.message })
  }
})

app.listen(3000, function() {
  console.log('Servidor corriendo en http://localhost:3000')
})