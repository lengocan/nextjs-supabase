import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({ req, res });
    const { data: {
        session
    }, error } = await supabase
        .auth
        .getSession()

    if (!session) {
        return NextResponse.rewrite(new URL('/login', req.url));
    }

    console.log(error)

    return res;
}
export const config = {
    marcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
    ]
}