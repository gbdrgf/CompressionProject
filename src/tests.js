const { serialize, deserialize } = require('./serializer');

function test() {
    const tests = [
        { input: [1, 2, 3], name: "Simple short array" },
        { input: Array.from({ length: 50 }, () => Math.floor(Math.random() * 300) + 1), name: "50 random numbers" },
        { input: Array.from({ length: 1000 }, () => Math.floor(Math.random() * 300) + 1), name: "1000 random numbers" },
        { input: Array.from({ length: 300 }, (_, i) => i + 1), name: "All numbers 1-300" },
        { input: Array.from({ length: 900 }, (_, i) => (i % 3) + 1), name: "Repeated numbers (900)" },
    ];

    for (const test of tests) {
        try {
            const serialized = serialize(test.input);
            const deserialized = deserialize(serialized);

            console.log(`Test: ${test.name}`);
            console.log(`Original length: ${JSON.stringify(test.input).length}`);
            console.log(`Serialized length: ${serialized.length}`);
            console.log(
                `Compression ratio: ${(serialized.length / JSON.stringify(test.input).length).toFixed(2)}`
            );

            if (JSON.stringify(deserialized) !== JSON.stringify(test.input)) {
                console.error(
                    `Test failed: ${test.name} - Deserialized array does not match original input`
                );
            } else {
                console.log("Test passed!");
            }
        } catch (error) {
            console.error(`Test failed: ${test.name} - ${error.message}`);
        }
    }
}

test();
