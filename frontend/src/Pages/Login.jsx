import Input from "../Components/Input";
function Login(){
    return(
        <div className="flex h-screen">
            <div className="relative h-152 w-96 bg-surface-a10 m-auto shadow-[0_0_1px_1px] shadow-primary-a0 rounded-lg text-center">
                <div className="w-80 mx-auto">
                    <Input name="login" type="text" id="login" placeholder="Login" className="mt-12"/>
                    <Input name="password" type="password" id="password" placeholder="Password" className="mt-6"/>
                    <a href="#" className="block text-right text-white text-sm mt-2">Forgot Password?</a>
                    <div className="flex items-center mt-6">
                      <div className="flex-1 border-t border-white"></div>
                      <span className="mx-4 text-white text-xs">OR</span>
                      <div className="flex-1 border-t border-white"></div>
                    </div>
                    <button className="w-full h-11 px-6 rounded-md bg-surface-a20 text-sm text-white shadow-[0_0_1px_1px] shadow-primary-a10 hover:shadow-[0_0_4px_1px] focus:shadow-[0_0_4px_1px] duration-150 focus:outline-none mt-14">
                        <i className="fa-brands fa-google mx-2 text-lg"></i>Log in with Google
                    </button>
                    <button className="w-full h-11 px-6 rounded-md bg-surface-a20 text-sm text-white shadow-[0_0_1px_1px] shadow-primary-a10 hover:shadow-[0_0_4px_1px] focus:shadow-[0_0_4px_1px] duration-150 focus:outline-none mt-6">
                        <i className="fa-solid fa-envelope mx-2 text-lg"></i>Log in with Email
                    </button>
                    <button type="submit" className="w-full h-11 px-6 rounded-md bg-primary-a0 text-sm text-white shadow-primary-a0 hover:shadow-[0_0_4px_1px] focus:shadow-[0_0_4px_1px] duration-150 focus:outline-none cursor-pointer mt-14">Log In</button>
                    <p href="#" className="text-white text-sm mt-8">Don't have an account? <a href="#" className="text-primary-a0">Sign Up</a></p>
                </div>
            </div>
        </div>
    );
}

export default Login
