import { verify } from "jsonwebtoken";
import { HTTP_UNAUTHORIZED } from "../constant/http_status";

export default (req: any, res: any, next: any) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(HTTP_UNAUTHORIZED).json({ message: "Unauthorized" });
  }
  const token = authHeader.split(" ")[1];
  if (!token) return res.status(HTTP_UNAUTHORIZED).send();

  try {
    const decodedUser = verify(token, "SomeRandomText");
    req.user = decodedUser;
  } catch (error) {
    res.status(HTTP_UNAUTHORIZED).send();
  }
  return next();
};
