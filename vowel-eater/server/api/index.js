import { Router } from 'express'

import eater from './eater'

const router = Router()

// Add USERS Routes
router.use(eater)

export default router
