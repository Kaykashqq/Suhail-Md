const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_00_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTksXG4gICAgICAgIDYwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM5LFxuICAgICAgICA2NixcbiAgICAgICAgNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEyLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDIwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjA3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAzMyxcbiAgICAgICAgODgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjYsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTAxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDk0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTczLFxuICAgICAgICA3NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI2LFxuICAgICAgICA4MixcbiAgICAgICAgNTYsXG4gICAgICAgIDg4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDg3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDYzLFxuICAgICAgICA3NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgODIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDU4LFxuICAgICAgICA2NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzLFxuICAgICAgICAzNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA2LFxuICAgICAgICA0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk2LFxuICAgICAgICA4LFxuICAgICAgICAxODEsXG4gICAgICAgIDk3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDkxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDExLFxuICAgICAgICA3MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDkyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjdzSUkwZkpVL2FCZ2Z3UTZyY0NOVnZiWG9RTksxckVGYTljSU4zckxYdE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImxzLUp6Sll3UlhpTm9MVW9wVk9MMlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGU3OTViZjAtYmEwMC00ZGZjLWFkYjAtM2Y3YjYwN2VlZWZhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg5LFxuICAgICAgNTUsXG4gICAgICAxOTgsXG4gICAgICAxNyxcbiAgICAgIDE5MixcbiAgICAgIDI0MCxcbiAgICAgIDc1LFxuICAgICAgMjQ2LFxuICAgICAgODEsXG4gICAgICA0NCxcbiAgICAgIDUzLFxuICAgICAgMjM5LFxuICAgICAgMjE3LFxuICAgICAgMTQxLFxuICAgICAgMTI1LFxuICAgICAgMTg2LFxuICAgICAgOTIsXG4gICAgICAyMzMsXG4gICAgICAxNzAsXG4gICAgICAxNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzMsXG4gICAgICAyMzAsXG4gICAgICAxNjcsXG4gICAgICAyMjgsXG4gICAgICAyMTgsXG4gICAgICAyMTAsXG4gICAgICAyNSxcbiAgICAgIDI0OCxcbiAgICAgIDE4NSxcbiAgICAgIDI3LFxuICAgICAgMjM5LFxuICAgICAgMjAsXG4gICAgICAyNDAsXG4gICAgICAyMzQsXG4gICAgICA2NSxcbiAgICAgIDE2LFxuICAgICAgMzIsXG4gICAgICA3MixcbiAgICAgIDE1MCxcbiAgICAgIDgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5CTkdMTlJFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNzczNjI5NzI5Njo0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzc0NzgzMzc2NTQ4MDM6NDVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGp3eTVBQ0VJNldpN1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWc01XV1I4VDZLZExEa1QzZkora2UyNEtNNGhzYmhXYldxVk4wZk1jbUZjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjZRZUZoUE5GVnlrQU14NHNpaVRCZjh3NVJvY3BiQmJqUFk1Qkhlb2lFQnNYYWREc3NqcVNtUVpUa202STFGc3E2VEMwMkFKUVRiUGZhQzBEZDFTU0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk8zaDhvMUFWUmdSQUhqc3dVQ200bE13aUdhTklidmdpa3lYb2szRmJ1OUs0bXZwUkF1K0VzMEZMRDVBWWwra0FtaG5zQVowKzhmb2JvdmMvTTkwT2hRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI3NzM2Mjk3Mjk2OjQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxOTQ0ODUwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSi9EXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKL0QuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
