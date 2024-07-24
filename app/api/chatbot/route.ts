import { NextRequest } from "next/server";
import OpenAI from "openai";



const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!
})

export const POST = async (req: NextRequest) => {
  const { message } = await req.json();

  if (!message) {
    return new Response(JSON.stringify({ error: 'Message is required' }), { status: 400 });
  }

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a personal trainer and health expert.' },
        { role: 'user', content: message },
      ],
    });

    const reply = response.choices[0].message.content

    return new Response(JSON.stringify({ reply }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error generating response' }), { status: 500 });
  }
};
