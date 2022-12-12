function getDivisorsCnt(n) {
    let array = [1];
    for (let i = 2, limit = n >> 1; i <= limit; ++i) {
        if (!(n % i)) array.push(i);
    }
    if (n !== 1)
        array.push(n);
    return array.length
}
console.log(getDivisorsCnt(22))