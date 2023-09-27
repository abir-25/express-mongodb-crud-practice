const { getDb, getCollection } = require("./mongo");
const { ObjectId } = require("mongodb");

const getById = async (id) => {
  const result = await getCollection().Student.findOne({
    _id: new ObjectId(id),
  });
  return result;
};

const insertStudent = async (document) => {
  const result = await getCollection().Student.insertOne(document);
  return result;
};

const searchAllStudents = async () => {
  const result = await getCollection().Student.find({}).toArray();
  return result;
};

const searchDetails = async (searchObj) => {
  const result = await getCollection().Student.findOne(searchObj);
  return result;
};

module.exports = {
  getById,
  insertStudent,
  searchAllStudents,
  searchDetails,
};
