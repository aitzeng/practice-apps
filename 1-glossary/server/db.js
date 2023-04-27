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

let updateDictionary = (updateObject) => {
  let filter = {_id: updateObject._id}
  let update = {word: updateObject.word, definition: updateObject.definition}
  return Repo.findOneAndUpdate(filter, update);

}

let deleteDictionary = (deleteID) => {
  let target = {_id: deleteID}
  return Repo.deleteOne(target)

}

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

module.exports = { save, grabDictionary, updateDictionary, deleteDictionary }