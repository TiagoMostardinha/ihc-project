import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div className="hero min-h-1000 bg-base-200 flex items-center justify-center">
            <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100 p-8 m-20">
                <div className="card-body text-center">
                    <h1 className="text-6xl font-bold mb-8">Login In</h1>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-xl">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered text-lg" />
                    </div>
                    <div className="form-control mb-8">
                        <label className="label">
                            <span className="label-text text-xl">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered text-lg" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary text-xl">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LogIn;