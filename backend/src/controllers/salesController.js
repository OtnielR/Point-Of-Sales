import Sales from "../models/sales.js";

export const salesController = (db) => {
    const salesModel = new Sales(db);

    return {
        getAll: async (req, res, next) => {
            try {
                const sales = await salesModel.getAll();
                res.json(sales);
            } catch (err) {
                next(err);
            }
        },
        getById: async (req, res, next) => {
            try {
                const sale = await salesModel.getById(req.params.id)
                if (!sale) {
                    return res.status(404).json({ message: "Category not found" })
                }
                res.json(sale)
            } catch (err) {
                next(err)
            }
        },
        create: async (req, res, next) => {
            try {
                const newSale = await salesModel.create(req.body);
                res.status(201).json(newSale);
            } catch (err) {
                next(err);
            }
        },
        update: async (req, res, next) => {
            try {
                const updatedSale = await salesModel.update(req.params.id, req.body);
                res.json(updatedSale);
            } catch (err) {
                next(err);
            }
        },
        delete: async (req, res, next) => {
            try {
                await salesModel.delete(req.params.id)
                res.json({ message: "Deleted Succes" })
            } catch (err) {
                next(err)
            }
        }



    };
}
