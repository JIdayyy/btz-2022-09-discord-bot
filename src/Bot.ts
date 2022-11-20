import { Client, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/InteractionCreate";

config();

const TOKEN = process.env.DISCORD_TOKEN;

console.log("Bot is starting...");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

ready(client);
interactionCreate(client);

client.login(TOKEN);
