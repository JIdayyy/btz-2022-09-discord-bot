import { Command } from "./Command";
import { Congrats } from "./commands/Congrats";
import { Hello } from "./commands/Hello";
import { Joke } from "./commands/Joke";

export const Commands: Command[] = [Hello, Joke, Congrats];
