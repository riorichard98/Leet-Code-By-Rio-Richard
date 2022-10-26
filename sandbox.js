function shipping(N, h) {
    // Your code starts here.
    let output = []
    for (let i = 0; i < N; i++) {
        let lowest = h[i]
        for (let j = i; j < N; j++) {
            if (lowest > (h[j] + j - i)) {
                lowest = h[j] + j - i
            }
        }
        for (let k = i; k >= 0; k--) {
            if (lowest > (h[k] + i - k)) {
                lowest = h[k] + i - k
            }
        }
        output.push(lowest)
    }
    return output
}
exports.shipping = shipping;



console.log(shipping(5, [100, 100, 100, 100, 1]));