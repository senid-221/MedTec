import { NextResponse, type NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Keep the public website accessible at /.
  if (pathname === '/') return NextResponse.next();

  // The dashboard lives at /admin. Keep /dashboard as a compatibility redirect.
  if (pathname === '/dashboard' || pathname.startsWith('/dashboard/')) {
    const target = request.nextUrl.clone();
    target.pathname = pathname.replace(/^\/dashboard/, '/admin');
    return NextResponse.redirect(target);
  }

  if (!url || !key) return NextResponse.next();

  let response = NextResponse.next({ request });
  const supabase = createServerClient(url, key, {
    cookies: {
      getAll: () => request.cookies.getAll(),
      setAll: (cookies) => cookies.forEach(({ name, value, options }) => {
        request.cookies.set(name, value);
        response.cookies.set(name, value, options);
      }),
    },
  });

  const { data: { user } } = await supabase.auth.getUser();

  if (!user && !pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (user && pathname === '/login') {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return response;
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/admin/:path*',
    '/profiles/:path*',
    '/gallery/:path*',
    '/create/:path*',
    '/schedule/:path*',
    '/bulk-scheduling/:path*',
    '/reels/:path*',
    '/reels-history/:path*',
    '/settings/:path*',
    '/login',
  ],
};
