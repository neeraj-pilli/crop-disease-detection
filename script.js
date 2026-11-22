/**
 * Disease Recognition Local Verification Dataset & Inference Engine
 * CS College Project Module
 */

const DISEASE_DATASET = [
    {
        id: "DIS_001",
        disease: "Common Cold / Viral Upper Respiratory Infection",
        icd10: "J00",
        category: "Respiratory",
        riskLevel: "Low",
        symptoms: ["runny nose", "sneezing", "sore throat", "mild fever", "nasal congestion", "cough"],
        primaryKeywords: ["throat", "nose", "sneezing", "cough"],
        recommendedAction: "Rest, hydrate, and take over-the-counter decongestants if necessary."
    },
    {
        id: "DIS_002",
        disease: "Influenza (Seasonal Flu)",
        icd10: "J11.1",
        category: "Respiratory",
        riskLevel: "Moderate",
        symptoms: ["high fever", "chills", "body aches", "muscle pain", "fatigue", "dry cough", "headache"],
        primaryKeywords: ["fever", "chills", "aches", "fatigue"],
        recommendedAction: "Isolate, rest, increase fluid intake, and consult a medical provider for antivirals."
    },
    {
        id: "DIS_003",
        disease: "Acute Bronchitis / Lower Respiratory Disease",
        icd10: "J20.9",
        category: "Respiratory",
        riskLevel: "Moderate",
        symptoms: ["productive cough", "mucus", "chest tightness", "wheezing", "shortness of breath", "fatigue"],
        primaryKeywords: ["cough", "mucus", "wheezing", "chest tightness"],
        recommendedAction: "Seek medical evaluation for potential bronchodilators or antibiotics."
    },
    {
        id: "DIS_004",
        disease: "Pneumonia",
        icd10: "J18.9",
        category: "Respiratory",
        riskLevel: "Urgent",
        symptoms: ["high fever", "sharp chest pain when breathing", "severe shortness of breath", "confusion", "sweating"],
        primaryKeywords: ["chest pain", "shortness of breath", "high fever", "difficulty breathing"],
        recommendedAction: "Urgent clinical evaluation required. Requires physical lung auscultation and chest X-ray."
    },
    {
        id: "DIS_005",
        disease: "Acute Gastroenteritis (Food Poisoning)",
        icd10: "K52.9",
        category: "Gastrointestinal",
        riskLevel: "Moderate",
        symptoms: ["nausea", "vomiting", "diarrhea", "abdominal cramps", "loss of appetite", "dehydration"],
        primaryKeywords: ["nausea", "vomiting", "diarrhea", "cramps"],
        recommendedAction: "Focus on oral rehydration solution (ORS) and electrolyte replacement."
    },
    {
        id: "DIS_006",
        disease: "Contact Dermatitis / Allergic Skin Reaction",
        icd10: "L30.9",
        category: "Dermatological",
        riskLevel: "Low",
        symptoms: ["skin rash", "itching", "red papules", "scaling skin", "localized swelling", "blisters"],
        primaryKeywords: ["rash", "itching", "redness", "skin"],
        recommendedAction: "Apply topical antihistamines/corticosteroid creams and avoid allergen triggers."
    },
    {
        id: "DIS_007",
        disease: "Tension Headache / Migraine",
        icd10: "G44.2",
        category: "Neurological",
        riskLevel: "Low",
        symptoms: ["throbbing headache", "sensitivity to light", "nausea", "neck stiffness", "temple pain"],
        primaryKeywords: ["headache", "throbbing", "light sensitivity", "temple"],
        recommendedAction: "Rest in a quiet, dark room and take mild analgesics."
    }
];

/**
 * Local Deterministic Rule Matching Engine (Fallback when API is unavailable)
 */
function evaluateSymptomsLocal(userText, selectedBadges = []) {
    const inputLower = (userText + " " + selectedBadges.join(" ")).toLowerCase();
    let bestMatch = null;
    let highestScore = 0;

    DISEASE_DATASET.forEach(item => {
        let matchedCount = 0;
        
        item.symptoms.forEach(sym => {
            if (inputLower.includes(sym.toLowerCase())) {
                matchedCount += 2; // Exact symptom phrase hit
            }
        });

        item.primaryKeywords.forEach(kw => {
            if (inputLower.includes(kw.toLowerCase())) {
                matchedCount += 1; // Keyword hit
            }
        });

        const confidence = Math.min(Math.round((matchedCount / (item.symptoms.length + item.primaryKeywords.length)) * 100 * 2.5), 98);

        if (confidence > highestScore && confidence >= 25) {
            highestScore = confidence;
            bestMatch = {
                ...item,
                confidenceScore: confidence
            };
        }
    });

    return bestMatch || {
        disease: "Unspecified Clinical Presentation",
        riskLevel: "Moderate",
        confidenceScore: 45,
        symptoms: selectedBadges,
        recommendedAction: "Consult a licensed healthcare professional for precise medical diagnostic tests."
    };
}
