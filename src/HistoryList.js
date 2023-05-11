const HistoryList = ({ medicaments, user }) => {

    const userMedsIds = user.history.map(med => med);
    const filteredMeds = medicaments.filter(med => userMedsIds.includes(med.id));

    return (
        <div className="history-item m-2 border-b-2 border-gray-200 p-2">
            {filteredMeds.map((medicament) => (
                <div className="h-item" key={medicament.id}>
                    <h2 className="text-lg font-bold text-gray-900">{medicament.name}</h2>
                    <p>{medicament.description}</p>
                    {/* <p className="text-right">{user.history.find(med => med === medicament.id).date}</p> */}
                </div>
            ))}
        </div>

    );
}

export default HistoryList;