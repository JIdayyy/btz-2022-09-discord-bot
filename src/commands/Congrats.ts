import {
  CommandInteraction,
  Client,
  ApplicationCommandOptionType,
} from "discord.js";
import { Command } from "../Command";

export const Congrats: Command = {
  name: "congratulations",
  description: "Returns a congratulation",
  options: [
    {
      type: ApplicationCommandOptionType.String,
      name: "username",
      description: "Username to congrats",
      required: false,
    },
  ],
  run: async (client: Client, interaction: CommandInteraction) => {
    const userInput = interaction.options.get("username")?.value;

    const content = `Patrick the robot says: Congrats ${userInput} 🥳`;

    await interaction.followUp({
      ephemeral: true,
      content,
    });
  },
};
