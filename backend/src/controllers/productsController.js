import Products from "../models/products.js";

export const productsController = (db) => {
    const productsModel = new Products(db);

    return {
        getAll: async (req, res, next) => {
            try {
                const products = await productsModel.getAll();
                res.json(products);
            } catch (err) {
                next(err);
            }
        },
        getById: async (req, res, next) => {
            try {
                const product = await productsModel.getById(req.params.id)
                if (!product) {
                    return res.status(404).json({ message: "Product not found" })
                }
                res.json(product)
            } catch (err) {
                next(err)
            }
        },
        create: async (req, res, next) => {
            try {
                const image_url = req.file ? `/uploads/${req.file.filename}` : null;
                const newProduct = await productsModel.create(req.body, image_url);
                res.status(201).json(newProduct);
            } catch (err) {
                next(err);
            }
        },
        update: async (req, res, next) => {
            try {
                const updatedProduct = await productsModel.update(req.params.id, req.body);
                res.json(updatedProduct);
            } catch (err) {
                next(err);
            }
        },
        delete: async (req, res, next) => {
            try {
                await productsModel.delete(req.params.id)
                res.json({ message: "Deleted Succes" })
            } catch (err) {
                next(err)
            }
        }



    };
}
