const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/recipes');

const recipeSchema = new mongoose.Schema({
  category: String,
  ingredients: String,
  Method: String
})

const Recipe = mongoose.model('Recipe', recipeSchema);

//TODO:
//Add a function that saves new data to db

//TODO:
//Add a function that returns data from db

