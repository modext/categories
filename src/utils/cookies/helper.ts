

import { cookies } from "next/headers";
import { NextResponse } from "next/server";



export async function getSession() {
  try {
    const response = await fetch('https://ekko-ai.influencerstockexchange.com/', {
      credentials: 'include', 
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();

    const cookies = response.headers.get('set-cookie');
    if (cookies) {
      return new NextResponse(JSON.stringify(data), {
        status: 200,
        headers: {
          'Set-Cookie': cookies
        }
      });
    }
    return new NextResponse(JSON.stringify(data), {
      status: 200
    });
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}