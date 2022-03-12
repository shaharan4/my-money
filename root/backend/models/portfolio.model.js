const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
    username: { type: String, required: true },
    cash: { type: Number, required: true },

},  {
    timestamps: true,
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;