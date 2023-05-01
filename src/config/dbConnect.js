import mongoose from "mongoose";

//na nuvem
//mongoose.connect("mongodb+srv://fabianomatozinhos:87783350@apinode.51qduoy.mongodb.net/api-biblioteca-node");
//local
mongoose.connect("mongodb://127.0.0.1:27017/api-biblioteca-node");

let db = mongoose.connection;

export default db;