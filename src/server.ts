import './util/module-alias'
import { Server } from '@overnightjs/core'
import bodyParser from 'body-parser'
import { HealthCheck } from './controllers/health-check'

export class SetupServer extends Server {

    constructor(private port = 3000) {
        super()
    }

    async init(): Promise<void> {
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
}
