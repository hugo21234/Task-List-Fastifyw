

class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }

    async getAll(request, reply) {
        try {
            const tasks = await this.taskService.getAll();
            reply.code(200).send(tasks);
        } catch (error) {
            reply.code(500).send({ error: error.message });
        }
    }

    async create(request, reply) {
        try {
            const task = await this.taskService.create(request.body);
            reply.code(201).send(task);
        } catch (error) {
            reply.code(400).send({ error: error.message });
        }
    } 
        async getById(request, reply){
            try {
                const task = await this.taskService.getById(request.params.id);
                reply.code(200).send(task);
            }catch (error) {
                reply.code(500).send({ error: error.message });
            } 

        }

        async update(request, reply){
            try {
                const task = await this.taskService.update(request.params.id, request.body);
                reply.code(200).send(task);
            }catch (error) {
                reply.code(400).send({ error: error.message });
            } 
        }

        async delete(request, reply){
            try {
                const task = await this.taskService.delete(request.params.id);
                reply.code(200).send(task);
            }catch (error) {
                reply.code(500).send({ error: error.message });
            } 
        }
}
export default TaskController;