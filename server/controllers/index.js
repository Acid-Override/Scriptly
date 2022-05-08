const controller = require('../../database/controller/controller')

module.exports = {
  readAllFunction: (req, res) => {
    readAll(req.body)
  }
}