import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Search_Tiago = () => {
  let medicaments = [];
  const [selectedSymptom, setSelectedSymptom] = useState('');
  const [filteredMeds, setFilteredMeds] = useState([]);

  const handleSelectChange = (e) => {
    setSelectedSymptom(e.target.value);
  };

  const handleButtonClick = () => {
    const filteredMeds = medicaments.filter(medicament =>
      medicament.symptoms.includes(selectedSymptom)
    );
    setFilteredMeds(filteredMeds);
  };

  const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

  return (
    <div className="min-h-screen">
    <div className="search-container p-10">
      <div className="container mx-auto m-30 px-4">
        <h2 className="text-3xl font-bold mb-4">Search</h2>
        <div className="flex items-center justify-center">
          <div className="flex-1 mr-4">
            <div className="form-control">
              <div className="input-group">
                <input type="text" placeholder="Search…" className="input input-bordered w-full" />
                <button className="btn btn-square">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
              </div>
            </div>
          </div>
          <div className="form-control">
            <div className="input-group">
              <select className="select select-bordered" onChange={handleSelectChange}>
                <option disabled defaultValue={"Which Symptoms?"}>Choose your symptoms...</option>
                <option>Stomach Ache</option>
                <option>headache</option>
                <option>Nauseas</option>
                <option>Diarrhea</option>
                <option>Others...</option>
              </select>
              <button className="btn" onClick={handleButtonClick}>Go</button>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="grid grid-cols-3 gap-4">
          <div className="medicaments-list">
            {medicaments && filteredMeds.map((medicament) => (
              <div className="medicament-item flex items-center justify-between bg-gray-100 p-4" key={medicament.id}>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-gray-800">{medicament.name}</h2>
                  <p className="text-gray-600">{medicament.description}</p>
                  <Link to="/drug" className="btn btn-primary">Go There</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Search_Tiago;
