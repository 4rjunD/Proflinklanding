import { getDb, Link } from "@/lib/db";

export const dynamic = "force-dynamic";

const BASE_URL = process.env.BASE_URL || "https://proflink.org";

export default function AdminLinks() {
  const db = getDb();
  const links = db
    .prepare("SELECT * FROM links ORDER BY created_at DESC")
    .all() as Link[];

  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-semibold mb-1">Link Tracking</h1>
        <p className="text-sm text-muted-foreground mb-8">
          {links.length} tracked links
        </p>

        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="text-left py-3 px-4 font-medium">Label</th>
                <th className="text-left py-3 px-4 font-medium">Link</th>
                <th className="text-right py-3 px-4 font-medium">Clicks</th>
                <th className="text-right py-3 px-4 font-medium">Conversions</th>
                <th className="text-right py-3 px-4 font-medium">Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {links.map((link) => {
                const rate =
                  link.clicks > 0
                    ? ((link.conversions / link.clicks) * 100).toFixed(1)
                    : "0.0";
                const fullUrl = `${BASE_URL}/r/${link.slug}`;

                return (
                  <tr key={link.id} className="hover:bg-muted/30">
                    <td className="py-3 px-4 font-medium">{link.label}</td>
                    <td className="py-3 px-4">
                      <code className="text-xs bg-muted px-2 py-1 rounded select-all">
                        {fullUrl}
                      </code>
                    </td>
                    <td className="py-3 px-4 text-right tabular-nums">
                      {link.clicks}
                    </td>
                    <td className="py-3 px-4 text-right tabular-nums">
                      {link.conversions}
                    </td>
                    <td className="py-3 px-4 text-right tabular-nums">
                      {rate}%
                    </td>
                  </tr>
                );
              })}
              {links.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="py-8 text-center text-muted-foreground"
                  >
                    No links yet. Run: node scripts/create-links.js
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
