const mongoose = require('mongoose');

const PolicyCategorySchema = mongoose.Schema({
    categoryName: String
});

module.exports = mongoose.model('PolicyCategory', PolicyCategorySchema);