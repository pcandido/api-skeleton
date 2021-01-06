import './util/module-alias'
import bodyParser from 'body-parser'
import { Server } from '@overnightjs/core'
import { Application } from 'express'
import { HealthCheck } from './controllers/health-check'

export class SetupServer extends Server {

    constructor(private port = 3000) {
        super()
    }

    public async init(): Promise<void> {
        this.setupExpress()
        this.setupControllers()
    }

    private setupExpress() {
        this.app.use(bodyParser.json())
    }

    private setupControllers() {
        this.addControllers([
            new HealthCheck(),
        ])
    }

    public getApp(): Application {
        return this.app
    }
}
