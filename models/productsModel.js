const mongoose = require('mongoose');
const Scheme = mongoose.Schema

const productScheme = new Scheme({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Product', productScheme)
