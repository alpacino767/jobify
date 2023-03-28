import express from "express"
const router = express.Router()

import {createJob, deleteJob, getallJobs, updateJob, showStats} from '../controllers/jobsControllers.js'

router.route('/').post(createJob).get(getallJobs)
// remember about id
router.route('/stats').get(showStats)
router.route('/:id').delete(deleteJob).patch(updateJob)

export default router