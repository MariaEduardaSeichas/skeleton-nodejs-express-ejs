var express = require('express');
var router = express.Router();
const Autor = require('../models/autor');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const autores = await Autor.selecionar();
  res.json(autores.rows);
});

router.post('/inserir', async function (req,res,next){
  const autores = await Autor.inserir(req.body);
  res.json(autores.rows);
});

router.put('/atualizar', async function (req,res,next){
  const autor= {
    nome: "juliana123",
    sobrenome: "brasil",
    data_nascimento: "2002/09/08"
  }
  const autores = await Autor.atualizar(autor, 1);
  res.json(autores);
});

router.get('/deletar', async function (req,res,next){
  const deleta= {
    id: "1",
  }
  const autores = await Autor.deletar(deleta);
  res.json(autores);
});

module.exports = router;