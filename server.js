import 'dotenv/config';
import App from './app.js'

const server = new App().fastify;

server.listen({port: process.env.PORT}, function(err, address)  {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening on ${address}`);
})

