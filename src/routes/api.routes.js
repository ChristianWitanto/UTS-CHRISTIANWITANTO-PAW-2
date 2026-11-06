import express from 'express'

import upload from '../config/upload.js'
import UploadController from '../controllers/upload.controller.js'
import UserController from '../controllers/user.controller.js'
import WelcomeController from '../controllers/welcome.controller.js'
import HewanController from '../controllers/Hewan.controller.js'
import LogMiddleware from '../middleware/log.middlewar.js'

const router = express.Router()

router.get('/welcome', WelcomeController.welcome)
router.post('/users', UserController.store)
router.post('/upload', upload.single('file'), UploadController.store)

router.use(LogMiddleware)
router.get('/hewan', HewanController.index)
router.get("/hewan/:id", HewanController.show)
router.post("/hewan", HewanController.store)
router.put("/hewan/:id", HewanController.update)
router.patch("/hewan/:id", HewanController.update)
router.delete("/hewan/:id", HewanController.delete)

export default router
