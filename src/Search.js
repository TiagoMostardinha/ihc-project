import React from "react";
import { Link } from "react-router-dom";

const Search = () => {
    const medicaments = JSON.parse(localStorage.getItem("medicaments"));

    return (
        <div>
            <div className="flex flex-col items-center space-y-4 py-10">
                <div className="row search-container flex justify-center items-center">
                    <div className="form-control">
                        <div className="input-group">
                            <input type="text" placeholder="Search…" className="input input-bordered w-full" />
                            <button className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row search-container flex justify-center items-center">
                    <div className="flex flex-row space-x-4">
                        <div className="row search-container flex justify-center items-center h-auto space-x-16">
                            <div className="flex flex-row space-x-4">
                                <div className="form-control">
                                    <label className="">
                                        <input type="checkbox" />
                                        <span className="checkbox-mark"></span>
                                        <span className="ml-1">Back Pain</span>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="">
                                        <input type="checkbox" />
                                        <span className="checkbox-mark"></span>
                                        <span className="ml-1">Nauseas</span>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="">
                                        <input type="checkbox" />
                                        <span className="checkbox-mark"></span>
                                        <span className="ml-1">Diarrhea</span>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="">
                                        <input type="checkbox" />
                                        <span className="checkbox-mark"></span>
                                        <span className="ml-1">Acid Reflux</span>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="">
                                        <input type="checkbox" />
                                        <span className="checkbox-mark"></span>
                                        <span className="ml-1">Stomach Ulcers</span>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="">
                                        <input type="checkbox" />
                                        <span className="checkbox-mark"></span>
                                        <span className="ml-1">Indigestion</span>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="">
                                        <input type="checkbox" />
                                        <span className="checkbox-mark"></span>
                                        <span className="ml-1">+ Others</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    <div className="medicaments-list">
                        {/* foreach element in medicaments show the element */}
                        {medicaments.map((medicament) => (
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

    );
}

export default Search;