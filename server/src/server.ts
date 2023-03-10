import Fastify from 'fastify'
import cors from '@fastify/cors'

import { PrismaClient } from '@prisma/client'
const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

app.get('/', () => {
    return 'Hello World'
})

app.get('/hello', async () => {
    const habits = await prisma.habit.findMany({
        where: {
            title: {
                startsWith: 'beber'
            }
        }        
    })

    return habits
})

app.listen({
    port: 3333,
})
.then( () => {
    console.log('Http Server running')
})