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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Lagos/Africa";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝗜𝗔𝗠𝗫𝗗𝗔-𝗧𝗵𝗲 𝗷𝗼𝗸𝗲𝗿" 


global.devs = "2348022159244" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348022159244";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348022159244";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_43_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDExMixcbiAgICAgICAgNTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDkzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTczLFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTksXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTUsXG4gICAgICAgIDU4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA0MixcbiAgICAgICAgNTcsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTksXG4gICAgICAgIDU5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDM5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDU2LFxuICAgICAgICAxMyxcbiAgICAgICAgNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY1LFxuICAgICAgICA0MixcbiAgICAgICAgOTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg3LFxuICAgICAgICA2MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyOSxcbiAgICAgICAgODEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDkxLFxuICAgICAgICAzOCxcbiAgICAgICAgODYsXG4gICAgICAgIDQwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY2LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAyLFxuICAgICAgICA0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzksXG4gICAgICAgIDM4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzksXG4gICAgICAgIDc1LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAwLFxuICAgICAgICA5LFxuICAgICAgICA5NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDc5LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDksXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDMzLFxuICAgICAgICA2MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTksXG4gICAgICAgIDg1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAzMyxcbiAgICAgICAgODAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NixcbiAgICAgICAgNzgsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkFkY2tCRDVNRGxUTEMyMWgxcnlXamRuanlVNnpMTE9aanhSTHYxbERydnM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTA2MDA2ODExNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTIxNzhDNEIzQzM0MzUxMDAzMEQ1MjI5MkE3RTNFOUZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMDk1MDA3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIl94enU5WFpWUmhDQW1IOG1mSWItSFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWQ3NDFlMmMtNDhhZS00MWRhLWFhMGEtNDRlZGZjOTJhODU2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0LFxuICAgICAgMTEzLFxuICAgICAgMTQzLFxuICAgICAgMTU5LFxuICAgICAgMTk4LFxuICAgICAgMjI5LFxuICAgICAgMjAyLFxuICAgICAgMTAxLFxuICAgICAgMjU1LFxuICAgICAgMjYsXG4gICAgICA4NSxcbiAgICAgIDIxMixcbiAgICAgIDcxLFxuICAgICAgMTE1LFxuICAgICAgMTU3LFxuICAgICAgMTk4LFxuICAgICAgOCxcbiAgICAgIDEwMCxcbiAgICAgIDg1LFxuICAgICAgMTk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc3LFxuICAgICAgOTIsXG4gICAgICAxLFxuICAgICAgMTk3LFxuICAgICAgMTA4LFxuICAgICAgMTY4LFxuICAgICAgMTUwLFxuICAgICAgNTUsXG4gICAgICAxNTgsXG4gICAgICAxNTYsXG4gICAgICAxOCxcbiAgICAgIDI5LFxuICAgICAgMTQwLFxuICAgICAgNzEsXG4gICAgICAxNjAsXG4gICAgICA0NixcbiAgICAgIDIxNixcbiAgICAgIDc1LFxuICAgICAgMTU2LFxuICAgICAgMjI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFSN1ZFNkdFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDYwMDY4MTE1OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwidmV0by5cIixcbiAgICBcImxpZFwiOiBcIjIxMzczOTI5OTE2NDIxMzoyOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJYllxYjBDRUpTcmxMVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImwrYWxpY3NOUzk4QUdLRVFodFAza1Zmc2NrNllUWlBvNGZuRnRIRnZzeUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMG1zQ25EcWUwYVVob3hhdmFvcGlGWGcwWkVISXVNR2RyN0JVaGhYQVhpMlVoK2lCcWV6dXFRUUVEYytyZU0wazFVUElDakRNbllKSmtNQlllY0syRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiM1loMDM1eGx4S2VTTlloNlV2NWFyQ1EyUGtlYlBhdjNEVjNrSC9HZExCUGdDc1RtRmV5cUdpdU56VS9BblJmb1o1VVh1NWZabEtKSDNJZVBsWU1BZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA2MDA2ODExNToyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMDk1MDAwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSmtsXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKa2wuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqaVJnSTR3L2UrS05YY1VmVTI2Vk50YXBEYkk4SCtkYWQzUnUvSGdZUHNrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY2NTQ4MDE5NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝗜𝗔𝗠𝗫𝗗𝗔-𝗧𝗵𝗲 𝗷𝗼𝗸𝗲𝗿』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "ᗰᗴᏞᎢᏆᑎᏀ ᑭ❣️ᏆᑎᎢ",
  packname: process.env.PACK_NAME || "𝗕𝗹𝘂𝗲-𝗣𝗿𝗶𝗻𝘁",
  botname : process.env.BOT_NAME  || "«𝐀𝐧𝐭𝐢𝐬𝐨𝐜𝐢𝐚𝐥 𝐌𝐃»",
  ownername:process.env.OWNER_NAME|| "~𝐂𝚫𝐃𝚰𝐋𝐋𝚫𝐂 𝐂𝐘𝐋𝚵𝚵 💊🖤",


  errorChat : process.env.ERROR_CHAT || "2348022159244",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "NEZUKO"  ).toUpperCase(),
 


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
