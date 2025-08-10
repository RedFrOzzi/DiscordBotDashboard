import { atom } from "jotai";
import User from "../models/User";

export const usersData = atom<User[]>([]);
