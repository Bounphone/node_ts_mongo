import User, { IUser } from '../models/UserModel'
import { Request, Response } from 'express';

export const newUser = async (req: Request, res: Response) => {
    try {
        const user: IUser = await User.create(req.body);
        res.status(201).json(user)
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: `Internal Server Error` });
    }
}

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const user: IUser[] = await User.find();
        res.status(200).json(user)
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: `Internal Server Error` });
    }
}

export const getOneUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const user: IUser | null = await User.findById(id).exec();
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: `Internal Server Error` });
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const user: IUser | null = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(203).json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: `Internal Server Error` });
    }
}

export const deleteUser = async (req: Request, res: Response) => {

    try {
        const user: IUser | null = await User.findByIdAndDelete(req.params.id).exec();
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.status(204).send(`User deleted successfully`);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: `Internal Server Error` });
    }
}

