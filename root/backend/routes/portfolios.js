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
        username,
        cash,
    });

    newPortfolio.save()
        .then(() => res.json('Portfolio added!'))
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

router.route('/update/:id').post((req, res) => {
    Portfolio.findById(req.params.id)
        .then(user => {
            user.username = req.body.username;
            user.cash = Number(req.body.cash);

            user.save()
                .then(() => res.json('Portfolio updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;