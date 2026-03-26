import { Request, Response } from "express";
import { AppDataSource } from "../dbconfig/dbConfig";
import { User } from "../entities/User";

const userRepo = AppDataSource.getRepository(User);

// 👉 CREATE
export const createUser = async (req: Request, res: Response) => {
  const user = userRepo.create(req.body);
  await userRepo.save(user);

  res.json({
    message: "User Created ✅",
    data: user,
  });
};

// 👉 GET ALL
export const getUsers = async (req: Request, res: Response) => {
  const users = await userRepo.find();
  res.json(users);
};

// 👉 UPDATE
export const updateUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  const user = await userRepo.findOneBy({ id });

  if (!user) {
    return res.json({ message: "User not found ❌" });
  }

  userRepo.merge(user, req.body);
  await userRepo.save(user);

  res.json({
    message: "User Updated ✅",
    data: user,
  });
};

// 👉 DELETE
export const deleteUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  const result = await userRepo.delete(id);

  if (result.affected === 0) {
    return res.json({ message: "User not found ❌" });
  }

  res.json({ message: "User Deleted ❌" });
};