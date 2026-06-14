import { NextResponse } from "next/server";
import { appStatus } from "@/lib/health";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json(appStatus());
}
