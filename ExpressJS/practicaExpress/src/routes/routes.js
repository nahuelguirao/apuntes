const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    res.render('index', { title: 'Welcome' })
})

router.get('/about', (req, res) => {
    res.render('about')
})

router.get('/user', (req, res) => {
    res.render('user')
})


module.exports = router