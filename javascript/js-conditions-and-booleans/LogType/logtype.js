//     "not a number!" => I didn't get how to include that ...

let data = [5, 3, 2];

const typeOfData = typeof data;
if (typeOfData !== "number") {
  console.log("not a number!");
}

// for this Array-Thing I consulted best friend chat gpt

if (Array.isArray(data)) {
  console.log("Array!");
} else {
  const typeOfData = typeof data;
  switch (typeOfData) {
    case "number":
      console.log("number!");
      break;
    case "undefined":
      console.log("undefined!");
      break;
    case "null":
      console.log("null!");
      break;
    case "string":
      console.log("string!");
      break;
    case "boolean":
      console.log("boolean!");
      break;
    case "bigint":
      console.log("bigint!");
      break;
    case "function":
      console.log("function!");
      break;
    case "object":
      console.log("object!");
      break;
    default:
      console.log("I have no idea!");
      break;
  }
}
