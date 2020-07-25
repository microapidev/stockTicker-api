require('dotenv').config();

let PORT = process.env.PORT;
let DB_URI = process.env.DB_URI;
let HOST = process.env.HOST;
let ADMIN_SECRET = process.env.ADMIN_SECRET;

if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'dev') {
  DB_URI = process.env.DB_URI;
}

export { ADMIN_SECRET, DB_URI, HOST, PORT };
