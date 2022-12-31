export default class Reminder {
    id: number;
    title: string;
    isCompleted: boolean;

    constructor(title: string) {
        this.id = Date.now();
        this.title = title;
        this.isCompleted = false;
    }
}