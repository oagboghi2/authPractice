const pgp = require('pg-promise')()
const connectionString = 'postgres://localhost:5432/test_pool'
const db = pgp(connectionString)


const register = (name, email, password) => {
  return db.one(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`, [name, email, password])
}

const getUserByEmail = (email) => {
  console.log("I have the email", email)
  return db.oneOrNone(`SELECT email FROM users WHERE email = $1`, [email])
}
module.exports = { register, getUserByEmail}; 