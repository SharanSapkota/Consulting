export const registerPayload = (req: any, res: any, next: any) => {
    const { name, email, dob, applyFor, ielts_score, pte_score } = req.body;
    next()
}
