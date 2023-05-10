import MyMeds from "./MyMeds.js";

const Wallet = () => {
    return (
        <div className="wallet-container mt-10 mb-10">
            <div className="flex w-full">
                <div className="grid flex-grow card bg-base-300 rounded-box place-items-center ml-10 mr-5">
                    <MyMeds />
                </div>
                <div className="grid flex-grow card bg-base-300 rounded-box place-items-center ml-5 mr-10">
                    <MyMeds />
                </div>
            </div>

        </div>
    );
}

export default Wallet;