import HistoryList from "./HistoryList.js";
import medicamentsData from "./medicaments.js";
import { useState } from "react";

import WalletList from "./WalletList.js";

const Wallet = () => {
    const [user, setUser] = useState(() => {
        const userData = localStorage.getItem('user');
        return userData ? JSON.parse(userData) : '';
      });
    
    

    let medicaments = medicamentsData;
    return (
        <div className="min-h-screen flex p-10" >
            <div className="flex-2 w-2/3 mr-10">
                <div className="card shadow-2xl bg-base-100 p-12 min-h-full">
                    <h1 className="text-6xl font-bold mb-8 text-violet border-b-2 border-gray-500 pb-5">My Medicaments</h1>

                    {medicaments && <WalletList medicaments={medicaments} user={user} />}                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                        + Add
                    </button>
                </div>
            </div>
            <div className="flex-1 w-1/3">
                <div className="card shadow-2xl bg-base-100 p-12 m-12 ">
                    <h1 className="text-5xl font-bold mb-8 text-violet border-b-2 border-gray-500 pb-5">History</h1>
                    {medicaments && <HistoryList medicaments={medicaments} user={user} />}
                </div>
            </div>
        </div>
    );
}

export default Wallet;