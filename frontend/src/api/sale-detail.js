import api from "./axios"

export async function getSaleDetail() {
    const response = await api.get('/api/sale-detail')
    return response.data
}

export async function getSaleDetailById(id) {
    try {
        const response = await api.get(`/api/sale-detail/${id}`)
        return response.data

    } catch (err) {
        return false
    }
}

export async function getSaleDetailBySalesId(id) {
    const response = await api.get(`/api/sale-detail/sales/${id}`)
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


