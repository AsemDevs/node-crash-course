const startTime = new Date();

const timeConsumed = () => {
    const endTime = new Date();
    const timeElapsed = endTime - startTime;
    console.log(`Done After ${timeElapsed}`);
};
const delay = 3000;
setTimeout(timeConsumed, delay);