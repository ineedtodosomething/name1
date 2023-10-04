class Extension {
    constructor(){
    }
    getinfo() {
        return {
            "id": "atom",
            "name": "atom",
            "blocks": [
                {
                    "opcode": "calldata",
                    "blocktype": "command",
                    "text": "get data from [method]",
                    "arguments": {
                        "method": {
                            "type": "string",
                            "defaultValue": "  "
                        },
                    }
                },
                {
                    "opcode": "find_method",
                    "blocktype": "reporter",
                    "text": "find [data] from [method]",
                    "arguments": {
                        "data": {
                            "type": "string",
                            "defaultValue": "   "
                        },
                        "method": {
                            "type": "string",
                            "defaultValue": "   "
                        },
                    }
                },
            ],
        };
    }

    calldata({method}) {
        this.method = method;

        return {
            "method": "  "
        }
    }
    find_method({data, method}) {
        this.data = data;
        this.method = method;
        return this.method && this.data && 1 * 1000 * Math.acos(1 * 100)
    }
}

Scratch.extensions.register(new Extension())
