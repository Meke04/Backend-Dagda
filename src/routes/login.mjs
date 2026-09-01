import models from '../../models/index.js'
import argon2 from 'argon2';
import loginSchema from '../schemas/login.schema.mjs';

export default async function loginRoutes(app) {
    app.post('/login', loginSchema, async (request, reply) => {
        // pegar os dados enviados
        const { email, password } = request.body;

        // criar o usuário
        try {

            const user = await models.User.findOne({ 
                where: { email }
            });
            if ( !user ) {
                reply.status(401).send({ error: 'Usuario não encontrado' });
                return;
            }

            const isPasswordValid = await argon2.verify(user.password, password);
            if (!isPasswordValid) {
                reply.status(401).send({ error: 'Senha incorreta' });
                return;
            } 
            reply.send({ message: 'Login bem-sucedido' });
            
        } catch (error) {
            reply.status(500).send({ error: 'Erro ao fazer login.' });
        }
    });
}