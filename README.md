# Glados End-to-End Tests

This repository contains a basic Express application that uses the [Glados][8] library. It also contains automated end-to-end tests that verify the correct functioning of the library in a production-type environment (i.e. working with an actual Auth0 application). It was forked from the [Express App Prototype][9] library.

[8]: https://github.com/philgs/glados
[9]: https://github.com/philgs/express-app-prototype

## Usage

**IMPORTANT!** Be sure that you have satisfied the requirements, as detailed below, before running _any_ commands in this section.

1. Start the Express server _and_ the Selenium server: `npm start`
1. Run the tests: `npm test`

**Please to Note:**

+ The `npm start` command will start Selenium in a "silent" mode, with all output suppressed.
+ If you need to see the Selenium output (e.g. for debugging), you will need to start the servers separately.
+ Use `npm run express` and `npm run selenium:start` in separate terminal.
+ Use  `npm run express && npm run selenium:start` in a single terminal. This will give you interleaved output.
+ More advanced configurations are possible with the [concurrently][10] module (which is already used for the "start" command).

[10]: https://www.npmjs.com/package/concurrently

## Requirements

You must be running a Linux operating system. This test suite has only been tested on Ubuntu 16.04.3 LTS. 

You will also need Node.js, **npm**, and a Java 8 runtime engine. The official Oracle Java is highly recommended!

## Installation

There are a couple of steps beyond the typical `npm install`.

### Firefox

You will need to install Firefox v57 or newer. On Ubuntu, this is simply `sudo apt install firefox`.

### Selenium

After doing `npm install`, run `npm run selenium:install`.

### Docker

The Express app is configured to use a Couchbase 5.x server running in a Docker container on the localhost. To install and configure Docker:

1. Follow [the instructions in Docker's documentation][3].
1. Add the local user to the [`docker` user group][4].

[3]: https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu
[4]: https://techoverflow.net/2017/03/01/solving-docker-permission-denied-while-trying-to-connect-to-the-docker-daemon-socket

### Couchbase

The Express app is configured to use a Couchbase 5.x server running in a Docker container on the localhost. To get started with Couchbase:

1. Run the `scripts/couchbase.sh` script, which will download, install, and start the most recent, stable release of Couchbase. This script installs Couchbase into a container named "db," and this name is assumed in all of the following scripts and commands.
1. Connect to the [Couchbase web console][5] and configure the cluster. For more information, see "[Running Couchbase Server using Docker][6]."

[5]: http://calypso.sword:8091
[6]: https://developer.couchbase.com/documentation/server/5.0/install/getting-started-docker.html

After Couchbase is installed, you can start and stop the container with the following `npm` commands:

- `npm run couchbase:start`
- `npm run couchbase:stop`

You can access an interactive console on the Docker container with the following:

- `docker exec -it db sh`

### Session Secret

I use the following command to generate a session "secret" for signing the session cookies ([source][7]): `openssl rand -base64 -out config\session.key 1024`

[7]: https://raymii.org/s/tutorials/Encrypt_and_decrypt_files_to_public_keys_via_the_OpenSSL_Command_Line.html

## License

The content of this repository is licensed under the [3-Clause BSD license][1]. Please see the [enclosed license file][2] for specific terms.

[1]: https://opensource.org/licenses/BSD-3-Clause
[2]: LICENSE.md
