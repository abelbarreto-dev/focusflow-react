import type { TaskStateModel } from "../models/TaskStateModel";

let instance: TimerWorkerSingleton | null = null;

export class TimerWorkerSingleton {
    private worker: Worker;

    private constructor() {
        this.worker = new Worker(new URL("timerWorker.js", import.meta.url));
    }

    static getInstance() {
        if (!instance) {
            instance = new TimerWorkerSingleton();
        }

        return instance;
    }

    postMessage(message: TaskStateModel) {
        this.worker.postMessage(message);
    }

    onmessage(callback: (event: MessageEvent) => void) {
        this.worker.onmessage = callback;
    }

    terminate() {
        this.worker.terminate();
        instance = null;
    }
}
