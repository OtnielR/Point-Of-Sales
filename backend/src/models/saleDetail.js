export default class SaleDetail {
    constructor(db) {
        this.db = db
    }

    async getAll() {
        return this.db.all("SELECT * FROM sale_detail ORDER BY created_at DESC")
    }
    async getById(id) {
        return this.db.get("SELECT * FROM sale_detail WHERE id = ?", [id])
    }
    async getBySalesId(id) {
        return this.db.all("SELECT * FROM sale_detail WHERE sales_id = ?", [id])
    }
    async create({ sales_id, product_id, amount, total }) {
        const result = await this.db.run(
            "INSERT INTO sale_detail (sales_id, product_id, amount, total) VALUES ( ?, ?, ?, ?)",
            [sales_id, product_id, amount, total]
        );
        return { id: result.lastID };
    }
    async update(id, { sales_id, product_id, amount, total }) {
        const result = await this.db.run(
            "UPDATE sale_detail SET sales_id = ?, product_id = ?, amount = ?, total = ? WHERE id = ?",
            [sales_id, product_id, amount, total, id]
        );
        return { id: result.lastID };
    }
    async delete(id) {
        return this.db.run("DELETE FROM sale_detail WHERE id = ?", [id])
    }


}
