const { Router } = require("express");

const getCountries = require('../controllers/getCountries.js')
const getCountryById = require('../controllers/getCountryById.js')
const getActivities = require('../controllers/getActivities.js')
const postActivities = require('../controllers/postActivities.js')

const router = Router();

router.get('/countries', getCountries)
router.get('/countries/:idPais', getCountryById)
router.get('/activities', getActivities)
router.post('/activities', postActivities)

module.exports = router;
