import api from "./axios";

export async function login(username, password) {
    try {
        const res = await api.post("/api/auth", {
            username,
            password
        });

        localStorage.setItem("token", res.data.token)
        localStorage.setItem("userId", res.data.user.id)

        return res.data
    } catch (err) {
        console.error(err);
        return false
    }

}

export async function logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
}
