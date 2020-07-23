require('dotenv').config();

let PORT = process.env.PORT;
let DB_URI = process.env.DB_URI;
let HOST = process.env.HOST;

if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development') {
  DB_URI = process.env.DB_URI;
}

export { DB_URI, HOST, PORT };
