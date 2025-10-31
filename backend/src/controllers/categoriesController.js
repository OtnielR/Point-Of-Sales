import Categories from "../models/categories.js";

export const categoryController = (db) => {
    const categoryModel = new Categories(db);

    return {
        getAll: async (req, res, next) => {
            try {
                const categories = await categoryModel.getAll();
                res.json(categories);
            } catch (err) {
                next(err);
            }
        },
        getById: async (req, res, next) => {
            try {
                const category = await categoryModel.getById(req.params.id)
                if (!category) {
                    return res.status(404).json({ message: "Category not found" })
                }
                res.json(category)
            } catch (err) {
                next(err)
            }
        },
        create: async (req, res, next) => {
            try {
                const newCategory = await categoryModel.create(req.body);
                res.status(201).json(newCategory);
            } catch (err) {
                next(err);
            }
        },
        update: async (req, res, next) => {
            try {
                const updatedCategory = await categoryModel.update(req.params.id, req.body);
                res.json(updatedCategory);
            } catch (err) {
                next(err);
            }
        },
        delete: async (req, res, next) => {
            try {
                await categoryModel.delete(req.params.id)
                res.json({ message: "Deleted Succes" })
            } catch (err) {
                next(err)
            }
        }



    };
}
