import api from "./axios"

export async function getUsers() {
    const response = await api.get('/api/users')
    console.log(response.data)
    return response.data
}

export async function postUsers(username, role, password) {
    try {
        const res = await api.post("/api/users", {
            username,
            role,
            password,
        });

        return res.data
    } catch (err) {
        console.error(err);
        return false
    }
}


