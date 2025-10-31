import api from "./axios";
import { redirect } from "react-router-dom";

export async function getProducts() {
    const response = await api.get("/api/products")
    return response.data
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
