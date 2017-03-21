
connection = {
	"type": "dict",
	"schema": {
		"name": {"type": "string"},
		"type": {"type": "number"}
	}
}

schema = {
	"name": {
		"type": "string",
		"required": True
	},
	"description": {
		"type": "string"
	},
	"connections": {
		"type": "list",
		"schema": connection
	}
}
