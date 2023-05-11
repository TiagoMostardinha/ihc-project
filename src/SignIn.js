import { Link } from 'react-router-dom';
import NavBar from './Navbar';
const SignIn = () => {
    return (
        <div className="signin">
            <NavBar />
            <div class="flex justify-center">
                <h1 className="text-4xl">Sign In</h1>
            </div>
            <div class="container mx-sm pl-96 pt-16 pb-2">
                <h1>Name</h1>
            </div>
            <div class="container mx-lg flex justify-center pb-4 pl-24">
                <input type="text" placeholder="" className="input input-bordered input-sm w-3/5" />
            </div>
            <div class="container mx-sm pl-96 pt-4 pb-2">
                <h1>E-mail</h1>
            </div>
            <div class="container mx-lg flex justify-center pb-4 pl-24">
                <input type="text" placeholder="" className="input input-bordered input-sm w-3/5" />
            </div>
            <div class="container mx-sm pl-96 pt-4 pb-2">
                <h1>Password</h1>
            </div>
            <div class="container mx-lg flex justify-center pb-4 pl-24">
                <input type="text" placeholder="" className="input input-bordered input-sm w-3/5" />
            </div>
            <div class="container mx-sm pl-96 pt-4 pb-2">
                <h1>Country</h1>
            </div>
            <div class="container mx-lg flex justify-center pb-4 pl-24"> 
                <input type="text" placeholder="" className="input input-bordered input-sm w-3/5" />
            </div>
            <div class="container mx-sm pl-96 pt-4 pb-2">
                <h1>Weight</h1>
            </div>
            <div class="container mx-lg flex justify-center pb-4 pl-24">
                <input type="text" placeholder="" className="input input-bordered input-sm w-3/5" />
            </div>
            <div class="container mx-sm pl-96 pt-4 pb-2">
                <h1>Height</h1>
            </div>
            <div class="container mx-lg flex justify-center pb-4 pl-24">
                <input type="text" placeholder="" className="input input-bordered input-sm w-3/5" />
            </div>
            <div class="container mx-sm pl-96 pt-4 pb-2">
                <h1>Telephone</h1>
            </div>
            <div class="container mx-lg flex justify-center pb-4 pl-24">
                <input type="text" placeholder="" className="input input-bordered input-sm w-3/5" />
            </div>
            <div class="container mx-sm pl-96 pt-4 pb-2">
                <h1>Sex</h1>
            </div>
            <div class="container mx-lg pl-96 pb-4">
                <select class="select select-bordered select-sm w-full max-w-xs">
                    <option disabled selected>Select One</option>
                    <option>Female</option>
                    <option>Male</option>
                </select>
            </div>
            <div class="container mx-lg flex justify-center pb-4 pl-24">
                <Link to='/logged'><button class="btn">Sign In</button></Link>
                
            </div>
        </div>
    );
}
export default SignIn;