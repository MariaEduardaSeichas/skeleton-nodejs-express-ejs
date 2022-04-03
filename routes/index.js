var express = require('express');
var router = express.Router();
const Autor = require('../models/autor');
const Livro = require('../models/livros');

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
  // const autor= {
  //   nome: "juliana123",
  //   sobrenome: "brasil",
  //   data_nascimento: "2002/09/08"
  // }
  const autores = await Autor.atualizar(req.body);
  res.json(autores);
});

router.delete('/deletar', async function (req,res,next){
  //const deleta= {
    //id: "1",
  //}
  const autores = await Autor.deletar(req.body);
  res.json(autores);
});

/* GET home page. */
router.get('/', async function(req, res, next) {
  const livros = await Livro.selecionar();
  res.json(livros.rows);
});

router.post('/inserir', async function (req,res,next){
  const livros = await Livro.inserir(req.body);
  res.json(livros.rows);
});

router.put('/atualizar', async function (req,res,next){
  // const livro= {
  //   nome: "juliana123",
  //   sobrenome: "brasil",
  //   data_nascimento: "2002/09/08"
  // }
  const livros = await livros.atualizar(req.body);
  res.json(livros);
});

router.delete('/deletar', async function (req,res,next){
  //const deleta= {
    //id: "1",
  //}
  const livros = await livros.deletar(req.body);
  res.json(livros);
});

module.exports = router;