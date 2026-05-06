// import { auth0 } from 'better-auth/plugins';
import { NextResponse } from 'next/server'
import {auth} from '@/app/lib/auth'
import { headers } from 'next/headers';


// This function can be marked `async` if using `await` inside
export async function proxy(request) {
    const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
//   return NextResponse.redirect(new URL('/', request.url))
}
 
export const config = {
  matcher: ['/user-profile', '/courses/:path']
}