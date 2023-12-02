const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94771141157"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Colombo'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '94771141157' 
global.devs = '94771141157';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid01vWlF3UE1kV3lUWG1vOXBzVUpaaVE4b1plQ0NUWlduVnlIa3FGM3ludz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWkw0NFl2OHdDaDE4T0FtWTMxcktBMk1OZ1BIR1QyQkdEZkZybDE0QVBsaz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLQVpVMEoyeHJrY09SakhKV0dyZUs5VDlDcEdMZlR0VTdKZy9PaTlyL0VvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlUVNXNC9jTUFYWHJGSE1maitrSVh5cnNaUllPR1VwUk1nSGFDVDJPeEJvPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFCTWNuQ01HWVlReWJlZXh5bUgzTUxrK2t5ZXUrN3BFaUJKQS9ETWxwbmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZIQkJEYkU2TENWRU92cXdFRzUyWFBHdGNOZHd6ZHdrelNFRDhvamg1akk9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1YklBZnlDTk1pY3NickNLT3VtWEpGKzJLbnFUSnJ6WGI5bCsrY2owUzhXbWtMQmJKVjNQQkhZUml6TXExQkNFWGZKVkFLVHo5WXlFZS8rTjZMUklEZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE5NiwiYWR2U2VjcmV0S2V5IjoiUnU3T1VJMm9VSVp1VHpZM3NROVBuY0VRcFVFa21seVBHdk1temVjdnZUOD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiRy1sejJrb1ZSQlNRTFNleEpEOWdmUSIsInBob25lSWQiOiI3MjcxY2ViNy1jZTYwLTQxZGQtODQ1My1mZGYwOWY0NDljYzkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYXpMR3krSkFmKzNxMTd6dHA4R0pwS2FFN05zPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYZXZhWG1ONEpoSCt4c3NxTklhbURxY1d5NTA9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNLcmpoUDRCRUlyVXA2c0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkZjZDhQWGlZOVFzajdnM1BSRTZubG5rYndhS0dXRVdqU004alpINUpCekk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjJmYk1jZEhDM3pIZ09nWXZKSnVKMG5iWFdpUXAwS1lxU3RIZDluZFNTQzNMZ3dxaEZrTWU1QS9wMmNIcU1Vais1Yi93S3JaMG1XWUVKN0plamZ4aUN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ1bHZNNzlVZnFianRSWXJLS0tReFNSRWlvSlNZeEU4ZG51MmpoNllCVjBqUXhucWFzaEVnWHZRUjhSUXZZa2IwZUxDcHBwY3lpUFZWa2xVU1hUZmRCUT09In0sIm1lIjp7ImlkIjoiOTQ3NzExNDExNTc6MkBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3MTE0MTE1NzoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJYSGZEMTRtUFVMSSs0TnowUk9wNVo1RzhHaWhsaEZvMGpQSTJSK1NRY3kifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDE0NDAwMTJ9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'SENESH',
  packname:  process.env.PACK_NAME || 'MR.SENESH',
   
  botname:   process.env.BOT_NAME === undefined ? "MR.SENESH" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'SENESH' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'true' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'HI IM ALIVE NOW' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
