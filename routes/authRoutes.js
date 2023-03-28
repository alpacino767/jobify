import express from "express"
const router = express.Router()

import {register, Login, updateUser, getCurrentUser} from '../controllers/authcontroller.js'
import authenticateUser from '../middleware/auth.js'
import rateLimiter from 'express-rate-limit'

const apiLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000,  
    max: 10,
    message: 'Too many request from this IP address, Please try again later'
})



router.route('/register').post(apiLimiter,register)
router.route('/login').post(apiLimiter,Login)
router.route('/updateUser').patch(authenticateUser, updateUser)
router.route('/getCurrentUser').get(authenticateUser, getCurrentUser);

export default router