const namaMahasiswa = require('../model/namamahasiswa');

const createMahasiswa= (req, res, next) => {
    const mahasiswa = new namaMahasiswa({
        nama: req.body.nama,
        nim: req.body.nim,
        jurusan: req.body.jurusan,
        alamat: req.body.alamat
    });
    mahasiswa.save().then(createdMahasiswa => {
        res.status(201).json({
            message: 'Mahasiswa berhasil ditambahkan',
            mahasiswaId: createdMahasiswa._id
        });
    });
};

const readMahasiswa = (req, res, next) => {
    namaMahasiswa.find().then(documents => {
        res.status(200).json({
            message: 'Mahasiswa berhasil diambil',
            mahasiswas: documents
        });
    });
};

const deleteMahasiswa = (req, res, next) => {
    namaMahasiswa.deleteOne({ _id: req.params.id }).then(result => {
        res.status(200).json({ message: "Mahasiswa berhasil dihapus" });
    });
};

const updateMahasiswa = (req, res, next) => {
    const mahasiswa = new namaMahasiswa({
        _id: req.body.id,
        nama: req.body.nama,
        nim: req.body.nim,
        jurusan: req.body.jurusan,
        alamat: req.body.alamat
    });
    namaMahasiswa.updateOne({ _id: req.params.id }, mahasiswa).then(result => {
        res.status(200).json({ message: "Update berhasil" });
    });
};

module.exports = {createMahasiswa, readMahasiswa, deleteMahasiswa, updateMahasiswa};