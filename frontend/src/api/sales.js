import api from "./axios"

export async function getSales() {
    const response = await api.get('/api/sales')
    return response.data
}

export async function getSale(id) {
    const response = await api.get(`/api/sales/${id}`)
    return response.data
}

export async function postSales(user_id, total_amount, paid_amount, change_amount, is_completed) {
    try {
        const res = await api.post("/api/sales", {
            user_id,
            total_amount,
            paid_amount,
            change_amount,
            is_completed
        });

        return res.data
    } catch (err) {
        console.error(err);
        return false
    }
}


