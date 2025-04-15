"use server"
import { NextResponse } from 'next/server'

export function middleware(request) {
  
  const token =request.cookies.get('user')?.value

  // إذا ماكو توكن، يرجع المستخدم إلى صفحة تسجيل الدخول
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }




  return NextResponse.next()
}

export const config = {
  matcher: [
    /*

     * يستثني المسارات التالية:
     * - api (مسارات API)
     * - _next/static (ملفات ستايل وصور)
     * - _next/image (معالجة الصور)
     * - favicon.ico, sitemap.xml, robots.txt
     * - login (حتى لا يصير redirect داخل صفحة تسجيل الدخول)
     */
   '/login/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|login).*)',
  ],
}
