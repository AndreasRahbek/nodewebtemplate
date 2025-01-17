import express from 'express'
const router = express.Router()
import path from 'path'
import {fileURLToPath} from "url";
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

router.get('/',
    (req, res) => {
        res.sendFile(path.join(__dirname,'../views/html/index.html'))
    })


export default router
