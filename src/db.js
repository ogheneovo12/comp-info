import path from 'path';
import Datastore from 'nestdb';
const DATA_PATH = path.join(process.cwd(), './data/companies.db');
const db = new Datastore({ filename: DATA_PATH });

db.load(function (err) {
  // Callback is optional
  if (err) {
    console.error('Failed To Load Db', err);
  } else {
    console.log('DB CONNECTED SUCCESSFULLY');
  }
});

export default db;
