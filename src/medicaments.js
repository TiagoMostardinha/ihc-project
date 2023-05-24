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
  {
    name: "Omeprazole",
    description: "Omeprazole is a proton pump inhibitor (PPI) that reduces the production of stomach acid.",
    symptoms: ["indigestion", "heartburn", "acid reflux"],
    use: "Treats gastroesophageal reflux disease (GERD) and stomach ulcers",
    indications: "Take before a meal, preferably in the morning",
    contraindications: "Not recommended for individuals with liver problems",
    warning: "Long-term use may increase the risk of bone fractures",
    adverse_effects: "May cause headaches or diarrhea in some patients",
    id: 7,
  },
  {
    name: "Ibuprofen",
    description: "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) that reduces pain, inflammation, and fever.",
    symptoms: ["headache", "muscle aches", "fevers", "menstrual cramps"],
    use: "Effective for relieving mild to moderate pain and reducing inflammation",
    indications: "Take with food to minimize stomach irritation",
    contraindications: "Avoid if you have a history of stomach ulcers or bleeding disorders",
    warning: "May increase the risk of heart attack or stroke, especially with long-term use",
    adverse_effects: "May cause stomach upset or allergic reactions in some patients",
    id: 8,
  },
  {
    name: "Diazepam (Valium)",
    description: "Diazepam, marketed under the brand name Valium, is a benzodiazepine that affects chemicals in the brain to reduce anxiety and promote relaxation.",
    symptoms: ["anxiety", "insomnia", "muscle spasms", "seizures"],
    use: "Treats anxiety disorders, alcohol withdrawal symptoms, and muscle spasms",
    indications: "Take as prescribed by your healthcare provider",
    contraindications: "Avoid if you have severe respiratory problems or glaucoma",
    warning: "May cause drowsiness or dizziness; avoid alcohol while on this medication",
    adverse_effects: "May cause confusion or memory problems in some patients",
    id: 9,
  },
  {
    name: "Cetirizine (Zyrtec)",
    description: "Cetirizine, sold under the brand name Zyrtec, is an antihistamine used to relieve allergy symptoms such as sneezing, itching, watery eyes, and runny nose.",
    symptoms: ["allergies", "hay fever"],
    use: "Provides relief from allergy symptoms",
    indications: "Take once daily, preferably in the evening",
    contraindications: "Not recommended for children under 2 years of age",
    warning: "May cause drowsiness; avoid driving or operating machinery if affected",
    adverse_effects: "May cause dry mouth or fatigue in some patients",
    id: 10,
  },
  {
    name: "Amoxicillin",
    description: "Amoxicillin is an antibiotic used to treat various bacterial infections.",
    symptoms: ["bacterial infections", "respiratory infections", "skin infections"],
    use: "Effective against a wide range of bacterial infections",
    indications: "Take with or without food as directed by your doctor",
    contraindications: "Avoid if you have a known allergy to penicillin",
    warning: "Finish the full course of medication as prescribed",
    adverse_effects: "May cause nausea or diarrhea in some patients",
    id: 11,
  },
  {
    name: "Lorazepam (Ativan)",
    description: "Lorazepam, marketed under the brand name Ativan, is a benzodiazepine used to treat anxiety disorders and relieve anxiety symptoms.",
    symptoms: ["anxiety", "panic disorders", "insomnia"],
    use: "Provides short-term relief from anxiety and related conditions",
    indications: "Take as prescribed by your healthcare provider",
    contraindications: "Avoid if you have severe respiratory problems or glaucoma",
    warning: "May cause drowsiness or dizziness; avoid alcohol while on this medication",
    adverse_effects: "May cause sedation or memory problems in some patients",
    id: 12,
  },
  {
    name: "Montelukast (Singulair)",
    description: "Montelukast, sold under the brand name Singulair, is a medication used to manage asthma and relieve symptoms of seasonal allergies.",
    symptoms: ["asthma", "seasonal allergies", "allergic rhinitis"],
    use: "Helps control asthma and allergy symptoms",
    indications: "Take once daily in the evening, with or without food",
    contraindications: "Not recommended for children under 1 year of age",
    warning: "Report any mood or behavioral changes to your doctor",
    adverse_effects: "May cause headache or upset stomach in some patients",
    id: 13,
  },
  {
    name: "Escitalopram (Lexapro)",
    description: "Escitalopram, marketed under the brand name Lexapro, is a selective serotonin reuptake inhibitor (SSRI) used to treat depression and anxiety disorders.",
    symptoms: ["depression", "generalized anxiety disorder"],
    use: "Treats depression and anxiety disorders",
    indications: "Take as prescribed by your healthcare provider",
    contraindications: "Avoid if you have a known allergy to escitalopram",
    warning: "May increase the risk of suicidal thoughts, especially in young adults",
    adverse_effects: "May cause nausea or sexual dysfunction in some patients",
    id: 14,
  },
  {
    name: "Ranitidine (Zantac)",
    description: "Ranitidine, sold under the brand name Zantac, is an H2 blocker that reduces the production of stomach acid and is used to relieve heartburn and acid reflux.",
    symptoms: ["heartburn", "acid reflux", "indigestion"],
    use: "Provides relief from heartburn and acid reflux symptoms",
    indications: "Take as needed, before or after a meal",
    contraindications: "Avoid if you have a known allergy to ranitidine",
    warning: "Do not take more than the recommended dose",
    adverse_effects: "May cause headache or constipation in some patients",
    id: 15,
  }
];

localStorage.setItem("medicaments", JSON.stringify(medicaments));

export default medicaments;
