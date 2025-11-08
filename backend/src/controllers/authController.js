import Auth from "../models/auth.js"

export const authController = (db) => {
    const authModel = new Auth(db)

    return {
        login: async (req, res, next) => {

            const token = await authModel.login(req.body)

            console.log(token)

            return res.json(token)


        }
    }
}
