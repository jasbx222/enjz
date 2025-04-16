// middleware.ts (أو .js إن كنت تستخدم JavaScript)
import { NextResponse } from 'next/server'
export function middleware(request) {
  const token = request.cookies.get('token')?.value

  const isLoginPage = request.nextUrl.pathname.startsWith('/login')
  const isPrivateRoute = !isLoginPage

  if (!token && isPrivateRoute) {
    // إعادة التوجيه إلى /login إذا لم يوجد توكن
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (token && isLoginPage) {
    // إذا المستخدم لديه توكن ويروح لـ /login نرجعه إلى الصفحة الرئيسية
    return NextResponse.redirect(new URL('/home', request.url))
  }

  // // يسمح بمتابعة التصفح إذا كل شيء طبيعي
  return NextResponse.next()
}

export const config = {
  matcher: [
    // يشمل كل المسارات ما عدا api والملفات الثابتة والصور وغيرها
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
