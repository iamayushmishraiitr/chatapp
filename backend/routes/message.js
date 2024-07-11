import express from "express"
 import { sendmessage ,getmessage } from "../controllers/messagecontrollers.js"
const router= express.Router() 
router.post("/send/:id" ,sendmessage)
router.get("/get" ,getmessage)
export default router