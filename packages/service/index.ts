import { getGoogle } from "localPackage";

export const handler = async () => {
  return {
    statusCode: 200,
    body: getGoogle(),
  };
};
