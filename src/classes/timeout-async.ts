export function timeoutAsync(timeMilliseconds: number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, timeMilliseconds);
    });
}