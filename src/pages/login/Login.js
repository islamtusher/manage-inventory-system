import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../additional/firebase.config';

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm(); // react form hooks
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (user || error) {
        console.log(user, error);
    }
    const onSubmit = (data) => {
        signInWithEmailAndPassword(data?.email, data?.password)
    }
    
    return (
        <div className="min-h-[90vh] flex items-center">
            <div className="card  w-full max-w-sm mx-auto shadow-2xl bg-base-100">
                <div className="card-body pt-3 ">
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mt-4'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-lg">Email</span>
                            </label>
                            <input
                                type='email'
                                className="input input-bordered focus:outline-0 focus:border-primary w-full "
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    }
                                    })
                                }
                            />
                            {errors?.email?.type === 'required' && <p className='text-red-500'>{errors?.email?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-lg">Password</span>
                            </label>
                            <input
                                type='password'
                                autoComplete='current-password'
                                className="input input-bordered focus:outline-0 focus:border-primary w-full  "
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    }
                                    
                                })}
                            />
                            {errors?.password?.type === 'required' && <p className='text-red-500'>{errors?.password?.message}</p>}
                            
                        </div>

                        <button  type='submit' className="btn bg-primary hover:bg-white hover:text-accent  w-full mt-6 mb-2" >SIGN UP</button>
                        <p className='text-center text-sm '>
                            New User? 
                            <span className='text-primary cursor-pointer'> Create New Account</span>
                        </p>
                    </form>  
                    <div className="divider">OR</div>
                    <button
                        className="flex items-center text-black btn bg-white hover:border-primary hover:bg-white hover:text-primary "
                        type='submit'>
                        <img className='w-8 mr-3' src="./images/google.png" alt="img" />
                        Google Sign In
                    </button> 
                </div>
            </div>
        </div>
    )
};

export default Login;