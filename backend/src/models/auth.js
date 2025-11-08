import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export default class Auth {
    constructor(db) {
        this.db = db
    }

    async login({ username, password }) {
        console.log("Username:", username)
        console.log("Password:", password)

        const user = await this.db.get("SELECT * FROM users WHERE username = ?",
            [username])

        if (!user) {
            return { errorMessage: "Invalid username" }
        }

        const valid = await bcrypt.compare(password, user.password_hash)

        console.log(user.password_hash, password)

        if (!valid) {
            return { errorMessage: "Invalid Password" }
        }

        const token = jwt.sign(
            { id: user.id, username: user.username, role: user.role },
            "SECRET_KEY",
            { expiresIn: "2h" }
        )

        return { token, user: { id: user.id, username: user.username, role: user.role } }

    }
}
