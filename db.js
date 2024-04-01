const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/my_shop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  // Добавьте другие поля по необходимости
});

const Product = mongoose.model('Product', productSchema);

module.exports = { Product };
