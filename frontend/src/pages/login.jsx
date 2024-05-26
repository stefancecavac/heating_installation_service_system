import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { UseUserContext } from '../hooks/UseUserContext'


const Login = () => {
    const { dispatch } = UseUserContext()
    const { register, handleSubmit, formState: { errors }, setError } = useForm()

    const onSubmit = async (data) => {
        try {
            const response = await fetch(`http://localhost:4000/api/user/login`, {
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
        <div className='dark:bg-neutral-900'>
            <div className='shadow-lg rounded-lg w-8/12 flex flex-1 m-auto my-20 dark:bg-neutral-800 '>
                <form onSubmit={handleSubmit(onSubmit)} className='p-10 flex flex-col  w-3/6 '>
                    <p className='text-textcollor dark:text-white text-4xl mb-10'>Login</p>

                    <label className='flex flex-col text-textcollor mt-5 dark:text-white '> Email:
                        <input {...register('user_email', {
                            required: "Email field is required"
                        })} className='Input-primary'></input>
                    </label>
                    {errors.user_email && <div className='text-red-500'>{errors.user_email.message}</div>}

                    <label className='flex flex-col text-textcollor mt-5 dark:text-white '> Password:
                        <input type='password' {...register('user_password', {
                            required: 'Password field is required'
                        })} className='Input-primary'></input>
                    </label>
                    {errors.user_password && <div className='text-red-500'>{errors.user_password.message}</div>}


                    <button className='Button-primary w-3/6 flex m-auto justify-center my-5'>Login</button>
                    <p className='text-textcollor flex justify-center dark:text-white '>Dont have account? <Link to='/user/register' className='text-Primary'>Register</Link></p>


                </form>
                <div className='bg-gradient-to-r from-Primary to-red-500 w-3/6 rounded-r-lg flex items-center justify-center'>
                    <p className='text-white text-center text-6xl font-bold'>Join our Family!</p>
                </div>
            </div>
        </div>

    )
}

export default Login