import express from 'express'
const router = express.Router()


import {getAllInstallations , PostInstallation} from '../controllers/installationController.js'
import authentication from '../middleware/authentication.js'

router.use(authentication)
router.get('/', getAllInstallations)
router.post('/', PostInstallation)


export default router