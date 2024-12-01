// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const post1 = await prisma.post.create({
    data: {
      title: 'NextJS: The React Framework for the Web',
      link: 'https://nextjs.org/',
    },
  });

  const post2 = await prisma.post.create({
    data: {
      title: 'TailwindCSS: Rapidly build modern websites',
      link: 'https://tailwindcss.com/',
    },
  });

  const post3 = await prisma.post.create({
    data: {
      title: 'Неплатежи по ипотеке выросли в Петербурге на 44%, в Ленобласти — на 91%',
      link: 'https://www.rbc.ru/spb_sz/01/12/2024/674995eb9a7947820ab7db9f',
    },
  });

  const post4 = await prisma.post.create({
    data: {
      title: 'Декабрь в Петербурге начинается с аномально теплой погоды',
      link: 'https://www.fontanka.ru/2024/12/01/74398121/',
    },
  });

  const post5 = await prisma.post.create({
    data: {
      title: 'Сеть Sela рассказала об открытии новых магазинов и собственных кафе ',
      link: 'https://www.rbc.ru/spb_sz/01/12/2024/6748680f9a794784a8b8d52a',
    },
  });

  const post6 = await prisma.post.create({
    data: {
      title: ' В Петербурге тестируют терминал нового аэропорта',
      link: 'https://www.rbc.ru/spb_sz/01/12/2024/6746c5a99a794716c79d8d5a',
    },
  });

  const post7 = await prisma.post.create({
    data: {
      title: 'Авария изменила движение транспорта в Петербурге',
      link: 'https://www.rbc.ru/spb_sz/30/11/2024/674b26cf9a79473536b55f57',
    },
  });

  const post8 = await prisma.post.create({
    data: {
      title: 'Путин посетит Минск',
      link: 'https://tass.ru/politika/22545923',
    },
  });

  const post9 = await prisma.post.create({
    data: {
      title: 'Съезд Дедов Морозов в Екатеринбурге',
      link: 'https://tass.ru/press/24949',
    },
  });

  const post10 = await prisma.post.create({
    data: {
      title: 'В РФ к 2030 году могут построить самый мощный в мире лазер',
      link: 'https://nauka.tass.ru/nauka/22539737',
    },
  });

}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
