import Fastify from 'fastify';
import helmet from '@fastify/helmet';
import taskRoutes from './routes/route.js';
import prisma from './lib/prisma.js';
import TaskRepository from './repositories/TaskRepository.js';
import TaskService from './services/TaskService.js';
import TaskController from './controllers/TaskController.js';


class App {
    constructor() {
        this.fastify = Fastify({
        logger: true});

        const taskRepository = new TaskRepository(prisma);
        const taskService = new TaskService(taskRepository);
        const taskController = new TaskController(taskService);

        this.registerPlugins();
        this.registerRoutes(taskRoutes, { taskController });
    }

    registerPlugins() {
        this.fastify.register(helmet);
    }
    registerRoutes(taskRoutes,options) {
        this.fastify.register(taskRoutes,options);
    }
   
}

export default App;
