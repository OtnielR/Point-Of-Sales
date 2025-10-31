import api from "./axios"

export async function getCategories() {
    const response = await api.get('/api/categories')
    return response.data
}

export async function postCategory(name, description) {
    const formData = new FormData()

    console.log(name, description)

    formData.append("name", name)
    formData.append("description", description)


    try {
        const res = await api.post("/api/categories", formData);
        console.log(res.data);
    } catch (err) {
        console.error(err);
    }

}
