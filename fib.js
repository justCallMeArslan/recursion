export function fibLoop(n) {

    if (!Number.isInteger(n)) {
        return undefined;
    }


    let arr = [0, 1];

    for (let i = 2; i <= n; i++) {
        let temp = arr[i - 1] + arr[i - 2];
        arr.push(temp);
    }
    return arr;

}

fibLoop(10);