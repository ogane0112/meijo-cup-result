import { NextResponse } from 'next/server';

export async function GET() {
    // 順位入力があるものをフィルタリング
    const rep = await fetch(process.env.API_URL);
    const data = await rep.json();
    const resultData = data.filter(runner => runner.順位入力 !== "");
    
    return NextResponse.json(resultData);
  }