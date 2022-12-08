class ExampleExtension {
    constructor(runtime) {
        console.log("Example Extension Loaded!")
    }

    getInfo() {
        return {
            "id": "example",
            "name": "Example Extension",
            "blocks": [
                {
                    "opcode": "example",
                    "blockType": "command",
                    "text": 'Example Block'
                }
            ]
        }
    }

    example() {
        console.log("example block ran")
    }
}

module.exports = ExampleExtension