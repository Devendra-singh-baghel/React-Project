import { Link } from 'react-router';

function Signup() {
    return (
        <div className="min-h-180 flex flex-col items-center justify-center">
            <div className="w-full max-w-md space-y-8">
                <div className='text-center'>
                    <span className='text-gray-600 text-4xl lg:text-5xl font-bold'>Wander</span>
                    <span className='text-red-700 text-4xl lg:text-5xl font-bold'>Wise</span>
                </div>
                <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-6">Sign up</h2>
                    <form className="space-y-6">
                        <div>
                            <input className='w-full p-3 border rounded-md'
                                type="text"
                                placeholder="Full Name"
                            />
                        </div>
                        <div>
                            <input className='w-full p-3 border rounded-md'
                                type="email"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <input className='w-full p-3 border rounded-md'
                                type="tel"
                                placeholder="Phone number"
                            />
                        </div>
                        <div>
                            <input className='w-full p-3 border rounded-md'
                                type="password"
                                placeholder="Password"
                                autoComplete="off"
                            />
                        </div>
                        <button className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 cursor-pointer">
                            Sign up
                        </button>
                    </form>
                    <p className="mt-6 text-center text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="text-blue-600 hover:underline">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup;