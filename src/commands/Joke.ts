import { CommandInteraction, Client } from "discord.js";
import { Command } from "../Command";
import axios from "axios";

export const Joke: Command = {
  name: "joke",
  description: "Returns a geek joke",

  run: async (client: Client, interaction: CommandInteraction) => {
    const content = await axios.get(
      "https://geek-jokes.sameerkumar.website/api"
    );

    await interaction.followUp({
      ephemeral: true,
      content: content.data,
    });
  },
};
