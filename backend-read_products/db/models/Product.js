import mongoose from "mongoose";

const { Schema, models, model } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

// if mongoose.models.Joke exists it would be created anew
// this function creates the model => joke is name of model, jokeSchema defines how it should look like

export default Product;
