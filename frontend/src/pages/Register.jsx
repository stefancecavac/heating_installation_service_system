import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { UseUserContext } from '../hooks/UseUserContext'


const Register = () => {
    const { dispatch } = UseUserContext()
    const { register, handleSubmit, formState: { errors }, setError } = useForm()

    const onSubmit = async (data) => {
        try {
            const response = await fetch(`http://localhost:4000/api/user/register`, {
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
                localStorage.setItem('user', JSON.stringify(json))
                dispatch({ type: 'LOGIN', payload: json })
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='shadow-lg rounded-lg w-8/12 flex m-auto my-20 '>
            <form onSubmit={handleSubmit(onSubmit)} className='p-10 flex flex-col  w-3/6 '>
                <p className='text-textcollor text-4xl mb-10'>Register</p>

                <label className='flex flex-col text-textcollor '> Name:
                    <input {...register('user_name', {
                        required: "Name field is required"
                    })} className='Input-primary'></input>
                </label>
                {errors.user_name && <div className='text-red-500'>{errors.user_name.message}</div>}

                <label className='flex flex-col text-textcollor mt-5 '> Lastname:
                    <input {...register('user_lastName', {
                        required: "LastName field is required"
                    })} className='Input-primary'></input>
                </label>
                {errors.user_lastName && <div className='text-red-500'>{errors.user_lastName.message}</div>}

                <label className='flex flex-col text-textcollor mt-5 '> Email:
                    <input {...register('user_email', {
                        required: "Email field is required"
                    })} className='Input-primary'></input>
                </label>
                {errors.user_email && <div className='text-red-500'>{errors.user_email.message}</div>}

                <label className='flex flex-col text-textcollor mt-5 '> Password:
                    <input type='password' {...register('user_password', {
                        required: 'Password field is required',
                        minLength: {
                            value: 8,
                            message: 'Password must be at least 8 characters long'
                        },
                        pattern: {
                            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,]).{8,}$/,
                            message: 'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character'
                        }
                    })} className='Input-primary'></input>
                </label>
                {errors.user_password && <div className='text-red-500'>{errors.user_password.message}</div>}




                <button className='Button-primary w-3/6 flex m-auto justify-center my-5'>Register</button>
                <p className='text-textcollor flex justify-center '>Already have an account? <Link to='/user/login' className='text-Primary'>login</Link></p>


            </form>
            <div className='bg-gradient-to-r from-Primary to-red-500 w-3/6 rounded-r-lg flex items-center justify-center'>
                <p className='text-white text-center text-6xl font-bold'>Join our Family!</p>
            </div>
        </div>
    )
}

export default Register