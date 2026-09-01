
const loginSchema = {
  schema: {
            body: {
                type: 'object',
                properties: {
                    email: { type: 'string', format: 'email' },
                    password: { type: 'string', minLength: 8, maxLength: 72 }
                },
                required: ['email', 'password'],
                additionalProperties: false
            }
        }
};

export default loginSchema;