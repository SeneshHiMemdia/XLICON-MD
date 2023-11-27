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
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU5DUzd1cHJaR3BGejFsUlB3anpaa0hObHRhY1VjL2FhWVUzRVZ1TGdtND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVTFjSnBHN0ozYTB3Z1dQUHc0Ym42em8wc0tJWUhXM1k1Z2pGcW5jQXczdz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTWg0eG9JclJSelNMWjBUNnVvN0NXdmsrS0tINWVVRFdVSmFmbWJLcGtNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFRmZLRmM4QzFWYkRVZi96MHJ5Y09HRktSMUFsbzh1OVNReUhKajhkbXdnPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNOUmlNVWd1MnN2bWR2QUFJMGV5OTRNWG1UVFdadHduV0VqRWxhL3pybFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhaYk9yTFBVUHAvZkNzbmIwNXNhak1FMWREOUNjekxtWjhLNGxKNmtKbmM9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrc2Z4TUNQUy9pQTBBdUlXKy9tMk5NY1E0UVVwVGJpdk9IOFpLbS9YVXpnZWtxVi84d2tGU3I2K0hkUExHRDBQbVJXQjQrekVsamFoNzJPRVZwbkhDdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIyOSwiYWR2U2VjcmV0S2V5IjoiRUhvRGZlSjRlWmppc0hmL1ZpK1g0Q1dpWjlxWFkwMVFCdWoyUEkyUExBWT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiOFUtS1Q4WUtRU1dVb1gtakl0VVFYUSIsInBob25lSWQiOiI5OWNlZWY5Ni0wMWQ1LTQyMTYtOTQwNC0xZTk0M2Q2ODJlZjkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUVrV1QxeFJvTVg3aXlHSjdRS1pIWW1PU1VjPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyekswMytMT25UYi9SNk5HcXFtS3J6UXkrSzg9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNKZmhyTmtCRUovc2txc0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjEvaXczZFhMNEM0LzZxTk5YZTYyc0RRR05wSVhZRmF4Tlh1NmNzSUJwWEU9IiwiYWNjb3VudFNpZ25hdHVyZSI6Imk0clR2ZTIwWHNqL1ZWUGZicjhLY0pyRm05bVhoVUxxaWFRWG03NDRHSm9RbkNZWTBaNERvUzd1bUx0OWtTditZTkZ1UFlEZ3VydFdMMVpUbEs3V0RnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJwbWRBUnplbmtURVh4YzZrR1RQYTZ4ZEZtbTljaUlHZjIxSnFNQVAzOWgvZDFUbDdvQ3BqNkNIc1kvWDg2WFp6b3hxbXgzSlRiVjE1WnpLZkJ3UnRDQT09In0sIm1lIjp7ImlkIjoiMjE4OTE0ODA3MTY4OjE4QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIxODkxNDgwNzE2ODoxOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkZjRzTjNWeStBdVArcWpUVjN1dHJBMEJqYVNGMkJXc1RWN3VuTENBYVZ4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzAxMDk5MDQzfQ==",  //PUT Session Id Here, 
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
