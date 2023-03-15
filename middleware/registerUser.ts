import { pool } from "../db";
import { CHECK_EMAIL } from "../db/queries";

export const registerPayload = (req: any, res: any, next: any) => {
    const { name, email, dob, applyFor, ielts_score, pte_score } = req.body;
    next()
}

export const checkEmail = ({body}: any, res: any, next: any) => {
    pool.query(CHECK_EMAIL, [body.email], (err: any, result: any) => {
        if(result) {
            res.json({success: false, message: "Email already in use!"})
        }
        next()
    })
}
