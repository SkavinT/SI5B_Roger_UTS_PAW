var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.post('/',(req,res) => {
    namamahasiswacontroller.createMahasiswa(req,res).catch(err => {
        res.status(500).json({
            message: 'Error creating mahasiswa',
            error: err
        });
    });
}); 
router.get('/',(req,res) => {
    namamahasiswacontroller.readMahasiswa(req,res).catch(err => {
        res.status(500).json({
            message: 'Error fetching mahasiswa',
            error: err
        });
    });
});
router.delete('/:id',(req,res) => {
    namamahasiswacontroller.deleteMahasiswa(req,res).catch(err => {
        res.status(500).json({
            message: 'Error deleting mahasiswa',
            error: err
        });
    });
});
router.put('/:id',(req,res) => {
    namamahasiswacontroller.updateMahasiswa(req,res).catch(err => {
        res.status(500).json({
            message: 'Error updating mahasiswa',
            error: err
        });
    });
});

module.exports = router;