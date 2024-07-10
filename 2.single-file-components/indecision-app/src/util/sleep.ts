export const sleep = (seconds: number = 1) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(null)
        }, 1000 * seconds);
    })
};