const medicaments = [
  {
    name: "Paracetamol",
    description: "Paracetamol is a pain reliever and a fever reducer.",
    symptoms: ["headache", "muscle aches", "arthritis", "backache", "toothaches", "colds", "fevers"],
    use: "Perfect for headache relief",
    indications: "Always take after each meal",
    contraindications: "Do not consume if you are pregnant",
    warning: "The medicine should be stored in a cool and dry place.",
    adverse_effects: "May cause brief stomach pain in some patients",
    id: 1,
  },
  {
    name: "Brufen",
    description: "Brufen is a pain reliever.",
    symptoms: ["inflammation", "muscle aches", "fevers", "headache"],
    use: "Effective for reducing inflammation",
    indications: "Take with food to prevent stomach irritation",
    contraindications: "Avoid if you have a history of stomach ulcers",
    warning: "Long-term use can increase the risk of cardiovascular problems.",
    adverse_effects: "May cause gastrointestinal bleeding in rare cases",
    id: 2,
  },
  {
    name: "Zestril",
    description: "Lisinopril is the generic drug name for Zestril. It is a blood pressure medication in the angiotensin converting enzyme (ACE) inhibitor group of drugs.",
    symptoms: ["inflammation", "fevers", "headache"],
    use: "Treats high blood pressure and heart failure",
    indications: "Follow the prescribed dosage and schedule",
    contraindications: "Not recommended during pregnancy or if you have kidney problems",
    warning: "Avoid taking potassium supplements while on this medication.",
    adverse_effects: "May cause dizziness or cough in some patients",
    id: 3,
  },
  {
    name: "Levothyroxine (Synthroid)",
    description: "This medication is an artificial form of thyroxine (T4), a hormone that comes from the thyroid gland.",
    symptoms: ["inflammation", "fevers"],
    use: "Treats underactive thyroid (hypothyroidism)",
    indications: "Take on an empty stomach, at least 30 minutes before breakfast",
    contraindications: "Inform your doctor if you have adrenal gland problems",
    warning: "Requires regular monitoring of thyroid hormone levels",
    adverse_effects: "May cause temporary hair loss in some patients",
    id: 4,
  },
  {
    name: "Atorvastatin (Lipitor)",
    description: "Statin therapies, such as atorvastatin (Lipitor), are the first-line treatment option for high cholesterol.",
    symptoms: ["inflammation", "muscle aches", "fevers", "headache"],
    use: "Lowers cholesterol levels and reduces the risk of cardiovascular events",
    indications: "Take at bedtime for better absorption",
    contraindications: "Avoid grapefruit and grapefruit juice while on this medication",
    warning: "Report any unexplained muscle pain or weakness to your doctor",
    adverse_effects: "May cause liver enzyme abnormalities in rare cases",
    id: 5,
  },
  {
    name: "Metformin (Glucophage)",
    description: "Metformin (Glucophage) is a diabetes medication.",
    symptoms: ["inflammation", "fevers"],
    use: "Manages blood sugar levels in type 2 diabetes",
    indications: "Take with meals to reduce gastrointestinal side effects",
    contraindications: "Not recommended for individuals with severe kidney or liver disease",
    warning: "Avoid excessive alcohol consumption while on this medication",
    adverse_effects: "May cause diarrhea or nausea in some patients",
    id: 6,
  },
  // Add more medicines below...
];

module.exports = medicaments;


  localStorage.setItem("medicaments", JSON.stringify(medicaments));

  export default medicaments;
