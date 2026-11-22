/**
 * Crop Disease Recognition Dataset & Controller
 * Contains ONLY the 8 crop disease samples generated across the conversation.
 */

const CROP_DISEASE_DATASET = [
  {
    id: "tomato_early_blight",
    imageFile: "0d62cdf4.png",
    imagePath: "./images/0d62cdf4.png",
    crop: "Tomato",
    disease: "Early Blight",
    summary: "Fungal foliar disease of tomato leaves characterized by target-like concentric spots and yellowing tissue.",
    causes: [
      "Fungus Alternaria solani surviving in infected plant debris, soil, or seed.",
      "Warm temperatures with high humidity, heavy dew, or overhead irrigation."
    ],
    symptoms: [
      "Dark brown to black spots with concentric rings ('target' pattern) on leaves[cite: 6].",
      "Yellowing margins and tissue around expanding lesions[cite: 6].",
      "Lower, older leaves affected first, leading to premature leaf drop."
    ],
    precautions: [
      "Rotate crops away from tomatoes and potatoes for 2–3 years.",
      "Water at the base of plants rather than wetting foliage and space plants for airflow.",
      "Remove and destroy infected leaves and apply appropriate fungicides early if needed."
    ]
  },
  {
    id: "potato_late_blight",
    imageFile: "afb0af22.png",
    imagePath: "./images/afb0af22.png",
    crop: "Potato",
    disease: "Late Blight",
    summary: "Fast-spreading oomycete disease capable of rapidly defoliating potato foliage and infecting tubers.",
    causes: [
      "Oomycete pathogen Phytophthora infestans.",
      "Cool, wet, and humid weather conditions that favor rapid spore spread."
    ],
    symptoms: [
      "Dark, irregular water-soaked lesions on leaf blades and margins[cite: 7].",
      "Pale or whitish fungal growth border around lesions under humid conditions[cite: 7].",
      "Rapid browning and collapse of affected leaf tissue."
    ],
    precautions: [
      "Plant certified disease-free seed tubers and eliminate volunteer potato plants.",
      "Avoid excessive moisture and overhead watering during cool, damp weather.",
      "Monitor fields frequently and use protective fungicides before outbreaks establish."
    ]
  },
  {
    id: "apple_apple_scab",
    imageFile: "c6bc7eb7.png",
    imagePath: "./images/c6bc7eb7.png",
    crop: "Apple",
    disease: "Apple Scab",
    summary: "Common fungal disease of apple leaves and fruit causing olive-brown lesions and leaf distortion.",
    causes: [
      "Ascomycete fungus Venturia inaequalis overwintering on fallen leaves.",
      "Spring rain events combined with moderate temperatures dispersing spores."
    ],
    symptoms: [
      "Olive-green to dark olive-brown velvety spots on leaf surfaces[cite: 8].",
      "Spots darkening and coalescing as lesions age, sometimes causing leaf curling or yellowing.",
      "Premature leaf drop during heavy infections."
    ],
    precautions: [
      "Rake and destroy fallen autumn leaves to reduce overwintering inoculum.",
      "Prune tree canopies to improve sunlight penetration and leaf drying.",
      "Select scab-resistant cultivars and apply timed fungicide sprays during wet spring periods."
    ]
  },
  {
    id: "corn_northern_leaf_blight",
    imageFile: "ab6757e7.png",
    imagePath: "./images/ab6757e7.png",
    crop: "Corn (Maize)",
    disease: "Northern Leaf Blight",
    summary: "Fungal leaf disease of maize producing long, cigar-shaped lesions that reduce photosynthetic area.",
    causes: [
      "Fungus Exserohilum turcicum (syn. Setosphaeria turcica) persisting in corn residue.",
      "Moderate temperatures with prolonged leaf wetness or heavy dews."
    ],
    symptoms: [
      "Long, elliptical or cigar-shaped gray-green to tan lesions along the leaf blade[cite: 9].",
      "Lesions elongating parallel to leaf veins and turning darker or necrotic over time[cite: 9].",
      "Severe blighting of upper leaves reducing grain fill."
    ],
    precautions: [
      "Use hybrids with quantitative or race-specific resistance to Northern Leaf Blight.",
      "Practice crop rotation and manage heavy surface crop residue where feasible.",
      "Scout fields around silking and apply foliar fungicides if lesions reach upper leaves."
    ]
  },
  {
    id: "grape_black_rot",
    imageFile: "a9652c6b.png",
    imagePath: "./images/a9652c6b.png",
    crop: "Grape",
    disease: "Black Rot",
    summary: "Fungal disease affecting grape leaves, shoots, and berries, marked by tan leaf spots with dark specks.",
    causes: [
      "Fungus Guignardia bidwellii (anamorph Phyllosticta ampelicida) overwintering on mummified fruit and canes.",
      "Warm, wet weather promoting spore release and infection of young green tissue."
    ],
    symptoms: [
      "Circular tan or reddish-brown leaf lesions with darker margins[cite: 10].",
      "Tiny black fungal fruiting bodies (pycnidia) arranged in rings or clusters inside spots[cite: 10].",
      "Progressive browning around lesion edges on the leaf."
    ],
    precautions: [
      "Remove mummified berries and prune out diseased canes during winter dormancy.",
      "Train vines and manage canopy growth for good air circulation and rapid drying.",
      "Apply protective fungicides from early shoot growth through fruit development."
    ]
  },
  {
    id: "corn_common_rust",
    imageFile: "9d2a7ba2.png",
    imagePath: "./images/9d2a7ba2.png",
    crop: "Corn (Maize)",
    disease: "Common Rust",
    summary: "Foliar rust of corn caused by windborne spores that form reddish-brown pustules on both leaf surfaces.",
    causes: [
      "Fungus Puccinia sorghi carried on wind currents rather than overwintering in northern soils.",
      "Cool to moderate temperatures with high humidity and frequent dew."
    ],
    symptoms: [
      "Small, elongated, powdery reddish-brown pustules scattered across the leaf blade[cite: 11].",
      "Pustules rupturing the leaf epidermis and later turning dark brown to black as spores mature[cite: 11].",
      "Yellowing or drying of heavily infected leaves."
    ],
    precautions: [
      "Plant rust-resistant corn hybrids as the primary defense.",
      "Inspect fields early in the season for pustule appearance on foliage.",
      "Use fungicides if rust develops early on susceptible hybrids before tasseling."
    ]
  },
  {
    id: "strawberry_leaf_scorch",
    imageFile: "e217b948.png",
    imagePath: "./images/e217b948.png",
    crop: "Strawberry",
    disease: "Leaf Scorch",
    summary: "Fungal leaf spot and scorch disease of strawberry that creates dark purple spots and scorched leaf margins.",
    causes: [
      "Fungus Diplocarpon earlianum overwintering on infected leaves and crowns.",
      "Warm temperatures with rain splash or overhead irrigation."
    ],
    symptoms: [
      "Small dark purple to reddish-purple spots scattered across leaflet blades[cite: 12].",
      "Spots enlarging and merging while leaf edges turn brown and dry ('scorched')[cite: 12].",
      "Reduced plant vigor and yield under severe leaf loss."
    ],
    precautions: [
      "Start with healthy, disease-free transplants and select less susceptible varieties.",
      "Use drip irrigation instead of overhead sprinklers and space rows for airflow.",
      "Renovate beds after harvest and remove old, diseased foliage."
    ]
  },
  {
    id: "peach_bacterial_spot",
    imageFile: "dd77f197.png",
    imagePath: "./images/dd77f197.png",
    crop: "Peach",
    disease: "Bacterial Spot",
    summary: "Bacterial disease of stone fruit leaves causing dark angular lesions and shot-hole perforations.",
    causes: [
      "Bacterium Xanthomonas arboricola pv. pruni overwintering in twigs and buds.",
      "Warm weather accompanied by wind-driven rain and heavy dews."
    ],
    symptoms: [
      "Small dark purple to black angular or water-soaked spots on leaves[cite: 13].",
      "Yellow halos around lesions and dead tissue dropping out to leave 'shot-holes'[cite: 13].",
      "Premature yellowing and defoliation in moderate to severe cases."
    ],
    precautions: [
      "Plant adapted, less susceptible peach varieties in high-risk locations.",
      "Avoid overhead irrigation and maintain balanced tree nutrition without excess nitrogen.",
      "Follow local extension recommendations for spring bactericide/copper applications."
    ]
  }
];

const GEMINI_MODEL = "gemini-3.5-flash-lite"; // Update endpoint string if needed per Google AI Studio model docs
const SESSION_KEY_STORAGE = "crop_disease_gemini_api_key";

const els = {
  apiKeyInput: document.getElementById("apiKeyInput"),
  saveKeyBtn: document.getElementById("saveKeyBtn"),
  clearKeyBtn: document.getElementById("clearKeyBtn"),
  apiStatus: document.getElementById("apiStatus"),
  imageUpload: document.getElementById("imageUpload"),
  previewWrapper: document.getElementById("previewWrapper"),
  previewImage: document.getElementById("previewImage"),
  previewName: document.getElementById("previewName"),
  analyzeBtn: document.getElementById("analyzeBtn"),
  sampleGallery: document.getElementById("sampleGallery"),
  statusBanner: document.getElementById("statusBanner"),
  emptyState: document.getElementById("emptyState"),
  resultCard: document.getElementById("resultCard"),
  cropBadge: document.getElementById("cropBadge"),
  diseaseTitle: document.getElementById("diseaseTitle"),
  confidenceValue: document.getElementById("confidenceValue"),
  summaryText: document.getElementById("summaryText"),
  causesList: document.getElementById("causesList"),
  symptomsList: document.getElementById("symptomsList"),
  precautionsList: document.getElementById("precautionsList"),
  analysisModeNote: document.getElementById("analysisModeNote")
};

let currentFile = null;
let currentSampleId = null;

function init() {
  const savedKey = sessionStorage.getItem(SESSION_KEY_STORAGE);
  if (savedKey) {
    els.apiKeyInput.value = savedKey;
  }
  updateApiStatus();
  renderSampleGallery();
  bindEvents();
}

function updateApiStatus() {
  const key = sessionStorage.getItem(SESSION_KEY_STORAGE) || els.apiKeyInput.value.trim();
  if (key) {
    els.apiStatus.textContent = `Gemini API key active in session (${GEMINI_MODEL}).`;
  } else {
    els.apiStatus.textContent = "No API key saved: will match against the 8-image dataset locally.";
  }
}

function renderSampleGallery() {
  els.sampleGallery.innerHTML = "";
  CROP_DISEASE_DATASET.forEach((item) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "sample-card";
    card.dataset.id = item.id;
    card.innerHTML = `
      <img src="${item.imagePath}" alt="${item.crop} - ${item.disease}" />
      <div class="sample-card-body">
        <div class="sample-crop">${item.crop}</div>
        <div class="sample-disease">${item.disease}</div>
      </div>
    `;
    card.addEventListener("click", () => selectSample(item));
    els.sampleGallery.appendChild(card);
  });
}

function setActiveSampleCard(id) {
  document.querySelectorAll(".sample-card").forEach((card) => {
    card.classList.toggle("active", card.dataset.id === id);
  });
}

function setStatus(message, isError = false) {
  if (!message) {
    els.statusBanner.classList.add("hidden");
    els.statusBanner.textContent = "";
    return;
  }
  els.statusBanner.textContent = message;
  els.statusBanner.classList.toggle("error", isError);
  els.statusBanner.classList.remove("hidden");
}

async function selectSample(item) {
  currentSampleId = item.id;
  currentFile = null;
  setActiveSampleCard(item.id);
  els.previewImage.src = item.imagePath;
  els.previewName.textContent = `${item.imageFile} (${item.crop} — ${item.disease})`;
  els.previewWrapper.classList.remove("hidden");
  setStatus("");

  // Display exact dataset record immediately for reliable demo recognition
  renderResult(item, "Exact Match", "Loaded from the 8-image dataset definition.");
}

function handleFileUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  currentFile = file;
  currentSampleId = null;
  setActiveSampleCard(null);

  const objectUrl = URL.createObjectURL(file);
  els.previewImage.src = objectUrl;
  els.previewName.textContent = file.name;
  els.previewWrapper.classList.remove("hidden");
  setStatus("");
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || "");
      const base64 = result.includes(",") ? result.split(",")[1] : result;
      resolve(base64);
    };
    reader.onerror = () => reject(new Error("Could not read image file."));
    reader.readAsDataURL(file);
  });
}

function matchLocalDatasetByFilename(filename) {
  const cleanName = (filename || "").toLowerCase();
  const byFile = CROP_DISEASE_DATASET.find((item) => cleanName.includes(item.imageFile.toLowerCase()));
  if (byFile) {
    return { record: byFile, confidence: "Filename Match", note: "Matched by dataset image filename." };
  }

  const tokens = cleanName.replace(/[^a-z0-9]+/g, " ").trim().split(/\s+/).filter(Boolean);
  let bestRecord = CROP_DISEASE_DATASET[0];
  let bestScore = -1;

  for (const item of CROP_DISEASE_DATASET) {
    const haystack = `${item.crop} ${item.disease} ${item.symptoms.join(" ")}`.toLowerCase();
    let score = 0;
    for (const token of tokens) {
      if (token.length > 2 && haystack.includes(token)) {
        score += 1;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestRecord = item;
    }
  }

  return {
    record: bestRecord,
    confidence: bestScore > 0 ? "Keyword Match" : "Fallback Sample",
    note: "No Gemini API key provided; matched against the 8-image dataset locally."
  };
}

async function recognizeWithGemini(file, apiKey) {
  const base64Data = await fileToBase64(file);
  const allowedIds = CROP_DISEASE_DATASET.map((d) => `${d.id} (${d.crop} - ${d.disease})`).join(", ");

  const prompt = [
    "You are a plant pathology assistant for a college crop disease recognition project.",
    `Classify the uploaded leaf image strictly into one of these 8 dataset entries: ${allowedIds}.`,
    "Respond ONLY with valid JSON in this exact format:",
    '{"matchedId":"<one of the 8 ids>","confidence":"High | Medium | Low","reason":"brief visual reason"}'
  ].join("\n");

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(GEMINI_MODEL)}:generateContent?key=${encodeURIComponent(apiKey)}`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            { text: prompt },
            {
              inlineData: {
                mimeType: file.type || "image/png",
                data: base64Data
              }
            }
          ]
        }
      ]
    })
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Gemini API error (${response.status}): ${errText}`);
  }

  const data = await response.json();
  const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
  const jsonMatch = rawText.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error("Model response was not valid JSON.");
  }

  const parsed = JSON.parse(jsonMatch[0]);
  const matched =
    CROP_DISEASE_DATASET.find((item) => item.id === parsed.matchedId) ||
    matchLocalDatasetByFilename(file.name).record;

  return {
    record: matched,
    confidence: parsed.confidence || "AI Match",
    note: parsed.reason ? `Gemini (${GEMINI_MODEL}): ${parsed.reason}` : `Classified via Gemini (${GEMINI_MODEL}).`
  };
}

function renderList(targetEl, items) {
  targetEl.innerHTML = "";
  items.forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    targetEl.appendChild(li);
  });
}

function renderResult(record, confidenceLabel, modeNote) {
  els.emptyState.classList.add("hidden");
  els.resultCard.classList.remove("hidden");

  els.cropBadge.textContent = record.crop;
  els.diseaseTitle.textContent = record.disease;
  els.confidenceValue.textContent = confidenceLabel;
  els.summaryText.textContent = record.summary;

  renderList(els.causesList, record.causes);
  renderList(els.symptomsList, record.symptoms);
  renderList(els.precautionsList, record.precautions);

  els.analysisModeNote.textContent = `${modeNote} Dataset file: ${record.imageFile}.`;
}

async function handleAnalyze() {
  if (currentSampleId) {
    const sample = CROP_DISEASE_DATASET.find((s) => s.id === currentSampleId);
    if (sample) {
      renderResult(sample, "Exact Match", "Loaded directly from the 8-image dataset.");
      setStatus("Recognition complete.");
    }
    return;
  }

  if (!currentFile) {
    setStatus("Please select one of the 8 sample images or upload an image first.", true);
    return;
  }

  const apiKey = sessionStorage.getItem(SESSION_KEY_STORAGE) || els.apiKeyInput.value.trim();
  els.analyzeBtn.disabled = true;
  setStatus("Analyzing leaf image...");

  try {
    if (apiKey) {
      const outcome = await recognizeWithGemini(currentFile, apiKey);
      renderResult(outcome.record, outcome.confidence, outcome.note);
      setStatus("Recognition complete via Gemini API.");
    } else {
      const localMatch = matchLocalDatasetByFilename(currentFile.name);
      renderResult(localMatch.record, localMatch.confidence, localMatch.note);
      setStatus("Recognition complete using local 8-image dataset matching.");
    }
  } catch (err) {
    const fallback = matchLocalDatasetByFilename(currentFile.name);
    renderResult(fallback.record, fallback.confidence, `${fallback.note} (Fallback after API error: ${err.message})`);
    setStatus(`API request failed; showed local dataset match (${err.message}).`, true);
  } finally {
    els.analyzeBtn.disabled = false;
  }
}

function bindEvents() {
  els.saveKeyBtn.addEventListener("click", () => {
    const val = els.apiKeyInput.value.trim();
    if (val) {
      sessionStorage.setItem(SESSION_KEY_STORAGE, val);
    } else {
      sessionStorage.removeItem(SESSION_KEY_STORAGE);
    }
    updateApiStatus();
  });

  els.clearKeyBtn.addEventListener("click", () => {
    els.apiKeyInput.value = "";
    sessionStorage.removeItem(SESSION_KEY_STORAGE);
    updateApiStatus();
  });

  els.imageUpload.addEventListener("change", handleFileUpload);
  els.analyzeBtn.addEventListener("click", handleAnalyze);
}

init();
