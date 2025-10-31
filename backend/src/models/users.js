import bcrypt from "bcrypt";

export default class Users {
    constructor(db) {
        this.db = db
    }

    async getAll() {
        return this.db.all("SELECT * FROM users ORDER BY created_at DESC")
    }
    async getById(id) {
        return this.db.get("SELECT * FROM users WHERE id = ?", [id])
    }
    async create({ username, role, password }) {
        const saltsRounds = 10
        const passwordHash = await bcrypt.hash(password, saltsRounds)

        const result = await this.db.run(
            "INSERT INTO users (username, role, password_hash) VALUES (?, ?, ?)",
            [username, role, passwordHash]
        );

        return { id: result.lastID };
    }
    async update(id, { username, role, password }) {
        const saltsRounds = 10
        const passwordHash = await bcrypt.hash(password, saltsRounds)


        const result = await this.db.run(
            "UPDATE users SET username = ?, role = ?, password_hash = ? WHERE id = ?",
            [username, role, passwordHash, id]
        );
        return { id: result.lastID };
    }
    async delete(id) {
        return this.db.run("DELETE FROM users WHERE id = ?", [id])
    }


}
