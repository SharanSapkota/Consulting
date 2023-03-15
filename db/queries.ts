export const GET_STUDENTS = "SELECT * FROM users";
export const GET_STUDENTS_BY_ID = "SELECT * FROM users WHERE id = $1"
export const CREATE_USER = "INSERT"
export const POST_STUDENTS = "INSERT INTO users (name, email, age, applyFor, role, username, password) VALUES ($1, $2, $3, $4, $5, $6, $7)"
export const CHECK_EMAIL = "SELECT s FROM users s WHERE s.email = $1"