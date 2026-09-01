import fastify from "fastify";
import productRoutes from './routes/products.mjs';
import userRoutes from './routes/users.mjs';
import loginRoutes from './routes/login.mjs';
import cors from '@fastify/cors';


const app = fastify({
    logger:true
})

app.register(cors, {
    origin: 'http://localhost:3000'
});


app.register(userRoutes);
app.register(productRoutes);
app.register(loginRoutes);

export default app;