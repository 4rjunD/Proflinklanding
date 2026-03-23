import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const db = getDb();

  const link = db
    .prepare("SELECT * FROM links WHERE slug = ?")
    .get(slug) as { destination: string } | undefined;

  if (!link) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Increment click count
  db.prepare("UPDATE links SET clicks = clicks + 1 WHERE slug = ?").run(slug);

  // Build destination with ref hidden field
  const destination = link.destination.includes("#")
    ? `${link.destination}&ref=${slug}`
    : `${link.destination}#ref=${slug}`;

  const response = NextResponse.redirect(destination);

  // Set ref cookie (90 days)
  response.cookies.set("ref", slug, {
    maxAge: 90 * 24 * 60 * 60,
    path: "/",
    httpOnly: false,
    sameSite: "lax",
  });

  return response;
}
