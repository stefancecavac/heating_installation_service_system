import { useForm } from "react-hook-form"
import Modal from "../components/modal"
import { useState } from "react"

const ServiceInstallation = () => {
    const { register, handleSubmit, formState: { errors }, setError } = useForm()
    const [open , setOpen] = useState(false)

    const onSubmit = async(data) => {
        try {
            const response = await fetch(`http://localhost:4000/api/service/installation`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include"
            })
            const json = await response.json()

            if (!response.ok) {
                if (json.field && json.message) {
                    setError(json.field, { type: 'manual', message: json.message });
                } else {
                    setError('apiError', { type: 'manual', message: json.message || 'Something went wrong' });
                }
                return;
            }
            
            if (response.ok) {
                setOpen(true)
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <form className="flex-1" onSubmit={handleSubmit(onSubmit)}>
            <Modal open={open}></Modal>
            <div className="flex flex-col rounded-lg shadow-lg items-center border-2  w-2/4 m-auto h-3/4 mt-20 p-5">
                <p className="text-2xl text-textcollor">Create Inquiry</p>

                <div className=" flex flex-col w-2/4 mx-auto mt-10 flex-1">
                    <label className="text-textcollor flex flex-col">
                        Heating system type:
                        <select className="Input-primary" defaultValue="" {...register("heating_system_type", {
                            required: 'Heating System type required'
                        }
                        )}>
                            <option value='' disabled >Select Service Type</option>
                            {['Floor installation', 'Wall installation ', 'Combined'].map((item) => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>
                        {errors.heating_system_type && <div className="text-red-500">{errors.heating_system_type.message}</div>}
                    </label>
                </div>
                <button className="Button-primary w-1/6 ">Submit</button>
            </div>
        </form>
    )
}

export default ServiceInstallation