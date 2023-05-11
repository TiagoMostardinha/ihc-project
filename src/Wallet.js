import HistoryList from "./HistoryList.js";
import useFetch from "./useFetch.js";

import WalletList from "./WalletList.js";

const Wallet = (user) => {
    const { data: medicaments, isPending, error } = useFetch('http://localhost:3000/medicaments');

    return (
        <div className="wallet-container flex p-10" >
            <div className="flex-2 w-2/3 mr-10">
                <div className="flex items-center justify-between bg-gray-200 p-4">
                    <h2 className="text-2xl font-bold text-gray-800">Medicaments</h2>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                        + Add
                    </button>
                </div>

                {medicaments && <WalletList medicaments={medicaments} user ={user.user} />}


                {/* <div className="medicament-item flex items-center justify-between bg-gray-100 p-4">
                    <div className="flex-grow">
                        <h2 className="text-2xl font-bold text-gray-800">Medicament Title</h2>
                        <p className="text-gray-600">Medicament Description</p>
                    </div>
                    <span className="countdown font-mono text-2xl">
                        <span style={{ "--value": 10 }}></span>h
                        <span style={{ "--value": 24 }}></span>m
                    </span>
                </div> */}



            </div>
            <div className="flex-1 w-1/3 shadow-2xl rounded-lg bg-gray-0">
                <h1 className="text-2xl font-bold text-center text-gray-900 border-b-2 border-gray-900 p-2">History</h1>
                
                {medicaments && <HistoryList medicaments={medicaments} user ={user.user} />}
                
                {/* <div className="history-item m-2 border-b-2 border-gray-200 p-2">
                    <h2 className="text-lg font-bold text-gray-900">Paracetamol</h2>
                    <p>some description...</p>
                    <p className="text-right">4 march 2023</p>
                </div> */}
            </div>
        </div>
    );
}

export default Wallet;