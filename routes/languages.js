const { request } = require('express');
var express = require('express');
var router = express.Router();

const lenguages = require('../services/languages');

/* GET leguages listing. */
router.get('/', async function(req, res, next) {
  try{
    res.json(await lenguages.getMultiple(req.query.page));
  }
  catch(err){
    console.error('Error' + err.message);
    next(err);
  }
});



module.exports = router;