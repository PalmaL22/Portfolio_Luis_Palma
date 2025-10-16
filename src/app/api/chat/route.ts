import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const messages = body.messages;
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "No valid messages array provided" },
        { status: 400 }
      );
    }

    const groqKey = process.env.GROQ_API_KEY;
    if (!groqKey) {
      return NextResponse.json({ error: "Groq API key not found" }, { status: 500 });
    }

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${groqKey}`,
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-120b",
        messages,
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: "Groq API error", details: data }, { status: 500 });
    }

    const choice = data.choices?.[0];
    const reply = choice?.message?.content;
    
    if (!reply || reply.trim() === "") {
      return NextResponse.json({ error: "Empty response from AI" }, { status: 500 });
    }
    
    return NextResponse.json({ reply });
    } catch (err: unknown) {
    console.error("Server error:", err);
    const message = err instanceof Error ? err.message : String(err);

    return NextResponse.json({ error: "Server error", details: message }, { status: 500 });
    }
}
