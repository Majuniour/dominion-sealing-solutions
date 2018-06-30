var mongoose = require('mongoose');
var ProductSchema = mongoose.Schema({
    name: String,
	description: String,
	category: String,
	image: String,
	date: {
		type: Date,
		default: Date.now
	},
    status: String

})

module.exports = mongoose.model('Product', ProductSchema);