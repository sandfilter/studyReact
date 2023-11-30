import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ code: 0 }); // 默认http 响应状态码 为200
  // 可通过第二参数进行设置，它是一个 ResponseInit 的参数类型
  //   return NextResponse.json({ code: 0 }, { status: 500 });
}

export async function PUT(request: NextRequest) {
  const cookies = request.cookies.getAll()
  // 不推荐 在构建类似 hexo 静态页面(SSG)的时候会报错，说你依赖了cookies无法构建
  // import {cookies} from 'next/headers'
  // const cookie = cookies()

  const headers = request.headers;
  const ContentType = headers.get('Content-Type')
}