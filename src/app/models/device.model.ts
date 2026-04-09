export class Device {
    date: string = new Date().toISOString();
    position: string = '6';

    constructor(
        public id: string = crypto.randomUUID(),
        public name: string,
        public model: string,
        public rate: number,
    ) {
    }
}
