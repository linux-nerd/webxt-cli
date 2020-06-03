import { Command, flags } from "@oclif/command";
import { copyFileSync } from "fs";
import { join } from "path";

export default class Init extends Command {
  static description = "describe the command here";

  static flags = {
    help: flags.help({ char: "h" }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: "n", description: "name to print" }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: "f" })
  };

  static args = [{ name: "pathToApp" }];

  async run() {
    const { argv } = this.parse(Init);
    copyFileSync(
      require.resolve("template-popup/template/manifest.json"),
      join(argv[0], "manifest.json")
    );
  }
}
