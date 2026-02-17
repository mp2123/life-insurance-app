import { createOpenAI } from '@ai-sdk/openai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText } from 'ai';

export const maxDuration = 30;

const SYSTEM_PROMPT = `
You are a specialized AI Study Assistant for the Arizona 2026 Life Insurance Licensing Exam.
Always be professional, encouraging, and provide clear explanations based on Arizona-specific insurance laws.
`;

export async function POST(req: Request) {
  const { messages, apiKey, provider } = await req.json();

  // Initialize the correct provider with the optionally provided API key
  let model;
  if (provider === 'google') {
    const google = createGoogleGenerativeAI({
      apiKey: apiKey || process.env.GOOGLE_GENERATIVE_AI_API_KEY,
    });
    model = google('gemini-1.5-flash');
  } else {
    const openai = createOpenAI({
      apiKey: apiKey || process.env.OPENAI_API_KEY,
    });
    model = openai('gpt-4o-mini');
  }

  const result = await streamText({
    model,
    system: SYSTEM_PROMPT,
    messages,
  });

  return result.toTextStreamResponse();
}
