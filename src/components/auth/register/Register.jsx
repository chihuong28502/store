import image from '../../../Images/auth/image.jpg';
import iconFacebook from '../../../Images/svg/Facebook.svg';
import iconGoogle from '../../../Images/svg/Google.svg';
import { Link } from 'react-router-dom';
function Register() {
    return (
        <div className="block mt-[5rem]">
            <div className="md:mt-5 p-5 flex flex-col-reverse lg:flex lg:flex-row lg:justify-between">
                <div className="flex-1 flex gap-2 flex-col lg:w-[60%] lg:px-[15vw] lg:h-[100%] lg:flex-none lg:justify-center">
                    <div className="">
                        <h1 className="text-2xl font-bold py-3">
                            Welcome Back 👋
                        </h1>
                        <p className="pb-[0.65rem]">
                            {`Today is a new day. It's your day. You shape it. Sign in to start
            managing your projects.`}
                        </p>
                    </div>
                    <form className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1 ">
                            <label htmlFor="user">Username</label>
                            <input
                                type="user"
                                name="user"
                                placeholder="Username"
                                className="h-11 rounded-lg outline-none border border-gray-300 bg-gray-100 px-3 text-gray-600"
                            />
                        </div>
                        <div className="flex flex-col gap-1 ">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Example@email.com"
                                className="h-11 rounded-lg outline-none border border-gray-300 bg-gray-100 px-3 text-gray-600"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="h-11 rounded-lg outline-none border border-gray-300 bg-gray-100 px-3 text-gray-600"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="password">Re-Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Re-Password"
                                className="h-11 rounded-lg outline-none border border-gray-300 bg-gray-100 px-3 text-gray-600"
                            />
                        </div>
                        <div className="md:flex md:gap-2">
                            <Link
                                to={`/login`}
                                className="md:w-[50%] md:m-0 m-2 w-[100%] flex justify-center h-11 rounded-lg bg-blue-600 text-white cursor-pointer"
                            >
                                <button>Sign in</button>
                            </Link>
                            <button className="md:w-[50%] md:m-0 m-2 w-[100%] h-11 rounded-lg bg-blue-600 text-white cursor-pointer">
                                Sign up
                            </button>
                        </div>
                    </form>
                    <div className=" w-full flex items-center py-1">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <p>
                            or <span> Sign in with</span>
                        </p>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>
                    <div className="w-100 flex justify-between lg:flex lg:flex-col lg:gap-5">
                        <button className="w-[45%] flex justify-center cursor-pointer items-center gap-1 bg-gray-100 border border-gray-300 rounded-lg h-11 p-2 lg:w-[100%]">
                            <img src={iconGoogle} alt="" />
                            <p className="lg:flex lg:gap-1">
                                <span className="hidden lg:flex lg:flex-1">
                                    Sign in with
                                </span>{' '}
                                Google
                            </p>
                        </button>
                        <button className="w-[45%] flex justify-center cursor-pointer items-center gap-1 bg-gray-100 border border-gray-300 rounded-lg h-11 p-2 lg:w-[100%]">
                            <img src={iconFacebook} alt="" />
                            <p className="lg:flex lg:gap-1">
                                <span className="hidden lg:flex lg:flex-1">
                                    Sign in with
                                </span>{' '}
                                Facebook
                            </p>
                        </button>
                    </div>
                </div>
                <div className="w-full h-[30%] lg:w-[40%] lg:h-[100%]">
                    <img
                        src={image}
                        alt="image"
                        className="w-full h-full rounded-xl object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

export default Register;
