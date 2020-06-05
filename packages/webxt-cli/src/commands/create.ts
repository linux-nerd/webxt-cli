import { Command, flags } from "@oclif/command";
import * as inquirer from "inquirer";

import Init from "webxt-scripts/src/commands/init";

type Responses = {
  flavour: "JavaScript" | "TypeScript";
};
export default class Create extends Command {
  static description = "Scaffolds web extension workspace";

  static flags = {
    help: flags.help({ char: "H" }),
    "skip-install": flags.boolean({
      char: "S",
      description: "skip npm install"
    }),
    flavour: flags.string({ options: ["JavaScript", "TypeScript"] }),
    scaffolding: flags.string({
      options: ["Popup", "Content Script", "Popup and Content Script"]
    })
  };

  static args = [{ name: "destination" }];

  async run() {
    const { args } = this.parse(Create);
    let responses: Responses = await inquirer.prompt([
      {
        name: "flavour",
        message: "select a flavour",
        type: "list",
        choices: [{ name: "JavaScript" }, { name: "TypeScript" }]
      },
      {
        name: "scaffolding",
        message: "select a scaffolding type",
        type: "list",
        choices: [
          { name: "Popup" },
          { name: "Content Script" },
          { name: "Popup and Content Script" }
        ]
      }
    ]);

    try {
      await Init.run([args.destination]);
    } catch (e) {
      this.log(`Error: ${e}`);
    }
  }
}
