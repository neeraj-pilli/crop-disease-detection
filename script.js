let selectedFile = null;

// DOM Elements
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const previewSection = document.getElementById('previewSection');
const imagePreview = document.getElementById('imagePreview');
const fileName = document.getElementById('fileName');
const analyzeBtn = document.getElementById('analyzeBtn');
const loadingSpinner = document.getElementById('loadingSpinner');
const resultContainer = document.getElementById('resultContainer');
const apiKeyInput = document.getElementById('apiKeyInput');

// Drag and drop handlers
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    if (e.dataTransfer.files.length > 0) {
        fileInput.files = e.dataTransfer.files;
        handleFile(e.dataTransfer.files[0]);
    }
});

fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        handleFile(e.target.files[0]);
    }
});

function handleFile(file) {
    selectedFile = file;
    const reader = new FileReader();
    reader.onload = (e) => {
        imagePreview.src = e.target.result;
        fileName.textContent = file.name;
        previewSection.style.display = 'flex';
        resultContainer.style.display = 'none';
    };
    reader.readAsDataURL(file);
}

// Convert image file to base64 string for API payload
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const base64String = reader.result.split(',')[1];
            resolve(base64String);
        };
        reader.onerror = (error) => reject(error);
    });
}

// Main Analyze Button Click Handler
analyzeBtn.addEventListener('click', async () => {
    const apiKey = apiKeyInput.value.trim();

    if (!apiKey) {
        alert("Please enter your Gemini API Key in the top header before running diagnosis!");
        apiKeyInput.focus();
        return;
    }

    if (!selectedFile) {
        alert("Please upload an image of a leaf first.");
        return;
    }

    // Show loading state
    loadingSpinner.style.display = 'block';
    resultContainer.style.display = 'none';

    try {
        const base64Image = await fileToBase64(selectedFile);
        const diagnosis = await analyzeLeafWithGemini(apiKey, base64Image, selectedFile.type);
        displayResults(diagnosis);
    } catch (error) {
        console.error("Diagnosis Error:", error);
        alert(`API Analysis Failed: ${error.message}`);
    } finally {
        loadingSpinner.style.display = 'none';
    }
});

// Call Google Gemini 1.5 Flash REST Endpoint directly
// Call Google Gemini REST Endpoint directly
async function analyzeLeafWithGemini(apiKey, base64Data, mimeType) {
    // Model endpoints to attempt in fallback order
    const candidateEndpoints = [
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`
    ];

    const promptText = `
    You are an expert plant pathologist. Analyze this crop leaf image.
    First, determine if the image shows a valid plant leaf. If not, return JSON stating crop: "Unknown", disease: "Not a Valid Leaf Image", confidence: "0%", symptoms: ["No clear leaf features detected"], treatment: "Please upload a clear, focused photo of a plant leaf."

    If it is a valid leaf, provide:
    1. Crop species name
    2. Specific disease name or "Healthy"
    3. Estimated confidence percentage (e.g. "94.5%")
    4. Key visual symptoms as a JSON array of strings
    5. Actionable organic and chemical treatment instructions

    Respond STRICTLY in JSON format with no markdown wrappers or extra prose:
    {
        "crop": "Crop Name",
        "disease": "Disease Name or Healthy",
        "confidence": "95%",
        "symptoms": ["Symptom 1", "Symptom 2"],
        "treatment": "Treatment details..."
    }
    `;

    const payload = {
        contents: [{
            parts: [
                { text: promptText },
                {
                    inline_data: {
                        mime_type: mimeType || "image/jpeg",
                        data: base64Data
                    }
                }
            ]
        }]
    };

    let lastErrorMessage = "";

    for (const endpoint of candidateEndpoints) {
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                const data = await response.json();
                const rawText = data.candidates[0].content.parts[0].text;
                const cleanJson = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
                return JSON.parse(cleanJson);
            } else {
                const errData = await response.json();
                lastErrorMessage = errData.error?.message || `HTTP ${response.status}`;
            }
        } catch (err) {
            lastErrorMessage = err.message;
        }
    }

    throw new Error(`API Error: ${lastErrorMessage}`);
}

// Display results in UI
function displayResults(data) {
    document.getElementById('resCrop').textContent = data.crop || "Unknown Crop";
    document.getElementById('resDisease').textContent = data.disease || "Diagnosis Pending";
    document.getElementById('resConfidence').textContent = `Confidence: ${data.confidence || 'N/A'}`;

    const symptomsList = document.getElementById('resSymptoms');
    symptomsList.innerHTML = '';
    
    if (Array.isArray(data.symptoms)) {
        data.symptoms.forEach(sym => {
            const li = document.createElement('li');
            li.textContent = sym;
            symptomsList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = data.symptoms || "No specific symptoms returned.";
        symptomsList.appendChild(li);
    }

    document.getElementById('resTreatment').textContent = data.treatment || "No specific treatment instructions provided.";

    resultContainer.style.display = 'block';
    resultContainer.scrollIntoView({ behavior: 'smooth' });
}
