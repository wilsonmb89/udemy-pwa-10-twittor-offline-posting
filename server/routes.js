// Routes.js - Módulo de rutas
var express = require('express');
var router = express.Router();


const mensajes = [
  {
    _id: 'XXX',
    user: 'spiderman',
    mensaje: 'hola mundo'
  },
  {
    _id: 'XXX',
    user: 'ironman',
    mensaje: 'hola mundo'
  },
  {
    _id: 'XXX',
    user: 'hulk',
    mensaje: 'hola mundo'
  }
];

// Get mensajes
router.get('/', function (req, res) {
  res.json(mensajes);
});

router.post('/', function(req, res) {
  const body = req.body;
  console.log(body);
  if (!!body && !!body.user && !!body.mensaje) {
    mensajes.push({
      user: body.user,
      mensaje: body.mensaje
    });
    res.status(200).json({ ok: true, mensajes });
  } else {
    res.status(500).json({ ok: false, error: 'Datos no validos' });
  }
});

module.exports = router;