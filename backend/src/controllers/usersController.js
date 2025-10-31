import Users from "../models/users.js";

export const usersController = (db) => {
    const usersModel = new Users(db);

    return {
        getAll: async (req, res, next) => {
            try {
                const users = await usersModel.getAll();
                res.json(users);
            } catch (err) {
                next(err);
            }
        },
        getById: async (req, res, next) => {
            try {
                const user = await usersModel.getById(req.params.id)
                if (!user) {
                    return res.status(404).json({ message: "Category not found" })
                }
                res.json(user)
            } catch (err) {
                next(err)
            }
        },
        create: async (req, res, next) => {
            try {
                const newUser = await usersModel.create(req.body);
                res.status(201).json(newUser);
            } catch (err) {
                next(err);
            }
        },
        update: async (req, res, next) => {
            try {
                const updatedUser = await usersModel.update(req.params.id, req.body);
                res.json(updatedUser);
            } catch (err) {
                next(err);
            }
        },
        delete: async (req, res, next) => {
            try {
                await usersModel.delete(req.params.id)
                res.json({ message: "Deleted Succes" })
            } catch (err) {
                next(err)
            }
        }



    };
}
