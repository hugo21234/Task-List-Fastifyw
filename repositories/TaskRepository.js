
class TaskRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }


    async findAll() {
        return this.prisma.task.findMany()
    }


    async create(data) {
        return this.prisma.task.create({data});
    }

    async findById(id) {
        return this.prisma.task.findUnique({where: {id}});
    }
    async update(id, data) {
        return this.prisma.task.update({where: {id}, data})
    }
    async delete(id) {
        return this.prisma.task.delete({where: {id}})
    }
}


export default TaskRepository;