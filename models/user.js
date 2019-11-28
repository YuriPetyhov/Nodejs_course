const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: Schema.Types.ObjectID,
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
   cart: {
    items: [
      {
        productId: {
          type: Schema.Types.ObjectID,
          required: true,
          ref: "Product"
        },
        quality: {
          type: Number
        }
      }
    ]
   }
})
module.exports = mongoose.model('User', userSchema)
