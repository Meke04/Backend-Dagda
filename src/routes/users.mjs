import models from '../../models/index.js'
import argon2 from 'argon2';
import userSchema from '../schemas/user.schema.mjs';

export default async function userRoutes(app) {
    app.post('/users', userSchema, async (request, reply) => {
        // pegar os dados enviados
        const { name, email, password } = request.body;

        const hashedPassword = await argon2.hash(password);
        // criar o usuário
        const user = await models.User.create({ name, email, password: hashedPassword });
        // devolver o resultado
        return user;
    });
}