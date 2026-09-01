
const userSchema = {
  schema: {
            body: {
                type: 'object',
                properties: {
                    name: { type: 'string', maxLength: 30 },
                    email: { type: 'string', format: 'email' },
                    password: { type: 'string', minLength: 8, maxLength: 72 }
                },
                required: ['name', 'email', 'password'],
                additionalProperties: false
            }
        }
};

export default userSchema;