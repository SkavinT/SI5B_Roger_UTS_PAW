const monggoose = require('mongoose');

const mahasiswaSchema = monggoose.Schema({
    nama: { type: String, required: true },
    nim: { type: String, required: true },
    jurusan: { type: String, required: true },
    semester: { type: Number, required: true }
});