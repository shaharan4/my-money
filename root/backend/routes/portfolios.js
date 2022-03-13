const router = require('express').Router();
let Portfolio = require('../models/portfolio.model');

router.route('/').get((req, res) => {
    Portfolio.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const cash = Number(req.body.cash);
    
    const newPortfolio = new Portfolio({
        username

    });

    newPortfolio.save()
        .then(() => res.json('Portfolio added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/add_stock_entry/:id').put((req, res) => {
    var stockEntry = {"stockName": req.body.stockName, "stockTicker": req.body.stockTicker, "shares": Number(req.body.shares)};
    Portfolio.findById(req.params.id)
        .then(portfolio => {
            portfolio.stocks.push(stockEntry);

            portfolio.save()
                .then(() => res.json('Stocks updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/add_crypto_entry/:id').put((req, res) => {
    var cryptoEntry = {"cryptoName": req.body.cryptoName, "cryptoTicker": req.body.cryptoTicker, "coins": Number(req.body.coins)};
    Portfolio.findById(req.params.id)
        .then(portfolio => {
            portfolio.cryptos.push(cryptoEntry);

            portfolio.save()
                .then(() => res.json('Cryptos updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/add_cash/:id').put((req, res) => {
    Portfolio.findById(req.params.id)
        .then(portfolio => {
            portfolio.cash = portfolio.cash + Number(req.body.cash);

            portfolio.save()
                .then(() => res.json('Portfolio updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/subtract_cash/:id').put((req, res) => {
    Portfolio.findById(req.params.id)
        .then(portfolio => {
            portfolio.cash = portfolio.cash - Number(req.body.cash);

            portfolio.save()
                .then(() => res.json('Portfolio updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/:id').get((req, res) => {
    Portfolio.findById(req.params.id)
        .then(portfolio => res.json(portfolio))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Portfolio.findByIdAndDelete(req.params.id)
        .then(() => res.json('Portfolio deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/update/:id').put((req, res) => {
//     var stockEntry = {"stockName": req.body.stockName, "stockTicker": req.body.stockTicker, "shares": Number(req.body.shares)};
//     Portfolio.findById(req.params.id)
//         .then(portfolio => {
//             portfolio.username = req.body.username;
//             portfolio.cash = Number(req.body.cash);
//             portfolio.stocks.push(stockEntry);

//             portfolio.save()
//                 .then(() => res.json('Portfolio updated!'))
//                 .catch(err => res.status(400).json('Error: ' + err));
//         })
//         .catch(err => res.status(400).json('Error: ' + err));

// });

module.exports = router;