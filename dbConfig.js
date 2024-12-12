const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

export const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.6lzdb.mongodb.net/natours?retryWrites=true&w=majority&appName=Cluster0`;
