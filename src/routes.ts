import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(req: Request, res: Response) {
  const user = createUser({
    email: "luciano@email.com",
    password: "123456",
    techs: [
      "NodeJs",
      "React",
      "ReactNative",
      {
        title: "JavaScript",
        experience: 100,
      },
    ],
  });

  return res.json({ message: "Hello GoStack" });
}
