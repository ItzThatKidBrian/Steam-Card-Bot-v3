module.exports = {
	USERNAME: 			"",												// Bot Steam Username
	PASSWORD: 			"",													// Bot Steam Password
	STEAMID:			"",											// Bot Steam ID
	SHAREDSECRET: 		"",									// Bot Shared Secret for your Bot account (SDA)
	IDENTITYSECRET: 	"",									// Bot Identity Secret for your Bot account (SDA)
	STEAMAPIKEY: 		"",																// Bot Steam API Key (only needed if using Webapi)
	ADMINS: 			["",""], 											// You can add multiple Administrators
	OWNER:				"",							// Owners Profile link
    
	PLAYGAMES: 			[":sets: Sets | Buying 21 Sets ⇆ Key | Selling 18 Sets ⇆ Key"],
	COMMENTAFTERTRADE: 	"Thanks for trading with me!.",							// Comment to a Users profile after trading		
	INVITETOGROUPID: 	"",											// Example SteamGroup ID: 100020003000400050
	WEBSITE: 			"",												// Your Website, you can insert your SteamGroup link here
	
    CARDS: {
        BUY1KEYFORAMOUNTOFSETS: 21, 													// For instance; if set to 20 you sell 20 sets for 1 key.
        GIVE1KEYPERAMOUNTOFSETS: 18, 													// For instance; if set to 30 you sell 1 key for 30 of their sets.
        MAXSETSELL: 250, 																// The maximum amount of sets of a kind the bot will send when !sell is used
    },
	
    MESSAGES: {
        WELCOME: "Welcome to my Trading Service, thank you for choosing me. Quick Start: Type !check, !buy, !sell or !help via SteamChat",
	TRADEMSG: "Please recheck your Trade and accept it to recieve your Items.",
        SELLHELP: "You are able to sell sets. Commands: !sell [amount of keys] - To check how many you can sell, simply type: !sellcheck .",
        MAXLEVEL: 3000, 																// Max level you can request using !level
        MAXBUY: 50, 																	// Max keys you can buy sets for at a time
        MAXSELL: 50 																	// Max keys you can sell sets for at a time
    },
	
    ACCEPTEDKEYS: [
        "Chroma 2 Case Key",
        "Huntsman Case Key",
        "Chroma Case Key",
        "eSports Key",
        "Winter Offensive Case Key",
        "Revolver Case Key",
        "Operation Vanguard Case Key",
        "Shadow Case Key",
        "Operation Wildfire Case Key",
        "Falchion Case Key",
        "Operation Breakout Case Key",
        "Chroma 3 Case Key",
        "CS:GO Case Key",
        "Operation Phoenix Case Key",
        "Gamma Case Key",
        "Gamma 2 Case Key",
        "Glove Case Key",
	"Spectrum Case Key",
        "Spectrum 2 Case Key",
	"Operation Hydra Case Key"
    ]
}
