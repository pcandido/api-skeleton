describe('health check', () => {

    it('should respond with 200 when called', async () => {
        const { status } = await global.testRequest.get('/health-check')
        expect(status).toBe(200)
    })

})
