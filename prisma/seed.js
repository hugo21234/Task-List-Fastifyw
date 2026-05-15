import 'dotenv/config';
import prisma from '../lib/prisma.js';

async function main() {
  const user = await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: 'Usuario Dev',
      password: '123456',
    },
  });

  console.log('User seedado:', user);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });