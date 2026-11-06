import mongoose from "mongoose";


const HewanSchema = new mongoose.Schema(
  {
    hewan: {
        name:String,
        species:String,
        ageMonth:Number,
        vaccine:String
    }
},{
    timestamps: true,
  },
);

const HewanModel = mongoose.model("hewan", HewanSchema);
export default HewanModel;