import { Link } from 'react-router-dom';
const LogIn = () => {
    return (
        <div className="login">
            <div class="flex justify-center pt-10">
                <h1 className="text-6xl">Login</h1>
            </div>
            <div class="container mx-sm flex justify-center pt-8 pb-4 pl-96">
                <h1 className="text-2xl">E-mail</h1>
            </div>
            <div class="container mx-lg flex justify-center pb-4 pl-96">
                <input type="text" placeholder="" className="input input-bordered input-sm w-1/2" />
            </div>
            <div class="container mx-sm flex justify-center pl-96 pt-4 pb-4">
                <h1 className="text-2xl">Password</h1>
            </div>
            <div class="container mx-lg flex justify-center pb-2 pl-96">
                <input type="text" placeholder="" className="input input-bordered input-sm w-1/2" />
            </div>
            <div class="container mx-lg flex justify-center pt-4 pl-96">
                <Link to='/'><button class="btn">Log In</button></Link>
            </div>
            <div class="container mx-lg flex justify-center pt-2 pl-96">
                or
            </div>
            <div class="container mx-lg flex justify-center pt-2 pb-56 pl-96">
                <Link to='/signin'><button class="btn">Sign in</button></Link>
            </div>
        </div>
    );
}
export default LogIn;