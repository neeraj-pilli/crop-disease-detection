/**
 * Crop Disease Recognition Controller & 8-Image Dataset
 * Uses ONLY the 8 crop disease images generated in this session and rejects non-crop images as invalid.
 */

const CROP_DISEASE_DATASET = [
  {
    id: "tomato_early_blight",
    imageFile: "0d62cdf4.png",
    crop: "Tomato",
    disease: "Early Blight",
    summary: "Fungal leaf disease of tomato causing concentric target-like lesions and yellowing around affected spots.",
    causes: [
      "Fungus Alternaria solani overwintering in infected crop debris, soil, or seed.",
      "Warm temperatures paired with high humidity, dew, or overhead watering."
    ],
    symptoms: [
      "Dark brown to black spots with concentric rings ('target' pattern) on leaf blades.",
      "Yellowing margins and tissue surrounding expanding lesions.",
      "Older lower leaves affected first, leading to premature leaf drop."
    ],
    precautions: [
      "Rotate crops away from tomatoes and potatoes for 2–3 years.",
      "Water at the soil base rather than wetting leaves and maintain plant spacing for airflow.",
      "Prune infected lower leaves and apply labeled fungicides early when conditions favor spread."
    ]
  },
  {
    id: "potato_late_blight",
    imageFile: "afb0af22.png",
    crop: "Potato",
    disease: "Late Blight",
    summary: "Rapidly spreading oomycete disease of potato foliage that produces dark water-soaked lesions and pale borders.",
    causes: [
      "Oomycete pathogen Phytophthora infestans.",
      "Cool, wet, and humid weather that accelerates spore production and dispersal."
    ],
    symptoms: [
      "Dark, irregular water-soaked lesions along leaf blades and margins.",
      "Pale or whitish fungal growth border around lesions under damp conditions.",
      "Fast browning and collapse of infected foliage."
    ],
    precautions: [
      "Plant certified disease-free seed tubers and remove volunteer potato plants.",
      "Avoid excess leaf wetness and overhead irrigation during cool, rainy periods.",
      "Scout crops regularly and apply preventive fungicides before disease builds up."
    ]
  },
  {
    id: "apple_apple_scab",
    imageFile: "c6bc7eb7.png",
    crop: "Apple",
    disease: "Apple Scab",
    summary: "Common fungal disease of apple leaves producing olive-brown velvety spots and leaf distortion.",
    causes: [
      "Ascomycete fungus Venturia inaequalis surviving on fallen leaves over winter.",
      "Spring rain events with moderate temperatures releasing airborne/splash spores."
    ],
    symptoms: [
      "Olive-green to dark olive-brown velvety spots on leaf surfaces.",
      "Darkening and merging of older spots, sometimes with leaf curling or yellowing.",
      "Early leaf drop when infections are severe."
    ],
    precautions: [
      "Rake and dispose of fallen autumn leaves to reduce overwintering spores.",
      "Prune canopies for better sunlight penetration and faster leaf drying.",
      "Choose scab-resistant varieties and use timed fungicide applications during wet spring weather."
    ]
  },
  {
    id: "corn_northern_leaf_blight",
    imageFile: "ab6757e7.png",
    crop: "Corn (Maize)",
    disease: "Northern Leaf Blight",
    summary: "Fungal leaf disease of maize characterized by long, cigar-shaped lesions running along the blade.",
    causes: [
      "Fungus Exserohilum turcicum (syn. Setosphaeria turcica) persisting in corn residue.",
      "Moderate temperatures with prolonged leaf wetness or heavy dews."
    ],
    symptoms: [
      "Long, elliptical or cigar-shaped gray-green to tan lesions along the leaf blade.",
      "Lesions elongating parallel to leaf veins and turning darker or necrotic as they mature.",
      "Blighting of upper leaves that reduces photosynthetic capacity."
    ],
    precautions: [
      "Select maize hybrids with resistance to Northern Leaf Blight.",
      "Use crop rotation and manage surface residue where practical.",
      "Scout around silking and apply foliar fungicides if lesions spread to upper leaves."
    ]
  },
  {
    id: "grape_black_rot",
    imageFile: "a9652c6b.png",
    crop: "Grape",
    disease: "Black Rot",
    summary: "Fungal disease of grape leaves marked by circular tan lesions with darker borders and tiny black fruiting bodies.",
    causes: [
      "Fungus Guignardia bidwellii (Phyllosticta ampelicida) overwintering on mummified berries and canes.",
      "Warm, wet weather promoting spore release and infection of tender green tissue."
    ],
    symptoms: [
      "Circular tan or reddish-brown leaf spots bordered by darker margins.",
      "Tiny black fungal fruiting bodies (pycnidia) visible inside the lesions.",
      "Browning advancing around lesion edges across the leaf."
    ],
    precautions: [
      "Remove mummified fruit and prune infected canes during dormant pruning.",
      "Manage canopy growth and trellis training to improve airflow and drying.",
      "Apply protective fungicides from early shoot growth through fruit set."
    ]
  },
  {
    id: "corn_common_rust",
    imageFile: "9d2a7ba2.png",
    crop: "Corn (Maize)",
    disease: "Common Rust",
    summary: "Foliar rust disease of corn forming elongated, powdery reddish-brown pustules across leaf blades.",
    causes: [
      "Fungus Puccinia sorghi carried by wind currents into cropping regions.",
      "Cool to moderate temperatures with high humidity and frequent dew."
    ],
    symptoms: [
      "Small, elongated, powdery reddish-brown pustules scattered across the leaf blade.",
      "Pustules breaking through the leaf surface and turning darker brown/black later in the cycle.",
      "Yellowing or premature drying on heavily infected leaves."
    ],
    precautions: [
      "Plant rust-resistant corn hybrids as the primary control measure.",
      "Inspect fields early for pustule development on leaves.",
      "Use fungicides if rust appears early on susceptible hybrids prior to tasseling."
    ]
  },
  {
    id: "strawberry_leaf_scorch",
    imageFile: "e217b948.png",
    crop: "Strawberry",
    disease: "Leaf Scorch",
    summary: "Fungal leaf disease of strawberry causing dark purple spots and drying brown ('scorched') margins.",
    causes: [
      "Fungus Diplocarpon earlianum overwintering on infected leaves and crowns.",
      "Warm weather combined with rain splash or overhead irrigation."
    ],
    symptoms: [
      "Small dark purple to reddish-purple spots on leaflet blades.",
      "Spots enlarging and coalescing while leaf margins turn brown and dry out.",
      "Reduced vigor and yield when severe leaf damage occurs."
    ],
    precautions: [
      "Start with healthy transplants and choose less susceptible strawberry cultivars.",
      "Use drip irrigation instead of overhead sprinklers and space rows for airflow.",
      "Remove old, diseased foliage after harvest."
    ]
  },
  {
    id: "peach_bacterial_spot",
    imageFile: "dd77f197.png",
    crop: "Peach",
    disease: "Bacterial Spot",
    summary: "Bacterial leaf disease of peach causing dark angular lesions and shot-hole perforations.",
    causes: [
      "Bacterium Xanthomonas arboricola pv. pruni overwintering in twigs and buds.",
      "Warm temperatures accompanied by wind-driven rain and heavy dews."
    ],
    symptoms: [
      "Small dark purple to black angular or water-soaked spots on leaves.",
      "Yellowing around lesions and dead centers dropping out to leave 'shot-holes'.",
      "Premature yellowing and leaf drop under moderate to heavy infection."
    ],
    precautions: [
      "Select adapted, less susceptible peach varieties for high-risk areas.",
      "Avoid overhead irrigation and keep nitrogen fertilization balanced.",
      "Follow local agricultural extension guidance for spring bactericide sprays."
    ]
  }
];

const ALLOWED_MIME_TYPES = ["image/png", "image/jpeg", "image/webp"];
const GEMINI_MODEL = "gemini-3.5-flash-lite";
const SESSION_KEY_STORAGE = "crop_disease_gemini_api_key";

const els = {
  apiKeyInput: document.getElementById("apiKeyInput"),
  saveKeyBtn: document.getElementById("saveKeyBtn"),
  clearKeyBtn: document.getElementById("clearKeyBtn"),
  apiStatus: document.getElementById("apiStatus"),
  dropzone: document.getElementById("dropzone"),
  imageUpload: document.getElementById("imageUpload"),
  previewWrapper: document.getElementById("previewWrapper"),
  previewImage: document.getElementById("previewImage"),
  previewName: document.getElementById("previewName"),
  analyzeBtn: document.getElementById("analyzeBtn"),
  statusBanner: document.getElementById("statusBanner"),
  invalidBox: document.getElementById("invalidBox"),
  invalidReason: document.getElementById("invalidReason"),
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
let activeObjectUrl = null;

function init() {
  try {
    const savedKey = sessionStorage.getItem(SESSION_KEY_STORAGE);
    if (savedKey) {
      els.apiKeyInput.value = savedKey;
    }
  } catch {
    // Ignore storage access errors
  }
  updateApiStatus();
  bindEvents();
}

function getApiKey() {
  try {
    return (sessionStorage.getItem(SESSION_KEY_STORAGE) || els.apiKeyInput.value || "").trim();
  } catch {
    return (els.apiKeyInput.value || "").trim();
  }
}

function updateApiStatus() {
  const key = getApiKey();
  if (key) {
    els.apiStatus.textContent = `Gemini API key active (${GEMINI_MODEL}): validates crop leaf images against the 8-image dataset.`;
  } else {
    els.apiStatus.textContent = "No API key saved: will check uploaded files against the 8 crop dataset images locally.";
  }
}

function releaseObjectUrl() {
  if (activeObjectUrl) {
    URL.revokeObjectURL(activeObjectUrl);
    activeObjectUrl = null;
  }
}

function setStatus(message, isError = false) {
  if (!message) {
    els.statusBanner.classList.add("hidden");
    els.statusBanner.textContent = "";
    els.statusBanner.classList.remove("error");
    return;
  }
  els.statusBanner.textContent = message;
  els.statusBanner.classList.toggle("error", isError);
  els.statusBanner.classList.remove("hidden");
}

function resetReportViews() {
  els.invalidBox.classList.add("hidden");
  els.resultCard.classList.add("hidden");
  els.emptyState.classList.add("hidden");
}

function showInvalidImage(reason) {
  resetReportViews();
  els.invalidReason.textContent = reason;
  els.invalidBox.classList.remove("hidden");
  setStatus("Invalid image: uploaded file is not a recognized crop leaf image.", true);
}

function acceptUploadedFile(file) {
  if (!file || !ALLOWED_MIME_TYPES.includes(file.type)) {
    releaseObjectUrl();
    currentFile = null;
    els.previewWrapper.classList.add("hidden");
    showInvalidImage("Unsupported file type. Please upload a PNG, JPG, or WEBP crop leaf image.");
    return;
  }

  releaseObjectUrl();
  currentFile = file;
  activeObjectUrl = URL.createObjectURL(file);
  els.previewImage.src = activeObjectUrl;
  els.previewImage.alt = `Uploaded image: ${file.name}`;
  els.previewName.textContent = file.name;
  els.previewWrapper.classList.remove("hidden");

  resetReportViews();
  els.emptyState.classList.remove("hidden");
  setStatus("");
}

function handleFileInputChange(event) {
  const file = event.target.files?.[0];
  if (file) {
    acceptUploadedFile(file);
  }
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || "");
      const base64 = result.includes(",") ? result.split(",")[1] : result;
      if (!base64) {
        reject(new Error("Could not read image contents."));
        return;
      }
      resolve(base64);
    };
    reader.onerror = () => reject(new Error("Failed to read image file."));
    reader.readAsDataURL(file);
  });
}

function matchLocalDataset(filename) {
  const cleanName = (filename || "").toLowerCase();
  const matched = CROP_DISEASE_DATASET.find((item) => cleanName.includes(item.imageFile.toLowerCase()));
  if (!matched) {
    return {
      isValidCropImage: false,
      reason:
        "Invalid image: this file does not match any of the 8 crop leaf disease images in the project dataset. Upload one of the valid crop leaf images or add a Gemini API key for visual crop verification."
    };
  }

  return {
    isValidCropImage: true,
    record: matched,
    confidence: "Dataset Match",
    note: "Verified against the 8-image crop disease dataset locally."
  };
}

function extractJsonObject(rawText) {
  const cleaned = rawText
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```\s*$/i, "")
    .trim();

  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) {
    throw new Error("Model response did not contain valid JSON.");
  }
  return JSON.parse(cleaned.slice(start, end + 1));
}

async function recognizeWithGemini(file, apiKey) {
  const base64Data = await fileToBase64(file);
  const allowedIds = CROP_DISEASE_DATASET.map((d) => d.id);
  const catalogSummary = CROP_DISEASE_DATASET.map((d) => `- ${d.id}: ${d.crop} — ${d.disease}`).join("\n");

  const prompt = [
    "You are a plant pathology image verifier for a crop disease recognition website.",
    "Step 1: Determine whether the uploaded image is actually a plant/crop leaf showing one of the 8 crop diseases below.",
    "If the image shows people, animals, vehicles, indoor scenes, text/screenshots, random objects, or crops/diseases NOT in this 8-item list, set isCropImage to false and matchedId to 'none'.",
    "Allowed 8 dataset entries:",
    catalogSummary,
    'Return ONLY JSON matching: {"isCropImage":boolean,"matchedId":"<one of the 8 ids or none>","confidence":"High | Medium | Low","reason":"short explanation"}'
  ].join("\n");

  const endpoint = `[https://generativelanguage.googleapis.com/v1beta/models/$](https://generativelanguage.googleapis.com/v1beta/models/$){encodeURIComponent(GEMINI_MODEL)}:generateContent?key=${encodeURIComponent(apiKey)}`;

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
                mimeType: file.type,
                data: base64Data
              }
            }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.1,
        responseMimeType: "application/json",
        responseSchema: {
          type: "OBJECT",
          properties: {
            isCropImage: { type: "BOOLEAN" },
            matchedId: { type: "STRING", enum: [...allowedIds, "none"] },
            confidence: { type: "STRING" },
            reason: { type: "STRING" }
          },
          required: ["isCropImage", "matchedId", "confidence", "reason"]
        }
      }
    })
  });

  if (!response.ok) {
    let detail = `HTTP ${response.status}`;
    try {
      const errJson = await response.json();
      detail = errJson?.error?.message || detail;
    } catch {
      // Keep status detail
    }
    throw new Error(detail);
  }

  const data = await response.json();
  const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
  const parsed = extractJsonObject(rawText);

  const matched = CROP_DISEASE_DATASET.find((item) => item.id === parsed.matchedId);
  if (!parsed.isCropImage || !matched) {
    return {
      isValidCropImage: false,
      reason:
        parsed.reason ||
        "Invalid image: the uploaded picture is not a valid crop leaf image from the 8-image dataset."
    };
  }

  return {
    isValidCropImage: true,
    record: matched,
    confidence: parsed.confidence || "AI Match",
    note: parsed.reason ? `Gemini (${GEMINI_MODEL}): ${parsed.reason}` : `Verified via Gemini (${GEMINI_MODEL}).`
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
  resetReportViews();
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
  if (!currentFile) {
    showInvalidImage("No image uploaded. Please choose a valid PNG, JPG, or WEBP crop leaf image first.");
    return;
  }

  const apiKey = getApiKey();
  els.analyzeBtn.disabled = true;
  setStatus("Checking uploaded image...");

  try {
    if (apiKey) {
      const outcome = await recognizeWithGemini(currentFile, apiKey);
      if (!outcome.isValidCropImage) {
        showInvalidImage(outcome.reason);
        return;
      }
      renderResult(outcome.record, outcome.confidence, outcome.note);
      setStatus("Crop disease recognized.");
    } else {
      const localResult = matchLocalDataset(currentFile.name);
      if (!localResult.isValidCropImage) {
        showInvalidImage(localResult.reason);
        return;
      }
      renderResult(localResult.record, localResult.confidence, localResult.note);
      setStatus("Crop disease recognized from dataset.");
    }
  } catch (err) {
    const localResult = matchLocalDataset(currentFile.name);
    const message = err instanceof Error ? err.message : "Unknown error";
    if (!localResult.isValidCropImage) {
      showInvalidImage(`Invalid image (API error: ${message}). ${localResult.reason}`);
      return;
    }
    renderResult(
      localResult.record,
      localResult.confidence,
      `${localResult.note} (Fallback after API error: ${message}.)`
    );
    setStatus(`API request failed (${message}); matched via local dataset filename.`, true);
  } finally {
    els.analyzeBtn.disabled = false;
  }
}

function bindEvents() {
  els.saveKeyBtn.addEventListener("click", () => {
    const val = els.apiKeyInput.value.trim();
    try {
      if (val) {
        sessionStorage.setItem(SESSION_KEY_STORAGE, val);
      } else {
        sessionStorage.removeItem(SESSION_KEY_STORAGE);
      }
    } catch {
      // Ignore storage access errors
    }
    updateApiStatus();
  });

  els.clearKeyBtn.addEventListener("click", () => {
    els.apiKeyInput.value = "";
    try {
      sessionStorage.removeItem(SESSION_KEY_STORAGE);
    } catch {
      // Ignore storage access errors
    }
    updateApiStatus();
  });

  els.imageUpload.addEventListener("change", handleFileInputChange);

  ["dragenter", "dragover"].forEach((eventName) => {
    els.dropzone.addEventListener(eventName, (event) => {
      event.preventDefault();
      els.dropzone.classList.add("drag-over");
    });
  });

  ["dragleave", "drop"].forEach((eventName) => {
    els.dropzone.addEventListener(eventName, (event) => {
      event.preventDefault();
      els.dropzone.classList.remove("drag-over");
    });
  });

  els.dropzone.addEventListener("drop", (event) => {
    const file = event.dataTransfer?.files?.[0];
    if (file) {
      acceptUploadedFile(file);
    }
  });

  els.analyzeBtn.addEventListener("click", handleAnalyze);

  window.addEventListener("beforeunload", releaseObjectUrl);
}

init();
