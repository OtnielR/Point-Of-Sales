export default class Sales {
    constructor(db) {
        this.db = db
    }

    async getAll() {
        return this.db.all("SELECT * FROM sales ORDER BY created_at DESC")
    }
    async getById(id) {
        return this.db.get("SELECT * FROM sales WHERE id = ?", [id])
    }
    async create({ user_id, total_amount, paid_amount, change_amount, is_completed }) {
        const result = await this.db.run(
            "INSERT INTO sales (user_id, total_amount, paid_amount, change_amount, is_completed) VALUES (?, ?, ?, ?, ?)",
            [user_id, total_amount, paid_amount, change_amount, is_completed]
        );
        return { id: result.lastID };
    }
    async update(id, { user_id, total_amount, paid_amount, change_amount, is_completed }) {
        const result = await this.db.run(
            "UPDATE sales SET user_id = ?, total_amount = ?, paid_amount = ?, change_amount = ?, is_completed = ? WHERE id = ?",
            [user_id, total_amount, paid_amount, change_amount, is_completed, id]
        );
        return { id: result.lastID };
    }
    async delete(id) {
        return this.db.run("DELETE FROM sales WHERE id = ?", [id])
    }


}
