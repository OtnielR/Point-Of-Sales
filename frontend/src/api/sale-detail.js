import api from "./axios"

export async function getSaleDetail() {
    const response = await api.get('/api/sale-detail')
    return response.data
}

export async function postSaleDetail(sales_id, product_id, amount, total) {
    try {
        const res = await api.post("/api/sale-detail", {
            sales_id,
            product_id,
            amount,
            total
        });

        return res.data
    } catch (err) {
        console.error(err);
        return false
    }
}


