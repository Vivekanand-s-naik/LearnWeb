const pause = (callbackFn, params, ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            callbackFn(params)
            resolve()
        }, ms)
    })
}


const stimulateFetch = (request) => {
    console.log("API Called : ", request);
}

const debouncedSearch = (callbackFn, waitTill = 5000) => {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callbackFn(...args);
        }, [waitTill])
    }
}

function generateRequest() {
    const input = "React";
    const debouncedSearchFn = debouncedSearch(stimulateFetch)
    let index = 0;
    (async () => {
        while (index < input.length) {
            await pause(debouncedSearchFn, input.charAt(index), 1000)
            index++;
        }
    })()
}
generateRequest();

console.log(0 && "Hello")