let isRunning = false;

const countPomodoro = event => {
    if (isRunning) return;

    isRunning = true;

    const state = event.data;

    const { activeTask, secondsReamaining } = state;

    const endDate = activeTask.startDate + secondsReamaining * 10 * 10 * 10;
    const now = Date.now();
    let coundDownSeconds = Math.ceil((endDate - now) / 1000);

    const tick = () => {
        self.postMessage(coundDownSeconds);

        const now = Date.now();
        coundDownSeconds = Math.floor((endDate - now) / 1000);

        setTimeout(tick, 1000);
    };
    
    tick();
};

self.onmessage = countPomodoro;
