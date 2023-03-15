const { registerUserPayload } = require("../utils/payload/register.ts")

export const getUsers = (req: any, res: any) => {
    console.log('This is')
    res.json({msg: "This is test"})
}

export const createUser = ({ body: payload }: any, res: any) => {
   const newPayload = registerUserPayload(payload)
   console.log(newPayload)  
}

