async function taskRoutes(fastify, options) {
    const { taskController } = options;

    fastify.get('/tasks', taskController.getAll.bind(taskController));
    fastify.post('/tasks', taskController.create.bind(taskController));
    fastify.get('/tasks/:id', taskController.getById.bind(taskController));
    fastify.put('/tasks/:id', taskController.update.bind(taskController));
    fastify.delete('/tasks/:id', taskController.delete.bind(taskController));
    
}

export default taskRoutes