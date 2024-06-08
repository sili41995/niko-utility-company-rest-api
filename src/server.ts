import app, { prisma } from './app';

const port = process.env.PORT || 3000;

prisma
  .$connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Now listening on port ${port}`);
    });
  })
  .catch(() => {
    prisma.$disconnect();
  });
