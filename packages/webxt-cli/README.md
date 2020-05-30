# webxt-cli

[![owebxt-clif](https://img.shields.io/badge/webxt-cli-owebxt-clif-brightgreen.svg)](https://owebxt-clif.io)
[![Version](https://img.shields.io/npm/v/webxt-cli.svg)](https://npmjs.org/package/webxt-cli)
[![Downloads/week](https://img.shields.io/npm/dw/webxt-cli.svg)](https://npmjs.org/package/webxt-cli)
[![License](https://img.shields.io/npm/l/webxt-cli.svg)](https://github.com/linux-nerd/webxt-cli/blob/master/package.json)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
  <!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g webxt-cli
$ webxt-cli COMMAND
running command...
$ webxt-cli (-v|--version|version)
webxt-cli/1.0.0 darwin-x64 node-v10.13.0
$ webxt-cli --help [COMMAND]
USAGE
  $ webxt-cli COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`webxt-cli create [FILE]`](#webxt-cli-create-file)
- [`webxt-cli hello [FILE]`](#webxt-cli-hello-file)
- [`webxt-cli help [COMMAND]`](#webxt-cli-help-command)

## `webxt-cli create [FILE]`

describe the command here

```
USAGE
  $ webxt-cli create [FILE]

OPTIONS
  -f, --force
  -h, --help       show webxt-cli help
  -n, --name=name  name to print
```

_See code: [src/commands/create.ts](https://github.com/linux-nerd/webxt-cli/blob/v1.0.0/src/commands/create.ts)_

## `webxt-cli hello [FILE]`

describe the command here

```
USAGE
  $ webxt-cli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show webxt-cli help
  -n, --name=name  name to print

EXAMPLE
  $ webxt-cli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/linux-nerd/webxt-cli/blob/v1.0.0/src/commands/hello.ts)_

## `webxt-cli help [COMMAND]`

display help for webxt-cli

```
USAGE
  $ webxt-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in webxt-cli
```

_See code: [@owebxt-clif/plugin-help](https://github.com/owebxt-clif/plugin-help/blob/v3.0.1/src/commands/help.ts)_

<!-- commandsstop -->
