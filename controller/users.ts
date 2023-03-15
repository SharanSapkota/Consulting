import { pool } from "../db"
import { GET_STUDENTS_BY_ID, GET_STUDENTS } from "../db/queries"

const { registerUserPayload } = require("../utils/payload/register.ts")

export const getUsers = (req: any, res: any) => {
    try{
        pool.query(GET_STUDENTS, (err: any, result: any) => {
            if(err) {
                res.status(300).json({ success: true, result: err})
                throw err
            } else {
                res.status(200).json({ success: true, result: result.rows})
            }
        })
        console.log('This is')
    } catch(e) {
        res.status(400).json({ success: false, result: e})
    }    
}

export const getUserById = ({params}: any, res: any) => {
    const id = parseInt(params.id)
    try{
        pool.query(GET_STUDENTS_BY_ID, [ id ], (err: any, result: any) => {
            if(err) {
                res.status(300).json({ success: false, result: err})
                throw err
            } else {
                res.status(200).json({ success: true, result: result.rows})
            }
        })
        console.log('This is')
    } catch(e) {
        res.status(400).json({ success: false, result: e})
    }    
}

export const createUser = ({ body: payload }: any, res: any) => {
   const newPayload = registerUserPayload(payload)
   console.log(newPayload)
}

