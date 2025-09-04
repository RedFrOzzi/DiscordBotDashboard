import { atom } from "jotai";
import User from "../models/User";

export const selectedUser = atom<User | null>(null);
