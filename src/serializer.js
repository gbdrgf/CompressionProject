function serialize(numbers) {
    if (!Array.isArray(numbers)) throw new Error("Input must be an array");
    let result = "";
    for (const num of numbers) {
        if (num < 1 || num > 300) {
            throw new Error("Number out of range (1-300)");
        }
        result += String.fromCharCode(num);
    }
    return result;
}

function deserialize(serialized) {
    if (typeof serialized !== "string") throw new Error("Input must be a string");

    const numbers = [];
    for (const char of serialized) {
        numbers.push(char.charCodeAt(0));
    }
    return numbers;
}

module.exports = { serialize, deserialize };
