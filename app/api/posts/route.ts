// app/api/posts/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export async function GET() {
  const posts = await prisma.post.findMany();
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const { title, link, createdAt } = await request.json();
  const newPost = await prisma.post.create({
    data: {
      title,
      link,
      createdAt,
    },
  });
  return NextResponse.json(newPost);
}
