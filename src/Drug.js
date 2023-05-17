const Drug = () => {
    const medicamento = "Paracetamol";
    const what = "The medicine from a natural plant";
    const commonUse = "Perfect for headache relief";
    const indications = "Always take after each meal";
    const contraindications = "Do not consume if you are pregnant";
    const warning = "The medicine should be stored in a cool and dry place.";
    const adverseEffects = "May cause brief stomach pain in some patients";
    return (
        <div className="flex justify-center items-center h-auto m-20">
            <div className="flex flex-col w-full">
                <h2 className="text-xl"style={{ paddingBottom: "40px" }}>{medicamento}</h2>
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