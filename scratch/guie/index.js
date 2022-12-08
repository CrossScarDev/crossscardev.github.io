class exampleExtension {
    constructor(runtime) {

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

(function() {
    var extensionInstance = new exampleExtension(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()