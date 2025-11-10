import api from "./axios";
import { redirect } from "react-router-dom";

export async function getProducts() {
    const response = await api.get("/api/products")
    return response.data
}

export async function getProduct(id) {
    try {
        const response = await api.get(`/api/products/${id}`)

        return response.data
    } catch (err) {
        return false
    }
}

export async function deleteProduct(id) {
    try {
        const res = await api.delete(`/api/products/${id}`);

        return true
    } catch (err) {
        console.error(err);
        return false
    }
}

export async function postProducts(name, categoryId, costPrice, sellingPrice, stock, image) {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("category_id", categoryId);
    formData.append("cost_price", costPrice);
    formData.append("selling_price", sellingPrice);
    formData.append("stock", stock);

    if (image) {
        formData.append("image", image);
    }

    try {
        const res = await api.post("/api/products", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
    } catch (err) {
        console.error(err);
    }
}
export async function putProducts(id, name, categoryId, costPrice, sellingPrice, stock, image, image_url) {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("category_id", categoryId);
    formData.append("cost_price", costPrice);
    formData.append("selling_price", sellingPrice);
    formData.append("stock", stock);


    if (image) {
        formData.append("image", image);
    } else {
        formData.append("image_url", image_url)
    }

    try {
        const res = await api.put(`/api/products/${id}`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
    } catch (err) {
        console.error(err);
    }
}

