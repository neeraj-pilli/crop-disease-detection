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
