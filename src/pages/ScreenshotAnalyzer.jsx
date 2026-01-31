import { useState } from "react";
import Tesseract from "tesseract.js";
import { analyzeTextForScam } from "../utils/scamAnalyzer";
import bg from "../assets/backfround.jpeg";

export default function ScreenshotAnalyzer() {
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ocrText, setOcrText] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [analysisMethod, setAnalysisMethod] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setOcrText("");
    setAnalysis(null);
    setAnalysisMethod("");

    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  const runOCRAndAnalyze = async () => {
    if (!preview) return alert("Upload a screenshot first!");

    setLoading(true);
    setOcrText("");
    setAnalysis(null);
    setAnalysisMethod("");

    try {
      //  OCR extract text
      const result = await Tesseract.recognize(preview, "eng", {
        logger: (m) => console.log(m),
      });

      const extractedText = result.data.text || "";
      setOcrText(extractedText);

      if (!extractedText.trim()) {
        alert("No text could be extracted from the image!");
        setLoading(false);
        return;
      }

      //  analyze extracted text with AI (falls back to patterns)
      const scan = await analyzeTextForScam(extractedText);
      setAnalysis(scan);
      setAnalysisMethod(scan.method || "unknown");
    } catch (err) {
      console.log(err);
      alert("Failed to analyze screenshot!");
    } finally {
      setLoading(false);
    }
  };

  const renderRecommendation = () => {
    if (!analysis) return null;

    if (analysis.risk === "HIGH" || analysis.risk === "HIGH") {
      return "🚨 HIGH RISK: Do NOT click links. Do not share OTP/UPI details. Report immediately.";
    }
    if (analysis.risk === "MEDIUM") {
      return "⚠️ MEDIUM RISK: Verify from official website/app. Avoid quick actions. Double-check sender identity.";
    }
    return "✅ LOW RISK: Seems safe, but still verify carefully before sharing any personal info.";
  };

  const renderAIAnalysis = () => {
    if (!analysis || analysis.method !== "AI") return null;

    return (
      <div className="ai-analysis-section">
        {/* AI Reasoning */}
        {analysis.reasoning && (
          <div className="ai-section">
            <div className="section-header">
              <span className="ai-icon">🤖</span>
              <span>AI Analysis</span>
            </div>
            <div className="ai-content reasoning">
              <p>{analysis.reasoning}</p>
            </div>
          </div>
        )}

        {/* What Happens Next */}
        {analysis.whatHappensNext && (
          <div className="ai-section warning">
            <div className="section-header">
              <span className="ai-icon">⚠️</span>
              <span>What Happens If You Engage</span>
            </div>
            <div className="ai-content">
              <p>{analysis.whatHappensNext}</p>
            </div>
          </div>
        )}

        {/* Actionable Advice */}
        {analysis.advice && (
          <div className="ai-section advice">
            <div className="section-header">
              <span className="ai-icon">💡</span>
              <span>What You Should Do</span>
            </div>
            <div className="ai-content">
              <p>{analysis.advice}</p>
            </div>
          </div>
        )}
      </div>
    );
  };


  const styles = `
    :root {
      --primary-red: #ff2a2a;
      --neon-green: #00e676;
      --neon-orange: #ff9100;
      --bg-dark: #050505;
      --card-bg: rgba(22, 22, 22, 0.95);
      --border-color: #333;
      --text-main: #e0e0e0;
      --text-muted: #888;
      --font-tech: 'Courier New', monospace;
      --font-main: 'Inter', sans-serif;
      --ai-blue: #3b82f6;
      --ai-purple: #8b5cf6;
    }

    .analyzer-page {
      min-height: 100vh;
      color: var(--text-main);
      font-family: var(--font-main);
      padding: 40px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .page-title {
      font-size: 2rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 10px;
      text-align: center;
      text-shadow: 0 0 15px rgba(255, 42, 42, 0.5);
    }
    .page-title span { color: var(--primary-red); }

    .page-desc {
      text-align: center;
      color: var(--text-muted);
      font-family: var(--font-tech);
      max-width: 600px;
      margin-bottom: 40px;
      font-size: 0.9rem;
    }

    /* Main Container */
    .analyzer-container {
      width: 100%;
      max-width: 1000px;
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    /* Upload Card */
    .upload-card {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-top: 4px solid var(--primary-red);
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 15px 50px rgba(0,0,0,0.8);
      backdrop-filter: blur(10px);
      text-align: center;
    }

    /* Custom File Input */
    .file-drop-area {
      border: 2px dashed #444;
      border-radius: 8px;
      padding: 30px;
      cursor: pointer;
      transition: all 0.3s;
      background: rgba(0,0,0,0.2);
    }
    .file-drop-area:hover {
      border-color: var(--primary-red);
      background: rgba(255, 42, 42, 0.05);
    }
    .file-label {
      color: #aaa;
      font-family: var(--font-tech);
      font-size: 1rem;
      pointer-events: none;
    }
    input[type=file] { display: none; }

    /* Preview Section */
    .preview-section {
      margin-top: 20px;
      border-top: 1px solid #333;
      padding-top: 20px;
    }
    .preview-header {
      font-family: var(--font-tech);
      color: var(--primary-red);
      margin-bottom: 10px;
      display: block;
      text-align: left;
    }
    .img-frame {
      border: 1px solid #444;
      padding: 5px;
      background: #000;
      border-radius: 4px;
      display: inline-block;
      max-width: 100%;
    }
    .preview-img {
      max-width: 100%;
      max-height: 400px;
      display: block;
    }

    /* Action Button */
    .scan-btn {
      width: 100%;
      max-width: 400px;
      margin: 20px auto 0 auto;
      padding: 15px;
      background: linear-gradient(135deg, #990000, #ff2a2a);
      border: none;
      color: white;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 2px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      transition: all 0.3s;
      display: block;
    }
    .scan-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 5px 20px rgba(255, 42, 42, 0.4);
    }
    .scan-btn:disabled { opacity: 0.6; cursor: not-allowed; background: #444; }

    /* Results Grid */
    .results-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      animation: fadeIn 0.5s ease;
    }

    /* OCR Terminal */
    .terminal-box {
      background: #000;
      border: 1px solid #333;
      border-radius: 6px;
      padding: 20px;
      font-family: var(--font-tech);
      height: fit-content;
    }
    .terminal-header {
      color: #888;
      border-bottom: 1px solid #333;
      padding-bottom: 10px;
      margin-bottom: 15px;
      font-size: 0.9rem;
      text-transform: uppercase;
    }
    .ocr-content {
      color: var(--neon-green);
      font-size: 0.85rem;
      white-space: pre-wrap;
      line-height: 1.5;
      max-height: 400px;
      overflow-y: auto;
    }
    .ocr-content::-webkit-scrollbar { width: 6px; }
    .ocr-content::-webkit-scrollbar-thumb { background: #333; }

    /* Analysis Report */
    .report-box {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 6px;
      padding: 20px;
    }
    
    .risk-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      background: #111;
      padding: 15px;
      border-radius: 4px;
    }
    .risk-score { font-size: 1.2rem; color: #fff; }
    .risk-level { font-family: var(--font-tech); font-weight: bold; padding: 4px 8px; border-radius: 4px; }
    
    .level-high { color: var(--primary-red); border: 1px solid var(--primary-red); background: rgba(255,42,42,0.1); }
    .level-medium { color: var(--neon-orange); border: 1px solid var(--neon-orange); background: rgba(255,145,0,0.1); }
    .level-low { color: var(--neon-green); border: 1px solid var(--neon-green); background: rgba(0,230,118,0.1); }

    .recommendation-box {
      padding: 15px;
      border-left: 3px solid #fff;
      background: rgba(255,255,255,0.05);
      margin-bottom: 20px;
      font-size: 0.95rem;
      line-height: 1.5;
    }

    /* AI Analysis Sections */
    .ai-analysis-section {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .ai-section {
      background: rgba(59, 130, 246, 0.1);
      border: 1px solid var(--ai-blue);
      border-radius: 6px;
      overflow: hidden;
    }

    .ai-section.warning {
      background: rgba(255, 42, 42, 0.1);
      border-color: var(--primary-red);
    }

    .ai-section.advice {
      background: rgba(0, 230, 118, 0.1);
      border-color: var(--neon-green);
    }

    .section-header {
      background: rgba(0,0,0,0.3);
      padding: 10px 15px;
      font-weight: bold;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .ai-icon {
      font-size: 1.1rem;
    }

    .ai-content {
      padding: 15px;
      font-size: 0.95rem;
      line-height: 1.6;
    }

    .ai-content.reasoning {
      color: #bfdbfe;
    }

    .ai-content p {
      margin: 0;
    }

    /* Scam Type Badge */
    .scam-type-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2));
      border: 1px solid var(--ai-purple);
      padding: 8px 16px;
      border-radius: 20px;
      margin-bottom: 15px;
      font-size: 1rem;
      color: #c4b5fd;
    }

    /* Method Badge */
    .method-badge {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-size: 0.75rem;
      padding: 4px 8px;
      border-radius: 4px;
      margin-left: 10px;
      font-family: var(--font-tech);
    }

    .method-ai {
      background: rgba(59, 130, 246, 0.2);
      color: var(--ai-blue);
      border: 1px solid var(--ai-blue);
    }

    .method-fallback {
      background: rgba(255, 165, 0, 0.2);
      color: var(--neon-orange);
      border: 1px solid var(--neon-orange);
    }

    /* Data Section */
    .data-section { margin-top: 20px; }
    .data-title { color: var(--text-muted); font-size: 0.85rem; font-family: var(--font-tech); margin-bottom: 10px; text-transform: uppercase; border-bottom: 1px dashed #333; display: inline-block; }
    
    .tags-list { list-style: none; padding: 0; display: flex; flex-wrap: wrap; gap: 8px; }
    .tag-item { background: #222; padding: 5px 10px; border-radius: 4px; font-size: 0.85rem; color: #ccc; border: 1px solid #444; }
    .tag-danger { border-color: var(--primary-red); color: var(--primary-red); }
    .tag-warning { border-color: var(--neon-orange); color: var(--neon-orange); }

    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

    /* Mobile */
    @media (max-width: 768px) {
      .results-grid { grid-template-columns: 1fr; }
      .page-title { font-size: 1.5rem; }
    }
  `;

  return (
    <div 
      className="analyzer-page"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.95)), url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <style>{styles}</style>

      <h1 className="page-title">🖼️ Visual Threat <span>Analyzer</span></h1>
      <p className="page-desc">
        Upload screenshots of suspicious emails, SMS, or chats. 
        Our AI will analyze the content and provide intelligent scam detection.
      </p>

      <div className="analyzer-container">
        
        {/* Upload Section */}
        <div className="upload-card">
          <label className="file-drop-area">
            <span className="file-label">
              {preview ? "✅ IMAGE LOADED (CLICK TO CHANGE)" : "📂 DRAG & DROP OR CLICK TO UPLOAD SCREENSHOT"}
            </span>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </label>

          {preview && (
            <div className="preview-section">
              <span className="preview-header">Target Acquired:</span>
              <div className="img-frame">
                <img src={preview} alt="preview" className="preview-img" />
              </div>
            </div>
          )}

          <button
            onClick={runOCRAndAnalyze}
            disabled={loading || !preview}
            className="scan-btn"
          >
            {loading ? "🤖 AI ANALYZING..." : "🔍 SCAN FOR SCAMS"}
          </button>
        </div>

        {/* Results Section */}
        {(ocrText || analysis) && (
          <div className="results-grid">
            
            {/* Left: OCR Text */}
            {ocrText && (
              <div className="terminal-box">
                <div className="terminal-header">Raw Data Extraction</div>
                <div className="ocr-content">
                  {ocrText}
                </div>
              </div>
            )}

            {/* Right: Analysis */}
            {analysis && (
              <div className="report-box">
                <div className="terminal-header">
                  Threat Assessment
                  {analysisMethod === "AI" && (
                    <span className="method-badge method-ai">🤖 AI Powered</span>
                  )}
                  {analysisMethod === "fallback" && (
                    <span className="method-badge method-fallback">📋 Pattern Match</span>
                  )}
                </div>

                {/* Scam Type from AI */}
                {analysis.scamType && (
                  <div className="scam-type-badge">
                    <span>🎯 Detected: {analysis.scamType}</span>
                  </div>
                )}

                <div className="risk-header">
                  <div className="risk-score">RISK SCORE: {analysis.score}/100</div>
                  <div className={`risk-level level-${analysis.risk?.toLowerCase()}`}>
                    {analysis.risk}
                  </div>
                </div>

                <div className="recommendation-box">
                  {renderRecommendation()}
                </div>

                {/* AI Analysis Results */}
                {renderAIAnalysis()}

                {/* Keywords / Red Flags */}
                <div className="data-section">
                  <span className="data-title">Red Flags Detected</span>
                  {analysis.redFlags?.length === 0 ? (
                    <p style={{color: '#666', fontStyle: 'italic', fontSize: '0.9rem'}}>No specific red flags identified.</p>
                  ) : (
                    <ul className="tags-list">
                      {analysis.redFlags?.map((flag, idx) => (
                        <li key={idx} className="tag-item tag-danger">
                          ⚠️ {flag.flag || flag}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* URLs */}
                {analysis.analysis?.detectedUrls?.length > 0 && (
                  <div className="data-section">
                    <span className="data-title">Suspicious Links</span>
                    <ul className="tags-list">
                      {analysis.analysis.detectedUrls.map((u, idx) => (
                        <li key={idx} className="tag-item tag-warning">🔗 {u}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Phones */}
                {analysis.analysis?.detectedPhones?.length > 0 && (
                  <div className="data-section">
                    <span className="data-title">Contact Numbers</span>
                    <ul className="tags-list">
                      {analysis.analysis.detectedPhones.map((p, idx) => (
                        <li key={idx} className="tag-item">📞 {p}</li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}

