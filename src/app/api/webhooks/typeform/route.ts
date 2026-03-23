import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Typeform sends hidden fields in form_response.hidden
    const hidden = body?.form_response?.hidden;
    const ref = hidden?.ref;

    if (!ref || typeof ref !== "string") {
      return NextResponse.json({ ok: true, note: "no ref field" });
    }

    const db = getDb();
    const result = db
      .prepare("UPDATE links SET conversions = conversions + 1 WHERE slug = ?")
      .run(ref);

    return NextResponse.json({
      ok: true,
      ref,
      matched: result.changes > 0,
    });
  } catch {
    return NextResponse.json({ ok: false, error: "invalid payload" }, { status: 400 });
  }
}
