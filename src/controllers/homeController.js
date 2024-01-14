const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('partials/home');
});

module.exports = router;