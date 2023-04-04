import { pool } from "../db"
import { GET_STUDENTS_BY_ID, GET_STUDENTS, POST_STUDENTS } from "../db/queries"
import { buildResponse } from "../utils/response.js/SuccessResponse"

const { registerUserPayload } = require("../utils/payload/register.ts")

export const getUsers = (req: any, res: any) => {
    try{
        pool.query(GET_STUDENTS, (err: any, result: any) => {
            if(err) {
                res.status(300).json({ success: true, result: err})
                throw err
            } else {
                buildResponse(res, true, result.rows, "Success")
            }
        })
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
                buildResponse(res, true, result.rows, "Success")
            }
        })
        console.log('This is')
    } catch(e) {
        res.status(400).json({ success: false, result: e})
    }    
}

export const createUser = ({ body: payload }: any, res: any) => {
    try{
        const { name, email, age, applyFor, role, username, password } = registerUserPayload(payload)
        pool.query(POST_STUDENTS, [name, email, age, applyFor, role, username, password ], (err: any, result: any) => {
            if(err){
                console.log(err)
                res.status(400).json({success: false, message: err})
            } else {
                console.log(result)
                buildResponse(res, true, result.rows, "Success")
            }
        })
    } catch(e) {
        console.log(e)
        res.status(400).json({success: false, message: e})

    }
}

