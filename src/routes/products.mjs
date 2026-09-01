import models from '../../models/index.js'

export default async function productRoutes(app) {
    app.get('/products', async (request, reply) => {
        const products = await models.Product.findAll();

        return products;
    });
}