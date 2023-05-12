import express from 'express'
import { deleteUser, getAllUsers, getOneUser, newUser, updateUser } from '../controllers/UserController';

const router = express.Router();

router.post(`/`, newUser);
router.get(`/`, getAllUsers);
router.get(`/:id`, getOneUser);
router.put(`/:id`, updateUser);
router.delete(`/:id`, deleteUser);


export default router;