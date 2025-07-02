import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI(process.env.GOOGLE_GEMINI_KEY);

const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words",
});
console.log(response.text);

async function generateContent(prompt)
{
    const result = await model.generateContent(prompt)
    return result.response.text()
}

module.exports = generateContent()



await main();