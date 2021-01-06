import './util/module-alias'
import { Server } from '@overnightjs/core'
import bodyParser from 'body-parser'

export class SetupServer extends Server {

    constructor(private port = 3000) {
        super()
    }

    async init(): Promise<void> {
        this.setupExpress()
    }

    private setupExpress() {
        this.app.use(bodyParser.json())
    }

}
