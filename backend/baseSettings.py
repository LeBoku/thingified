import things

base_settings = {
	"X_DOMAINS": "*",
	"X_HEADERS": ["Content-Type", "If-Match"],

	"DOMAIN": {
		'things': things.config
	},

	"PUBLIC_METHODS": ["GET", "POST"],
	"PUBLIC_ITEM_METHODS": ["GET", "PUT", "DELETE"],
	"RESOURCE_METHODS": ["GET", "POST"],

	"MONGO_HOST": 'localhost',
	"MONGO_PORT": 27017,

	"MONGO_DBNAME": 'thingified'
}
