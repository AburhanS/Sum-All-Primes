function sumPrimes(num) {
    function isPrime(n) {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
            return false;
            }
        }
        return true;
    }

    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
        sum += i;
        }
    }
    return sum;
}

console.log(sumPrimes(2)); // 2
console.log(sumPrimes(10)); // 17
console.log(sumPrimes(977)); // 73156