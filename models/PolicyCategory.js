const mongoose = require('mongoose');

const PolicyCategorySchema = mongoose.Schema({
    category_name: String
});

module.exports = mongoose.model('PolicyCategory', PolicyCategorySchema);