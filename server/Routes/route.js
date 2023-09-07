import  express  from "express";
import {createStudent , getStudent , updateStudent , delStudent } from "../Controller/Students.js"



const route =express.Router()

route.post("/cs",createStudent)
route.get('/get',getStudent)
route.put('/up',updateStudent)
route.delete('/del/:id',delStudent)


export default route