import homeImg from './img/home.png';
import card1Img from './img/card1.png';

import { Link } from 'react-router-dom';
import useFetch from "./useFetch";

const Home = () => {
    return (
        <div className="home">
            <div className="hero-container">
                <div className="hero min-h-screen" style={{ backgroundImage: `url(${homeImg})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <p className="btn btn-primary"><Link to='/'>Get Started</Link></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="info-container m-0 p-10 bg-slate-200">
                <div className='flex justify-around items-center flex-row'>
                    <div className='flex w-40 m-0 flex-col items-center'>
                        <img className='mask mask-diamond' src={card1Img} alt="Search Medication" />
                        <h2 className='card-title'>Does Lorem</h2>
                        <p className='text-sm'>Does this!</p>
                    </div>

                    <div className='flex w-40 m-0 flex-col items-center'>
                        <img className='mask mask-diamond' src={card1Img} alt="Search Medication" />
                        <h2 className='card-title'>Does Lorem</h2>
                        <p className='text-sm'>Does this!</p>
                    </div>

                    <div className='flex w-40 m-0 flex-col items-center'>
                        <img className='mask mask-diamond' src={card1Img} alt="Search Medication" />
                        <h2 className='card-title'>Does Lorem</h2>
                        <p className='text-sm'>Does this!</p>
                    </div>

                    <div className='flex w-40 m-0 flex-col items-center'>
                        <img className='mask mask-diamond' src={card1Img} alt="Search Medication" />
                        <h2 className='card-title'>Does Lorem</h2>
                        <p className='text-sm'>Does this!</p>
                    </div>
                </div>
            </div>

            <div className="cards-container m-20">

                <div className="flex justify-around items-center flex-row">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={card1Img} alt="Search Medication" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <Link to="/" className="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={card1Img} alt="Search Medication" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <Link to="/" className="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={card1Img} alt="Search Medication" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <Link to="/" className="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    </div>

                </div>




                {/* <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={card1Img} alt="Search Medication" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div> */}





            </div >
        </div >

    );
}

export default Home;