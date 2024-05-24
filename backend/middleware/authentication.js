import jwt from 'jsonwebtoken'

const authentication = async (req, res ,next) => {
    const token = req.cookies.token

    try {
        if (!token) {
            return res.status(400).json({ error: 'no authorization token' })
        }

        const verifiedToken = jwt.verify(token, process.env.JWT_SECRET)

        if (!verifiedToken) {
            res.status(400).json({ message: 'Not valid token' })
        }

        req.user = verifiedToken

        next()

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'No auth token provided' })
    }
}

export default authentication