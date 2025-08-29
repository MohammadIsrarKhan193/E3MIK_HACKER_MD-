const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3MIK_HACKER_MD-~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUhXUlZiMHBhYUlMbWtrakZPaHByWW5LYnJ5bWJJTDFPaGFvUDR6WUVWMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibEk0LzNaNDhtSkdpcytZU0NGcGtlbk5FMkNNMTFrenMvT2JiRFlzclZuTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTSCt1K2hWcVluYXZkM2Fid2pwZjFWSDNMMEdkVUR3Z1dNVlZmVlZQWGtjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzdGEvaVhLWnRiTGNZdng5RnE2aUV2TFhLVExpM3VwWlQ0QitPS3Q1d3lzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNGWTVEUWI3UXdLaVlwbXNOVHdPbWhod2loSysrQUhlYUU0NkcxeUEzMTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJRM3JRRkZveURTK0FLUEM2S1pMbjVhdkU4aXBrY1gyT01GejhXT3kwbUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUhIQlFzWHN4dHhhNTA1d1dnWUVVWTJtbi96cHVxSGtTaUJBNGxLMERYUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVmR3cGNMOEVxZmJIQnlkQlFLUHJ1MWo2TUNUMDJ1dmtBeEdMQi9sSDdFND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlcxajNXdHJKUFJudnNuM05ORWk1R0ZPblRWbWlOQnVieThrUmo4NTM5cFZmZXZEVWVUTVB4KzBqNFMweFVFbDZ4ZE1vQUFsNUhwOTJ4WWJCVVRIK2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAsImFkdlNlY3JldEtleSI6ImpHMEN3YUdmWCtZQVJLbzc3V2dSQ215aS9RTnE2VHdyZGY1WjlsWjdIL1k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjlYTFhOQkhIIiwibWUiOnsiaWQiOiI5MjMyNDk1MTgzNTE6MTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRTMgTcOOSyAtIE1EIHwgT0ZGSUNJQUwiLCJsaWQiOiIyNDEyNzAyNDA4OTA5NzU6MTBAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNTFNubGNRdkliR3hRWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI2c1VTc2ZRd253QkljOTg1T211QTA1T2c4bnVpaGhJZnVQc2NXb1VWMlZrPSIsImFjY291bnRTaWduYXR1cmUiOiJWOTdqUE9xSzdrZG1MU0NDYkJUZFBkUDVxWEh5NW9FbGJiWjVoTTUrMkI2ZjI2MEV3eExUTDBTV0FLM0NoSHJ5aW1DN1I4ZnpEQkM2RnA4b0FNWWtCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaGJGL0hCaWlmVEwwY3hveWtqMkFDV0YzeGU2UVBtcEExSGtYUSsyTWhBdmhyUnl3M0FxRDlkN3daNEJOSStiVnJ0dXkrQjRNZjA5MkRuVjRPdmJNamc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMyNDk1MTgzNTE6MTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZXJGRXJIME1KOEFTSFBmT1RwcmdOT1RvUEo3b29ZU0g3ajdIRnFGRmRsWiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2NDYzOTM1LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUF5eSJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY E3MIK_HACKER_MD- ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/p4yxcn.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "E3MIK_HACKER_MD-",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "E3MIK_HACKER_MD-",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍,🗿,💀,👍🏻,🥀,✨",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923249518351",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*E3MIK_HACKER_MD-*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ E3 E3MIK_HACKER_MD- ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/p4yxcn.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923249518351",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
