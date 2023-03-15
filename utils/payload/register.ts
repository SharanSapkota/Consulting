import { IRegisterUsers } from "../../interface/users"
const { STUDENT } = require("../ENUMS/role")

export const registerUserPayload = (payload: IRegisterUsers) => {
    return {
        username: payload.username,
        password: payload.password,
        role    : STUDENT,
        applyFor: payload.applyFor,
    }
}
