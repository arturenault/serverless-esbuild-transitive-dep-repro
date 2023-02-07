import { getGoogle } from "localPackage";
import { v4 } from "uuid";

export const handler = async () => {
  console.log(v4());
  return {
    statusCode: 200,
    body: getGoogle(),
  };
};
