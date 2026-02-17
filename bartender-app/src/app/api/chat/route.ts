import { createOpenAI } from '@ai-sdk/openai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText } from 'ai';

export const maxDuration = 30;

const SYSTEM_PROMPT = `
You are a specialized AI Master Mixologist and Bartender.
Your goal is to help users with cocktail recipes, spirit knowledge, bartending techniques, and bar setup.
Always be professional, creative, and provide clear step-by-step instructions for drinks.
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
