import { analyzeWithAI } from "../services/scamService.js";

/**
 * AI-Powered Scam Analyzer (Frontend)
 * 
 * This module provides intelligent scam analysis using AI when available,
 * with fallback to pattern-based analysis for offline use.
 */

// Pattern categories for semantic analysis (fallback when AI is unavailable)
const SCAM_PATTERNS = {
  urgency: {
    patterns: [
      /\b(urgent|immediately|asap|right away|right now|hurry|limited time|expires?|deadline|act now|don't delay|only.*left)\b/i,
      /\b(within.*hours?|today only|hours left|minutes left|final.*call|last.*chance)\b/i,
    ],
    weight: 25,
    description: "Creates artificial urgency to prevent careful thinking"
  },

  financialRequest: {
    patterns: [
      /\b(send.*money|transfer.*money|pay.*fee|processing fee|registration fee|advance.*payment|upfront|initial.*payment)\b/i,
      /\b(deposit.*amount|wallet.*balance|refill.*account|load.*money|add.*money|top.?up)\b/i,
      /\b(₹|rs\.?|rupees?|inr|dollars?|usd)\s*\d+[\d,]*\s*(now|please|urgently)?\b/i,
      /\b\d+[\d,]*\s*(₹|rs\.?|rupees?|inr|dollars?|usd)\b/i,
      /\b(give.*account|bank.*details|account.*number|upi.*id|qr.*code|payment.*link)\b/i,
    ],
    weight: 30,
    description: "Requests for financial transactions or payment details"
  },

  otpScam: {
    patterns: [
      /\b(otp|one.?time.?password|verification.*code|security.*code|pin.*number|don't.*share|don't.*tell)\b/i,
      /\b(shared.*by.*mistake|accidentally.*sent|wrong.*transfer|refund.*otp)\b/i,
      /\b(bank.*official|customer.*care|support.*team).*ask.*(otp|pin|password)\b/i,
    ],
    weight: 35,
    description: "Attempts to steal OTP/PIN through social engineering"
  },

  jobFraud: {
    patterns: [
      /\b(work.*from.*home|remote.*job|part.*time.*job|freelance|gig.*earning|easy.*money|earn.*daily)\b/i,
      /\b(registration.*fee|joining.*fee|training.*fee|material.*fee|kit.*fee|investment.*plan)\b/i,
      /\b(telegram.*group|whatsapp.*group|join.*channel|contact.*hr|hr.*department)\b/i,
      /\b(typing.*job|data.*entry|form.*filling|customer.*service.*job)\b/i,
      /\b(unlimited.*earning|fixed.*salary|daily.*payment|weekly.*payment)\b/i,
    ],
    weight: 30,
    description: "Fake job offers requiring upfront payments"
  },

  investmentFraud: {
    patterns: [
      /\b(investment|mutual.*fund|stock.*market|trading|crypto|cryptocurrency|bitcoin|ethereum)\b/i,
      /\b(guaranteed.*return|fixed.*return|high.*return|double.*money|triple.*money|luck.*chance)\b/i,
      /\b(trading.*app|investment.*app|forex|binance|wazirx|coinDCX|groww|zerodha)\b/i,
      /\b(minimum.*deposit|minimum.*investment|start.*with|just.*₹|just.*rs)\b/i,
      /\b(100%.*safe|legitimate|government.*approved|registered.*company)\b/i,
    ],
    weight: 28,
    description: "Investment opportunities promising unrealistic returns"
  },

  phishing: {
    patterns: [
      /\b(verify.*account|update.*account|confirm.*details|secure.*account|locked.*account)\b/i,
      /\b(click.*link|visit.*website|login.*page|bank.*website|official.*website)\b/i,
      /\b(amazon|paytm|phonepe|googlepay|flipkart|netbanking)\b.*(refund|update|verify)/i,
      /\b(your.*account.*will.*be.*(suspended|blocked|closed)|action.*required|immediate.*attention)\b/i,
      /\b(suspended.*account|blocked.*account|verify.*kyc|kyc.*pending|kyc.*expired)\b/i,
    ],
    weight: 32,
    description: "Attempts to steal credentials through fake links/alerts"
  },

  prizeScam: {
    patterns: [
      /\b(Congratulations|winner|won|lucky.*winner|selected|chosen)\b/i,
      /\b(prize|lottery|jackpot|cash.*prize|gift.*voucher|free.*money|free.*gift)\b/i,
      /\b(claim.*prize|claim.*reward|collect.*winnings|shipping.*fee|delivery.*charge|tariff.*fee)\b/i,
      /\b(won.*draw|winner.*notification|you.*have.*won|congratulations.*winner)\b/i,
    ],
    weight: 28,
    description: "Fake prize notifications requiring payment to claim"
  },

  identityScam: {
    patterns: [
      /\b(kyc|know.*your.*customer|identity.*verification|document.*verification)\b/i,
      /\b(aadhaar|pan.*card|bank.*passbook|photo.*id|selfie.*with.*id)\b/i,
      /\b(update.*kyc|complete.*kyc|kyc.*pending|kyc.*failed|verify.*identity)\b/i,
    ],
    weight: 25,
    description: "Requests for identity documents for fraudulent purposes"
  },

  romanceScam: {
    patterns: [
      /\b(love|romance|relationship|marry|married|wedding|trust.*me|feel.*strongly)\b/i,
      /\b(long.*distance|overseas|military|doctor|engineer|working.*abroad)\b/i,
      /\b(send.*gift|send.*money|help.*family|medical.*emergency|investment.*for.*us)\b/i,
    ],
    weight: 25,
    description: "Emotional manipulation to extract money"
  },

  techSupportScam: {
    patterns: [
      /\b(technical.*support|microsoft|apple|google|amazon.*support|customer.*care)\b/i,
      /\b(computer.*infected|virus|malware|hacked|unauthorized.*access)\b/i,
      /\b(remote.*access|teamviewer|anydesk|quick.*assist|give.*control)\b/i,
      /\b(refund.*for.*subscription|subscription.*expired|renew.*subscription)\b/i,
    ],
    weight: 30,
    description: "Fake tech support or refund scams"
  }
};

// Helper function to detect scam type from text (fallback)
const detectScamType = (text) => {
  const lowerText = text.toLowerCase();
  const detectedTypes = [];

  if (/\b(otp|one.?time.*password|verification.*code|pin|password.*shared|shared.*otp)\b/i.test(lowerText)) {
    detectedTypes.push("OTP Theft");
  }
  if (/\b(upi|payment|wallet|qr.*code|scan.*qr|send.*money|transfer)\b/i.test(lowerText)) {
    detectedTypes.push("UPI Fraud");
  }
  if (/\b(job|work.*from.*home|remote.*job|part.*time|freelance|earning|typing|registration.*fee|training.*fee)\b/i.test(lowerText)) {
    detectedTypes.push("Job Fraud");
  }
  if (/\b(investment|crypto|bitcoin|trading|stock|mutual.*fund|forex|double.*money|high.*return)\b/i.test(lowerText)) {
    detectedTypes.push("Investment/Crypto Scam");
  }
  if (/\b(click.*link|login|website|verify.*account|update.*account|bank.*website|amazon|paytm)\b/i.test(lowerText)) {
    detectedTypes.push("Phishing");
  }
  if (/\b(prize|lottery|winner|congratulations|won|claim.*prize|free.*gift)\b/i.test(lowerText)) {
    detectedTypes.push("Prize/Lottery Scam");
  }
  if (/\b(kyc|identity|document|aadhaar|pan.*card|verification)\b/i.test(lowerText)) {
    detectedTypes.push("KYC Fraud");
  }
  if (/\b(support|customer.*care|technical.*support|microsoft|amazon.*call|refund)\b/i.test(lowerText)) {
    detectedTypes.push("Tech Support Scam");
  }

  return detectedTypes.length > 0 ? detectedTypes : ["Unknown Scam Type"];
};

// Helper function to extract key red flags (fallback)
const extractRedFlags = (text) => {
  const lowerText = text.toLowerCase();
  const redFlags = [];

  if (/\b(urgent|immediately|asap|hurry|limited time|act now)\b/i.test(lowerText)) {
    redFlags.push({ flag: "Creates artificial urgency", explanation: "Scammers pressure you to act quickly without thinking" });
  }

  if (/\b(send money|transfer|pay fee|deposit|upfront|payment)\b/i.test(lowerText)) {
    redFlags.push({ flag: "Requests money/payment", explanation: "Legitimate organizations don't ask for money this way" });
  }

  if (/\b(otp|verification code|don't share|don't tell)\b/i.test(lowerText)) {
    redFlags.push({ flag: "Asks for OTP/PIN", explanation: "Banks/companies never ask for OTP - this is always a scam" });
  }

  if (/\b(guaranteed|double money|high return|easy money|free)\b/i.test(lowerText)) {
    redFlags.push({ flag: "Too good to be true", explanation: "Promises unrealistic returns are always scams" });
  }

  if (/\b(bank official|customer care|support team|hr department)\b/i.test(lowerText)) {
    redFlags.push({ flag: "Claims to be official", explanation: "Scammers impersonate real organizations" });
  }

  if (/\b(click link|visit website|login here|click here)\b/i.test(lowerText)) {
    redFlags.push({ flag: "Asks to click suspicious links", explanation: "Fake links steal your login credentials" });
  }

  return redFlags;
};

/**
 * Fallback pattern-based analysis (used when AI is unavailable)
 */
const analyzeWithPatterns = (text = "") => {
  if (!text || text.trim() === "") {
    return {
      score: 0,
      riskLevel: "LOW",
      detectedTypes: [],
      redFlags: [],
      analysis: "No description provided for analysis",
      method: "pattern"
    };
  }

  let totalScore = 0;
  let matchedPatterns = [];

  for (const [category, { patterns, weight, description }] of Object.entries(SCAM_PATTERNS)) {
    let categoryMatchCount = 0;

    for (const pattern of patterns) {
      if (pattern.test(text)) {
        categoryMatchCount++;
        totalScore += weight;
        matchedPatterns.push({ category, description, weight });
      }
    }

    if (categoryMatchCount > 1) {
      const maxWeight = weight;
      const bonus = Math.min(categoryMatchCount - 1, 3) * 5;
      totalScore = totalScore - (categoryMatchCount * weight) + maxWeight + bonus;
    }
  }

  const textLength = text.length;
  if (textLength < 20) {
    totalScore += 10;
  }

  const urgencyMatch = /\b(urgent|immediately|asap|hurry)\b/i.test(text.toLowerCase());
  const moneyMatch = /\b(money|payment|transfer|send|pay|fee|deposit)\b/i.test(text.toLowerCase());
  const contactMatch = /\b(whatsapp|telegram|phone|call|contact|message)\b/i.test(text.toLowerCase());

  if (urgencyMatch && moneyMatch) {
    totalScore += 15;
    matchedPatterns.push({
      category: "critical_combination",
      description: "URGENCY + MONEY REQUEST - Classic scam pattern",
      weight: 15
    });
  }

  if (urgencyMatch && contactMatch) {
    totalScore += 10;
    matchedPatterns.push({
      category: "critical_combination",
      description: "URGENCY + OFF-CONTACT REQUEST - High pressure to move conversation",
      weight: 10
    });
  }

  const normalizedScore = Math.min(Math.max(totalScore, 0), 100);

  let riskLevel = "LOW";
  if (normalizedScore >= 70) {
    riskLevel = "HIGH";
  } else if (normalizedScore >= 40) {
    riskLevel = "MEDIUM";
  }

  const detectedTypes = detectScamType(text);
  const redFlags = extractRedFlags(text);

  const urlRegex = /(https?:\/\/[^\s]+)/gi;
  const urls = text.toLowerCase().match(urlRegex) || [];
  
  const phoneRegex = /(\+?\d{10,13})/g;
  const phones = text.match(phoneRegex) || [];

  return {
    score: normalizedScore,
    riskLevel,
    detectedTypes,
    redFlags,
    matchedPatterns: matchedPatterns.slice(0, 10),
    method: "pattern",
    analysis: {
      totalIndicators: matchedPatterns.length,
      primaryRisk: detectedTypes[0] || "Unknown",
      confidence: normalizedScore >= 70 ? "HIGH" : normalizedScore >= 40 ? "MEDIUM" : "LOW",
      detectedUrls: urls,
      detectedPhones: phones
    }
  };
};

/**
 * Main analysis function - tries AI first, falls back to pattern matching
 */
export const analyzeTextForScam = async (text = "") => {
  if (!text || text.trim() === "") {
    return {
      score: 0,
      riskLevel: "LOW",
      detectedTypes: [],
      redFlags: [],
      analysis: "No text provided for analysis",
      method: "none"
    };
  }

  try {
    // Try AI analysis first
    const aiResponse = await analyzeWithAI(text);
    
    if (aiResponse?.data?.success) {
      const aiResult = aiResponse.data;
      
      // Convert AI result to standard format
      const riskScore = aiResult.confidence || 0;
      let riskLevel = "LOW";
      
      if (aiResult.isScam) {
        if (riskScore >= 70) {
          riskLevel = "HIGH";
        } else if (riskScore >= 40) {
          riskLevel = "MEDIUM";
        }
      }

      return {
        score: Math.round(riskScore),
        risk: riskLevel,
        detectedTypes: aiResult.scamType ? [aiResult.scamType] : [],
        redFlags: aiResult.redFlags || [],
        reasoning: aiResult.reasoning || "",
        advice: aiResult.realWorldAdvice || "",
        whatHappensNext: aiResult.whatHappensNext || "",
        scamType: aiResult.scamType,
        isScam: aiResult.isScam,
        method: "AI",
        analysis: {
          confidence: aiResult.confidence,
          analyzedAt: new Date().toISOString()
        }
      };
    }
    
    // AI failed or not available, use fallback
    console.log("AI analysis not available, using pattern fallback");
    const fallbackResult = analyzeWithPatterns(text);
    return {
      ...fallbackResult,
      method: "fallback"
    };
    
  } catch (error) {
    console.error("AI analysis error, falling back to pattern matching:", error);
    // Fallback to pattern analysis on error
    return analyzeWithPatterns(text);
  }
};

/**
 * Quick risk assessment (sync - pattern only, no API call)
 */
export const getQuickRiskScore = (text = "") => {
  const analysis = analyzeWithPatterns(text);
  return {
    score: analysis.score,
    riskLevel: analysis.riskLevel,
    method: "pattern"
  };
};

/**
 * Pure pattern-based analysis (for offline use)
 */
export const analyzeWithPatternsOnly = (text = "") => {
  return analyzeWithPatterns(text);
};

// Risk level helper
export const getRiskLevel = (score) => {
  if (score >= 70) return "HIGH";
  if (score >= 40) return "MEDIUM";
  return "LOW";
};

export default {
  analyzeTextForScam,
  getQuickRiskScore,
  analyzeWithPatternsOnly,
  getRiskLevel
};

