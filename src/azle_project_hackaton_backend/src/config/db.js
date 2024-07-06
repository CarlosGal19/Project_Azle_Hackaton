import mongoose from "mongoose";

export default function connectDB() {
    const url = "mongodb://localhost:27017/aquanova";

    try {
      mongoose.connect(url);
    } catch (e) {
      console.error(e.message);
      process.exit(1);
    }
    const dbConnection = mongoose.connection;
    dbConnection.once("open", (_) => {
      console.log(`Database connected: ${url}`);
    });

    dbConnection.on("error", (err) => {
      console.error(`connection error: ${err}`);
    });
    return;
}
