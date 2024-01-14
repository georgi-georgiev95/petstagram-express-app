const router = require('express').Router();
const userManager = require('../managers/userManager');

router.get('/register', (req, res) => {
    res.render('users/register')
});

router.get('/login', (req, res) => {
    res.render('users/login')
});

router.post('/register', async (req, res) => {
    const userData = req.body;

    try {
        await userManager.register(userData);
        res.redirect('/');
    } catch (err) {
        throw new Error(err);
    }
})

module.exports = router;