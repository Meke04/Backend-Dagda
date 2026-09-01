import 'dotenv/config';
import app from './app.mjs';

app.listen({ port: 3333 }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }

  console.log(`Servidor rodando em ${address}`);
});