export function rangeSum(start, end) {
    let sum = 0;
    const from = Math.min(start, end);
    const to = Math.max(start, end);

    for (let i = from; i <= to; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }

    return sum;
}

export function iterationCount(a) {
    let count = 0;

    while (a > 0.1) {
        a = a / 2;
        count++;
    }

    return count;
}

export function symbolsReplace(message) {
    if (message === '') {
        return '';
    }

    let result = '';
    let i = 0;

    do {
        result += (i + 1) % 3 === 0 ? '_' : message[i];
        i++;
    } while (i < message.length);

    return result;
}
