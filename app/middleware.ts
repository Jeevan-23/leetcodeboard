import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export async function middleware(request: NextRequest) {
  const session = await getKindeServerSession();

  if (!(await session.isAuthenticated())) {
    return NextResponse.redirect(new URL('/auth0', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/problems/:path*', // Match all paths under /problems
};
