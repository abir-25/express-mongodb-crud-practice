const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

let _db = null;
const connect = async () => {
  const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.hpx8ftg.mongodb.net/`;
  const client = new MongoClient(uri, {
    serverApi: ServerApiVersion.v1,
  });
  await client.connect();
  _db = client.db("schoolDb");
};

const getDb = async () => {
  if (!_db) {
    await connect();
  }
  return _db;
};

const getCollection = () => {
  return {
    Student: _db.collection("students"),
  };
};

module.exports = {
  connect,
  getDb,
  getCollection,
};
