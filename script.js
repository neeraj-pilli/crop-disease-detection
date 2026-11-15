const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${gen-lang-client-0028007655}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        contents: [{
            parts: [
                { text: "Analyze this crop leaf image..." },
                { inline_data: { mime_type: "image/jpeg", data: base64Image } }
            ]
        }]
    })
});
function toBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(',')[1]); // Keep only the base64 data part
        reader.onerror = error => reject(error);
    });
}
async function callGeminiVision(apiKey, base64Image) {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contents: [{
                parts: [
                    { 
                        text: "Analyze this crop leaf image. Identify the crop name, disease name, confidence score percentage, specific visual symptoms as an array of strings, and practical organic and chemical treatment instructions. Format your response strictly as JSON with keys: crop, disease, confidence, symptoms (array), treatment." 
                    },
                    { 
                        inline_data: { 
                            mime_type: "image/jpeg", 
                            data: base64Image 
                        } 
                    }
                ]
            }]
        })
    });

    if (!response.ok) {
        throw new Error("Failed to connect to Gemini API. Check your API key.");
    }

    const data = await response.json();
    const textResponse = data.candidates[0].content.parts[0].text;
    
    // Clean markdown code blocks if Gemini wraps the JSON in ```json ... ```
    const cleanJson = textResponse.replace(/```json/g, '').replace(/```/g, '').trim();
    return JSON.parse(cleanJson);
}
document.getElementById('analyzeBtn').addEventListener('click', async () => {
    const apiKey = document.getElementById('apiKeyInput').value.trim();
    
    if (!apiKey) {
        alert("Please enter your Gemini API Key in the top header first!");
        return;
    }

    if (!selectedImageObj) {
        alert("Please select a leaf image first.");
        return;
    }

    // Show loading spinner
    document.getElementById('loadingSpinner').style.display = 'block';
    document.getElementById('resultContainer').style.display = 'none';

    try {
        // 1. Convert image to base64
        const base64Data = await toBase64(selectedImageObj);

        // 2. Call Gemini API
        const diagnosis = await callGeminiVision(apiKey, base64Data);

        // 3. Display the results on your UI
        displayResult(diagnosis);

    } catch (error) {
        console.error(error);
        alert("Error analyzing image: " + error.message);
    } finally {
        // Hide loading spinner
        document.getElementById('loadingSpinner').style.display = 'none';
    }
});
