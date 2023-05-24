const medicaments = [
    {
      name: "Paracetamol",
      description: "Paracetamol is a pain reliever and a fever reducer.",
      symptoms: ["headache", "muscle aches", "arthritis", "backache", "toothaches", "colds", "fevers"],
      id: 1,
    },
    {
      name: "Brufen",
      description: "Brufen is a pain reliever.",
      symptoms: ["inflammation", "muscle aches", "fevers", "headache"],
      id: 2,
    },
    {
      name: "Zestril",
      description: "Lisinopril is the generic drug name for Zestril. It is a blood pressure medication in the angiotensin converting enzyme (ACE) inhibitor group of drugs.",
      symptoms: ["inflammation", "fevers", "headache"],
      id: 3,
    },
    {
      name: "Levothyroxine (Synthroid)",
      description: "This medication is an artificial form of thyroxine (T4), a hormone that comes from the thyroid gland.",
      symptoms: ["inflammation", "fevers"],
      id: 4,
    },
    {
      name: "Atorvastatin (Lipitor)",
      description: "Statin therapies, such as atorvastatin (Lipitor), are the first-line treatment option for high cholesterol.",
      symptoms: ["inflammation", "muscle aches", "fevers", "headache"],
      id: 5,
    },
    {
      name: "Metformin (Glucophage)",
      description: "Metformin (Glucophage) is a diabetes medication.",
      symptoms: ["inflammation", "fevers"],
      id: 6,
    },
    {
      name: "Ibuprofen",
      description: "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) that provides relief from pain, fever, and inflammation.",
      symptoms: ["headache", "muscle aches", "fevers"],
      id: 7,
    },
    {
      name: "Amoxicillin",
      description: "Amoxicillin is an antibiotic used to treat bacterial infections such as respiratory tract infections, urinary tract infections, and skin infections.",
      symptoms: ["infection", "fevers", "sore throat"],
      id: 8,
    },
    {
      name: "Loratadine",
      description: "Loratadine is an antihistamine used to relieve symptoms of allergies such as sneezing, runny nose, and itching.",
      symptoms: ["allergies", "runny nose", "itching"],
      id: 9,
    },
    {
      name: "Omeprazole",
      description: "Omeprazole is a proton pump inhibitor (PPI) used to reduce stomach acid production and treat conditions such as gastroesophageal reflux disease (GERD) and stomach ulcers.",
      symptoms: ["acid reflux", "stomach ulcers", "indigestion"],
      id: 10,
    },
  ];
  

  localStorage.setItem("medicaments", JSON.stringify(medicaments));

  export default medicaments;
