import { Command, flags } from "@oclif/command";
import {
  readdirSync,
  statSync,
  readFileSync,
  writeFileSync,
  mkdirSync
} from "fs";
import { join } from "path";
import node_modules from "node_modules-path";

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

  createDirectoryContents(templatePath: string, projectName: string) {
    const CURR_DIR = process.cwd();
    const SKIP_FILES = ["node_modules", ".template.json"];
    // read all files/folders (1 level) from template folder
    const filesToCreate = readdirSync(templatePath);
    // loop each file/folder
    filesToCreate.forEach(file => {
      const origFilePath = join(templatePath, file);

      // get stats about the current file
      const stats = statSync(origFilePath);

      // skip files that should not be copied
      if (SKIP_FILES.indexOf(file) > -1) return;

      if (stats.isFile()) {
        // read file content and transform it using template engine
        let contents = readFileSync(origFilePath, "utf8");
        // write file to destination folder
        const writePath = join(CURR_DIR, projectName, file);
        writeFileSync(writePath, contents, "utf8");
      } else if (stats.isDirectory()) {
        // create folder in destination folder
        mkdirSync(join(CURR_DIR, projectName, file));
        // copy files/folder inside current folder recursively
        this.createDirectoryContents(
          join(templatePath, file),
          join(projectName, file)
        );
      }
    });
  }

  async run() {
    const { argv } = this.parse(Init);
    mkdirSync(argv[0]);
    this.log(`Directory ${argv[0]} created!`);
    const pathToApp = join(process.cwd(), argv[0]);
    this.log(`Creating scaffolding inside ${pathToApp}`);
    this.createDirectoryContents(
      join(
        node_modules("webxt-template-popup"),
        "webxt-template-popup",
        "template"
      ),
      argv[0]
    );
  }
}
