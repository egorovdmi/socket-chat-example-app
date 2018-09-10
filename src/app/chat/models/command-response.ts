export class CommandResponse {
    constructor(
        public eventId: number,
        public message: string,
        public author: string = '') { }
}
