const router = require('express').Router();
const userManager = require('../managers/userManager');
const { COOKIE_NAME } = require('../utils/constants');
 
router.get('/register', (req, res) => {
    res.render('users/register')
});

router.get('/login', (req, res) => {
    res.render('users/login')
});

router.post('/register', async (req, res) => {
    const userData = req.body;

    try {
        const token = await userManager.register(userData);
        res.cookie(COOKIE_NAME, token);
        res.redirect('/');
    } catch (err) {
        throw new Error(err);
    }
})

module.exports = router;