import OpenAI from "openai";
console.log("KEY EXISTS:", !!process.env.OPENAI_API_KEY);
console.log("KEY PREFIX:", process.env.OPENAI_API_KEY?.slice(0, 7));
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, question, cards } = body;

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: `
You are an experienced tarot reader.

User name:
${name || "Anonymous"}

User question:
${question || "General guidance"}

Cards:
${cards?.join(", ") || "Unknown"}

IMPORTANT:
- Reply in the same language as the user's question.
- If the user writes in Vietnamese, answer in Vietnamese.
- If the user writes in English, answer in English.
- Explain each card briefly.
- End with practical advice.
- Maximum 300 words.
`,
    });

    return Response.json({
      reading: response.output_text,
    });
  } catch (error) {
console.error("OPENAI ERROR:", error);

return Response.json({
reading: "Error contacting OpenAI.",
});
}

}