import { Controller, Get } from '@overnightjs/core'
import { Request, Response } from 'express'

@Controller('health-check')
export class HealthCheck {

    @Get()
    async healthCheck(_: Request, response: Response): Promise<void> {
        response.status(200).end()
    }

}
