import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import medicaments from "./medicaments.js";


function Drug({ id }) {
    const { id: urlId } = useParams();
    // Convert the extracted id to a number
    id = Number(urlId);
    const medicine = medicaments.find((med) => med.id === id);
    console.log(medicine);

    const medicamento = medicine.name;
    const what = medicine.description;
    const commonUse = medicine.use;
    const indications = medicine.indications;
    const contraindications = medicine.contraindications;
    const warning = medicine.warning;
    const adverseEffects = medicine.adverse_effects;



    return (
        <div className="flex justify-center items-center h-full m-20 ">
            <div className="flex flex-col w-full h-full py-20">
                <h2 className="text-4xl" style={{ paddingBottom: "40px" }}>{medicamento}</h2>
                <h5 className="text-lg" style={{ paddingBottom: "10px" }}>{what}</h5>
                <div className="divider"></div>
                <div className="grid h-20 place-items-rigth">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 2fr)", gridGap: "80px" }}>
                        <div style={{ paddingRight: "auto" }}>
                            <h1 className="badge">Common use:</h1>
                            <p>{commonUse}</p>
                        </div>
                        <div style={{ paddingRight: "auto" }}>
                            <h1 className="badge">Indications:</h1>
                            <p style={{ paddingBottom: "10px" }}>{indications}</p>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="grid h-20 place-items-rigth">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
                        <div>
                            <h1 className="badge">Contraindications:</h1>
                            <p>{contraindications}</p>
                        </div>
                        <div>
                            <h1 className="badge">Warning:</h1>
                            <p>{warning}</p>
                        </div>
                        <div>
                            <h1 className="badge">Adverse Effects:</h1>
                            <p>{adverseEffects}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Drug;
