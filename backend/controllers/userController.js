import * as db from '../db/index.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import validator from 'validator'


const registerUser = async (req, res) => {
    const { user_name, user_lastName, user_email, user_password } = req.body

    if (!user_name || !user_lastName || !user_email || !user_password) {
        return res.status(400).json({ field: 'allFields', message: 'Please fill out all fields' })    }

    if (!validator.isEmail(user_email)) {
        return res.status(400).json({ field: 'user_email', message: 'Not a valid email' })
    }

    if (!validator.isStrongPassword(user_password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    })) {
        return res.status(400).json({ field: 'user_password', message: 'Not a strong password' })
    }

    try {
        const userExists = await db.query(`SELECT * FROM users WHERE user_email = ($1);`, [user_email])

        if (userExists.rows.length > 0) {
            return res.status(400).json({ field: 'user_email', message: 'Email already exists' })
        }


        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(user_password, salt)

        const user = await db.query(`INSERT INTO users ( user_name , user_lastName , user_email , user_password)
        VALUES ($1 , $2 , $3 , $4) ` , [user_name, user_lastName, user_email, hashedPassword])

        const token = jwt.sign({ id: user.user_id }, process.env.JWT_SECRET, { expiresIn: '1d' })

        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 86400000
        })

        res.status(201).json(user.rows[0])
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "something went wrong registering user" })
    }

}



const loginUser = async (req, res) => {
    const { user_email, user_password } = req.body

    if (!user_email || !user_password) {
        return res.status(400).json({ message: 'please fill out all fields' })
    }

    try {
        const emailExists = await db.query(`SELECT * FROM users WHERE user_email = ($1);`, [user_email])
        if (!emailExists.rows.length > 0) {
            return res.status(400).json({ field: 'user_email' , message: 'Incorrect email' })
        }

        const user = emailExists.rows[0]

        const passwordMatch = await bcrypt.compare(user_password, user.user_password)
        if (!passwordMatch) {
            return res.status(400).json({field : 'user_password' , message: 'Incorrect password' })
        }

        const token = jwt.sign({ id: user.user_id }, process.env.JWT_SECRET, { expiresIn: '1d' })

        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 86400000
        })
        console.log(user)
        res.status(201).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "something went wrong registering user" })
    }

}

const logoutUser = async (req, res) => {
    res.clearCookie('token')
    res.status(200).json({ message: 'Logout successful' })
}

export { registerUser, loginUser, logoutUser }