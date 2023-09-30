import type { NextRequest } from "next/server";

export async function POST(_request: NextRequest) {
  await new Promise((r) => setTimeout(r, 2000));

  return new Response(null, { status: 204 });
}
