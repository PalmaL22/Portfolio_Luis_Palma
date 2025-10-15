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

    const openaiKey = process.env.OPENAI_API_KEY;
    
    if (!openaiKey) {
      return NextResponse.json({ error: "OpenAI API key not found" }, { status: 500 });
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openaiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: "OpenAI API error", details: data }, { status: 500 });
    }

    const reply = data.choices?.[0]?.message?.content || "No response";
    return NextResponse.json({ reply });
    } catch (err: unknown) {
    console.error("Server error:", err);

    // Narrow the type safely
    const message = err instanceof Error ? err.message : String(err);

    return NextResponse.json({ error: "Server error", details: message }, { status: 500 });
    }
}
