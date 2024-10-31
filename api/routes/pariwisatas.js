var express = require('express');
const pariwisata = require('../model/pariwisata');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
// router.post('path', function(req, res, next) {
//   res.status(201).json({
//     message: 'Pariwisata berhasil ditambahkan'
//   });
// });

router.post('/', (req, res) => {
  pariwisatacontroller.createPariwisata(req, res).catch(err => {
    res.status(500).json({
      message: 'Error creating pariwisata',
      error: err
    });
  });
});


router.get('/',(req, res)=>{
  pariwisatacontroller.readPariwisata
  (req, res).catch(err => {
    res.status(500).json({
      message: 'Error fetching pariwisata',
      error: err
    });
  });
});
router.delete('/:id',(req, res)=>{
  pariwisatacontroller.deletePariwisata
  (req, res).catch(err => {
    res.status(500).json({
      message: 'Error deleting pariwisata',
      error: err
    });
  });
});

router.put('/:id',(req, res)=>{
  pariwisatacontroller.updatePariwisata
  (req, res).catch(err => {
    res.status(500).json({
      message: 'Error updating pariwisata',
      error: err
    });
  });
});

module.exports = router;
