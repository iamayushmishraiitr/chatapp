import express from "express"
 import { sendmessage ,getmessage } from "../controllers/messagecontrollers.js"
 import jwtMiddleware from "../JWT/middlware.js"
const router= express.Router() 
router.post("/send/:id" ,jwtMiddleware,sendmessage)
router.get("/get" ,jwtMiddleware,getmessage)
export default router