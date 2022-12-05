class exampleExtension {
    constructor(runtime) {

    }

    getInfo() {
        return {
            "id": "example",
            "name": "Example Extension",
            "blocks": [
                {
					"func": "testjs",
                    "blockType": "button",
                    "text": 'Example Button'
                }
            ]
        }
    }
}

module.exports = exampleExtension