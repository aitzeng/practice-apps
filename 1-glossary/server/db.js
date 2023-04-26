const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/glossary');

const glossarySchema = mongoose.Schema({
  word: String,
  definition: String
})

const Repo = mongoose.model('Repo', glossarySchema)

let save = (wordObject) => {
  let objInstance = new Repo(wordObject)

  return objInstance.save();
}

let grabDictionary = () => {
  return Repo.find().sort({word: 1}).exec()
}

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

module.exports.save = save;
module.exports.grabDictionary = grabDictionary;