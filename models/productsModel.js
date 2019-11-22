const getDb = require('../mongoDbConnect').getDb


module.exports = class Products {
  constructor(n) {
    this.name = n
  }

  save() {
    const db = getDb()
    return db.collection('products')
      .insertOne(this)
      .then(r => console.log(`PRODUCT WAS EDDDED ${this.name}`))
  }

  static fetchAll() {
   const db = getDb()
    return db.collection('products')
      .find()
      .toArray()
  }
}
