import React, { useState } from 'react';

const AddMedicament = ({ medicament }) => {
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <div className="hero min-h-1000 bg-base-200 flex items-center justify-center">
            <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100 p-8 m-20">
                <form
                    className="card-body text-center"
                    onSubmit={handleSubmit}
                >
                    <h1 className="text-5xl font-bold mb-8">Add {medicament.name} +</h1>

                    <div className="form-control mb-8">
                        <label className="label">
                            <span className="label-text text-xl"><strong>When it should take?</strong></span>
                        </label>
                        <input type="text" placeholder="HOURS" className="input input-bordered text-lg mb-2"
                            required
                            value={hour}
                            onChange={(e) => setHour(e.target.value)}
                        />
                        <input type="text" placeholder="MINUTES" className="input input-bordered text-lg"
                            required
                            value={minute}
                            onChange={(e) => setMinute(e.target.value)}
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary text-xl">Add it</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddMedicament;