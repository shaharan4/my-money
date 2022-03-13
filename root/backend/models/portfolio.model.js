const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
    username: { type: String, required: true },
    cash: { type: Number, required: true, default: 0 },
    stocks: [{ stockName: String, stockTicker: String, shares: Number}],
    cryptos: [{ cryptoName: String, cryptoTicker: String, coins: Number}]

},  {
    timestamps: true,
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;