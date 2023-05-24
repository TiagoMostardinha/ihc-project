import homeImg from './img/home.png';
import card1Img from './img/card1.png';

import { Link } from 'react-router-dom';
import useFetch from "./useFetch";

const Home = ({user}) => {
    console.log(user && true);
    return (
        <div className="home">
            <div className="hero-container">
                <div className="hero min-h-screen" style={{ backgroundImage: `url(${homeImg})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                     <div className="hero-content text-center text-neutral-content">
                         <div className="max-w-7xl">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5 text-xl ">Pharmasysm is a website that offers medication management services for its users. The website is designed to help people manage their medications easily, safely, and efficiently. Pharmasysm provides a platform where users can create a personal profile that contains information about their medications, dosages, and schedules.
Once the user has set up their profile, they can easily add new medications, update dosages or schedules, and receive reminders about when to take their medications. The website also offers a range of features that make it easy to track medication usage and avoid missed doses.
Pharmasysm also provides a medication tracking system that allows users to monitor their medication usage over time. This feature helps users keep track of their progress and identify potential problems or issues with their medication regimen. Additionally, the website offers educational resources and information about medications and health conditions, which can be helpful for people who want to learn more about their medications or health.</p>
                            {!user &&<p className="btn btn-primary"><Link to='/signin'>Get Started</Link></p>}
                        </div>
                    </div>
                </div>
            </div>

            <div className="info-container m-0 p-10 bg-slate-200">
                <div className='flex justify-around items-center flex-row'>
                    <div className='flex w-40 m-0 flex-col items-center'>
                        <h2 className='card-title'>Efficient</h2>
                    </div>

                    <div className='flex w-40 m-0 flex-col items-center'>
                        <h2 className='card-title'>User Friendly</h2>
                    </div>

                    <div className='flex w-40 m-0 flex-col items-center'>
                        <h2 className='card-title'>Informative</h2>
                    </div>

                    <div className='flex w-40 m-0 flex-col items-center'>
                        <h2 className='card-title'>Reliable</h2>
                    </div>
                </div>
            </div>

            <div className="cards-container m-20">

                <div className="flex justify-around items-center flex-row">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">See your wallet</h2>
                            <div className="card-actions justify-end">
                                <Link to="/waller" className="btn btn-primary">Go There</Link>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Search for drugs!</h2>
                            <div className="card-actions justify-end">
                                <Link to="/search" className="btn btn-primary">Go There</Link>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">See your profile</h2>
                            <div className="card-actions justify-end">
                                <Link to="/profile1" className="btn btn-primary">Go There</Link>
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