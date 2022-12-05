class exampleExtension {
    constructor(runtime) {

    }

    getInfo() {
        return {
            "id": "example",
            "name": "Example Extension",
            "blocks": [
                {
                    "opcode": "call.example",
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

module.exports = exampleExtension