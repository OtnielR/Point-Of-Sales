import SaleDetail from "../models/saleDetail.js";

export const saleDetailController = (db) => {
    const saleDetailModel = new SaleDetail(db);

    return {
        getAll: async (req, res, next) => {
            try {
                const salesDetail = await saleDetailModel.getAll();
                res.json(salesDetail);
            } catch (err) {
                next(err);
            }
        },
        getById: async (req, res, next) => {
            try {
                const saleDetail = await saleDetailModel.getById(req.params.id)
                if (!saleDetail) {
                    return res.status(404).json({ message: "Category not found" })
                }
                res.json(saleDetail)
            } catch (err) {
                next(err)
            }
        },
        create: async (req, res, next) => {
            try {
                const newSaleDetail = await saleDetailModel.create(req.body);
                res.status(201).json(newSaleDetail);
            } catch (err) {
                next(err);
            }
        },
        update: async (req, res, next) => {
            try {
                const updatedSaleDetail = await saleDetailModel.update(req.params.id, req.body);
                res.json(updatedSaleDetail);
            } catch (err) {
                next(err);
            }
        },
        delete: async (req, res, next) => {
            try {
                await saleDetailModel.delete(req.params.id)
                res.json({ message: "Deleted Succes" })
            } catch (err) {
                next(err)
            }
        }



    };
}
