import api from "./axios"

export async function getCategories() {
    const response = await api.get('/api/categories')
    return response.data
}

export async function getCategory(id) {
    const response = await api.get(`/api/categories/${id}`)
    return response.data
}

export async function postCategory(name, description) {
    try {
        const res = await api.post("/api/categories", {
            name,
            description
        });

        return true
    } catch (err) {
        console.error(err);
        return false
    }
}

export async function deleteCategory(id) {
    try {
        const res = await api.delete(`/api/categories/${id}`);

        return true
    } catch (err) {
        console.error(err);
        return false
    }
}
