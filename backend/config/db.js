import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://sohelshahid09_db_user:NP6dJCioTt8Kvk8k@cluster0.qibo3bg.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
