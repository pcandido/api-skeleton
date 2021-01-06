import supertest from 'supertest'

describe('health check', () => {

    it('should respond with 200 when called', async () => {
        const { status } = await supertest(app).get('/health-check')
        expect(status).toBe(200)
    })

})
