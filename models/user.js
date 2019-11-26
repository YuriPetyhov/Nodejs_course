const getDb = require('../mongoDbConnect').getDb
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;

  }

  save() {
    const db = getDb()
    db.collection('users')
      .insertOne(this)

  }
}
