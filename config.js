const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "218914807168"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '218914807168' 
global.devs = '218926265138';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUZGWTZNUnJaL0dyVjRwWVhNYTh4OGFwSnFUcVRyRzhRZnJJU1NhcHFFYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUFvYUhuNFMwUU1Za2liTVhyTVI4aE0yTGtzd3ZOOEZyMDFkYnZLcXpFdz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTkVOR3RhdUFHc2k4cFJrQi9jTUZ6d0FMVTFVczNYcDZiaGE2bFBwQW5JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqTG8yV1FKbm5YRklGV0wyYXFIZngzcjdoVlB3UjdkcDZJK0ZtYXY1WVZnPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVLZ05zT2pFZTRWMWJJdVVibFlLRmtZRTRPMXJidnErVjZiM2ZSejB2RWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJwY0pyeDFQU0NuNGNGVnBhZnRmS2JmWTNkWUFoSnorbGdrSENBWUdYRVU9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUbU9GazZPdnVyVHM5SkYxaFZ0NE1VUUxqdFdCdlI0akFJdnhaazgxT25XTzV1S3Jxd3YwWWVHTnBJM09jN3g0dU53cXlpMXVlTVhsa0JYUmZBYTVCQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjExOSwiYWR2U2VjcmV0S2V5IjoidG81S3g2VUpFOGFXNGFuMkZwME9peTRvdUlzajdHKytyUWJvTnZCcDl3TT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiei1zT04tNWZUU0M0dDFhOTVDbVQ5ZyIsInBob25lSWQiOiI0OTg0ZjhkYS05OTQwLTQzYjYtYWNmNC1iYjBjNzRjYjQzNDQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZzFpcWhUTGNPNjVGOCtibWNSVnp0OGFyNDdrPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5cDhvRWpxT0FzSmk4QUJacXBjM2lhOHVBQTA9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNKbmhyTmtCRUpyNWtxc0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjEvaXczZFhMNEM0LzZxTk5YZTYyc0RRR05wSVhZRmF4Tlh1NmNzSUJwWEU9IiwiYWNjb3VudFNpZ25hdHVyZSI6InpxZXludjVkWDJpWXhjRllxVUp5WUtxUnZNS1FXSGJDRHM0Y3ZaU3A4ZTk2WU80NjVaK2pycTdDZW5tNzVjd2pleUJMeGY1Q0N5SUFJL29qc2RiNkFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJvS2E3c0dCTzJLMjd5bXcvVTRVL1djdUNaZnNWVXZzajZRRU9oSUZzTDFTL2NWRHV6UDUxUSs1a3JxSUYxRnFLVDdNL2daM2tiYjFrV3Bxc1pYMUJEUT09In0sIm1lIjp7ImlkIjoiMjE4OTE0ODA3MTY4OjE5QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIxODkxNDgwNzE2ODoxOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkZjRzTjNWeStBdVArcWpUVjN1dHJBMEJqYVNGMkJXc1RWN3VuTENBYVZ4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzAxMTAwNzAyfQ==",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'RUDY',
  packname:  process.env.PACK_NAME || 'GIN',
   
  botname:   process.env.BOT_NAME === undefined ? "rudy-chan" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'rudy' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
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
