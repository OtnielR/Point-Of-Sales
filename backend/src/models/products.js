export default class Products {
    constructor(db) {
        this.db = db
    }

    async getAll() {
        return this.db.all("SELECT * FROM products ORDER BY created_at DESC")
    }
    async getById(id) {
        return this.db.get("SELECT * FROM products WHERE id = ?", [id])
    }
    async create({ category_id, name, cost_price, selling_price, stock }, image_url) {
        const result = await this.db.run(
            "INSERT INTO products (category_id, name, cost_price, selling_price, stock, image_url) VALUES (?, ?, ?, ?, ?, ?)",
            [category_id, name, cost_price, selling_price, stock, image_url]
        );
        return { id: result.lastID };
    }
    async update(id, { category_id, name, cost_price, selling_price, stock }, image_url) {
        const result = await this.db.run(
            "UPDATE products SET category_id = ?, name = ?, cost_price = ?, selling_price = ?, stock = ?, image_url = ? WHERE id = ?",
            [category_id, name, cost_price, selling_price, stock, image_url, id]
        );
        return { id: result.lastID };
    }
    async delete(id) {
        return this.db.run("DELETE FROM products WHERE id = ?", [id])
    }


}
