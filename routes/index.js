var express = require('express');
var router = express.Router();
const Autor = require('../models/autor');
const Livro = require('../models/livros');

/* GET home page. */
//rotas do autor//
router.get('/', async function(req, res, next) {
  const autores = await Autor.selecionar();
  res.json(autores.rows);
});

router.post('/inserir', async function (req,res,next){
  const autores = await Autor.inserir(req.body);
  res.json(autores.rows);
});

router.put('/atualizar', async function (req,res,next){
  const autores = await Autor.atualizar(req.body);
  res.json(autores.rows);
});

router.delete('/deletar', async function (req,res,next){
  const autores = await Autor.deletar(req.body);
  res.json(autores.rows);
});

/* GET home page. */
//rotas do livro//
router.get('/', async function(req, res, next) {
  const livros = await Livro.selecionar();
  res.json(livros.rows);
});

router.post('/inserir', async function (req,res,next){
  const livros = await Livro.inserir(req.body);
  res.json(livros.rows);
});

router.put('/atualizar', async function (req,res,next){
  // const livros= {
  //   autor: "juliana",
  //   titulo: "uma historia de vida",
  //   data_publicacao: "2022-09-12"
  //   preco: $210.88
  // }
  const livros = await Livro.atualizar(req.body);
  res.json(livros.rows);
});

router.delete('/deletar', async function (req,res,next){
  //const deleta= {
    //id: "1",
  //}
  const livros = await Livro.deletar(req.body);
  res.json(livros.rows);
});

module.exports = router;