const Pariwisata = require('../model/pariwisata');

const createPariwisata= (req, res) => {
    const pariwisata = new Pariwisata({
        nama: req.body.nama,
        lokasi: req.body.lokasi,
        deskripsi: req.body.deskripsi,
        harga: req.body.harga
    });
    pariwisata.save().then(createdPariwisata => {
        res.status(201).json({
            message: 'Pariwisata berhasil ditambahkan',
            pariwisataId: createdPariwisata._id
        });
    });
};

const readPariwisata = (req, res) => {
    buku.find().then(documents => {
        res.status(200).json({
            message: 'Pariwisata berhasil diambil',
            pariwisatas: documents
        });
    });
};

const deletePariwisata = (req, res) => {
    Pariwisata.deleteOne({ _id: req.params.id }).then(result => {
        res.status(200).json({ message: "Pariwisata berhasil dihapus" });
    });
};

const updatePariwisata = (req, res) => {
    const pariwisata = new Pariwisata({
        _id: req.body.id,
        nama: req.body.nama,
        lokasi: req.body.lokasi,
        deskripsi: req.body.deskripsi,
        harga: req.body.harga
    });
    Pariwisata.updateOne({ _id: req.params.id }, pariwisata).then(result => {
        res.status(200).json({ message: "Update berhasil" });
    });
};

module.exports = {createPariwisata, readPariwisata, deletePariwisata, updatePariwisata};