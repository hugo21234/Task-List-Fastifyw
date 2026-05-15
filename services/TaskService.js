class TaskService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }

    async getAll() {
        return this.taskRepository.findAll();
    }

    async create (data){
        const userId = Number(data.userId);

        if(!data.title || !data.title.trim()) {
            throw new Error('Title is required');
        }

        if(!data.status || !data.status.trim()) {
            throw new Error('Status is required');
        }

        if(!Number.isInteger(userId)) {
            throw new Error('A valid userId is required');
        }

        return this.taskRepository.create({
            title: data.title,
            description: data.description,
            status: data.status,
            userId,
        });
    }

    async getById(id) {
        return this.taskRepository.findById(id);
    }

    async update(id, data) {  
        if(!data.title || !data.description) {
            throw new Error('Title and description are required');
        }
         id = Number(id)
        return this.taskRepository.update(id, data)     
    }

    async delete(id){
        return this.taskRepository.delete(id);
    }

}

export default TaskService;
