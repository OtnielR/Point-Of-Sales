export default class Categories {
    constructor(db) {
        this.db = db
    }

    async getAll() {
        return this.db.all("SELECT * FROM categories ORDER BY created_at DESC")
    }
    async getById(id) {
        return this.db.get("SELECT * FROM categories WHERE id = ?", [id])
    }
    async create({ name, description }) {
        const result = await this.db.run(
            "INSERT INTO categories (name, description) VALUES (?, ?)",
            [name, description]
        );
        return { id: result.lastID };
    }
    async update(id, { name, description }) {
        const result = await this.db.run(
            "UPDATE categories SET name = ?, description = ? WHERE id = ?",
            [name, description, id]
        );
        return { id: result.lastID };
    }
    async delete(id) {
        return this.db.run("DELETE FROM categories WHERE id = ?", [id])
    }


}
