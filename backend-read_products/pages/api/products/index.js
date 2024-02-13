import Product from "../../../db/models/Product";
import dbConnect from "../../../db/connect";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const products = await Product.find();
      console.log(products); // this console.log is running on the server, we can't see it in the browser but in the terminal
      response.status(200).json(products); // this passes it as a response to the browser
    } catch (error) {
      console.log(error);
    }
  }
}
