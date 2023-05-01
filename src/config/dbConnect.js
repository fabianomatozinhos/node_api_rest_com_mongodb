import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/api-biblioteca-node");
let db = mongoose.connection;

export default db;