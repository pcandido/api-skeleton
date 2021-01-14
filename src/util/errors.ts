export class RequestError extends Error {
    constructor(
        public message: string,
        protected code: number = 400,
        protected description?: string,
    ) {
        super(message)
        this.name = this.constructor.name
    }
}

export class InternalError extends Error {
    constructor(
        public message: string,
        protected code: number = 500,
        protected description?: string,
    ) {
        super(message)
        this.name = this.constructor.name
    }
}
