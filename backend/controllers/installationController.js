import * as db from '../db/index.js'

const getAllInstallations = async (req, res) => {

    try {
        const installation = await db.query(`SELECT * FROM installation_inquiries;`)

        if (installation.rows.length === 0) {
            return res.status(200).json({ message: 'no installations found' })
        }

        res.status(200).json(installation.rows)

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'something went wrong getting installations' })
    }
}


const PostInstallation = async (req, res) => {
    const {heating_system_type} = req.body
    const {id} = req.user

    if(!heating_system_type) {
        return res.status(400).json({message: 'please fill out all fields'})
    }

    try {
        const installation = await db.query(`INSERT INTO installation_inquiries (heating_system_type , user_id) VALUES ($1 ,$2);` , [heating_system_type  ,id])

        res.status(200).json(installation.rows)

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'something went wrong getting installations' })
    }
}

export {getAllInstallations , PostInstallation}