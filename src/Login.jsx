import { CiUser } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";

const Login = () => {
return(
    <article className="bg-slate-700 backdrop-filter backdrop-blur-sm bg-opacity-30 p-8 rounded-lg ">
        <h1 className="text-center text-slate-200 text-3xl font-bold mb-5">LOGIN</h1>
        <form action="">
            <div className="relative my-3">
                <input type="email" className="block w-72 py-2 px-0 text-sm bg-transparent border-0 border-b-2 border-slate-300 appearance-none dark:focus:border-[#f59851] focus:outline-none focus:ring-0 focus:text-white focus:border-[#f5842f] peer" />
                <label htmlFor="" className="absolute  text-[18px] text-slate-200  duration-200 transform  scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#f5842f] peer-focus:dark:text-[#f59851] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">  Email</label>
                <CiUser className="absolute top-3 right-2 text-slate-200  text-[18px]" />
            </div>

            <div className="relative my-3">
                <input type="email" className="block w-72 py-2 px-0 text-sm bg-transparent border-0 border-b-2 border-slate-300 appearance-none dark:focus:border-[#f59851] focus:outline-none focus:ring-0 focus:text-white focus:border-[#f5842f] peer" />
                <label htmlFor="" className="absolute  text-[18px] text-slate-200  duration-200 transform  scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#f5842f] peer-focus:dark:text-[#f59851] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                <CiUnlock className="absolute top-3 right-2 text-slate-200  text-[18px]" />
            </div>
            <article className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-x-2">
    <input type="checkbox" name="" id=""/>
    <label htmlFor="Remember Me" className="text-white">Remember Me</label>
</div>
<div className="text-white">Forgot Password?</div>
            </article>

            <button className="w-full py-2 text-xl rounded-lg bg-[#f5842f]  text-white mt-6 hover:text-[#f5842f]  hover:bg-white transition-colors duration-300">Login</button>
        </form>
        <div className="mt-6">
            <span className="text-white">Need an account? <a className="text-[#f5842f]"> Create an account</a> </span>
        </div>
    </article>
)
}

export default Login