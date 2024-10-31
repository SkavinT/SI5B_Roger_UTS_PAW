const mongoose = require('mongoose');

const pariwisataSchema = mongoose.Schema({
    nama: { type: String, required: true },
    lokasi: { type: String, required: true },
    deskripsi: { type: String, required: true },
    harga: { type: Number, required: true }
});

module.exports = mongoose.model('Pariwisata', pariwisataSchema);