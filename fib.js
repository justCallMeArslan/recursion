export function fibLoop(n) {

    if (!Number.isInteger(n) || n < 0) {
        return undefined;
    }

    let arr = [0, 1];

    if (n === 0) {
        return [0]
    }

    if (n === 1) {
        return arr;
    }



    for (let i = 2; i <= n; i++) {
        const next = arr[i - 1] + arr[i - 2];
        arr.push(next);
    }
    return arr;
}


export function fibRecur(n) {
    if (!Number.isInteger(n) || n < 0) {
        return undefined;
    }

    if (n === 0) {
        return [0]
    }

    if (n === 1) {
        return [0, 1];
    }


    const arr = fibRecur(n - 1)
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);

    return arr;
}