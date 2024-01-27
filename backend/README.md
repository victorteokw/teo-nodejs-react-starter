Backend Starter
===============

## Installation

```sh
npm i
```

## Startup

Use `npx teo serve` command to start the backend server. If you saw the following output, it's successful.

```
[2024-01-24 22:39:27] sqlite connector connected for `main` at "sqlite:./db.sqlite"
[2024-01-24 22:39:27] Teo 0.1.8 (Node.js v21.5.0, CLI)
[2024-01-24 22:39:27] listening on port 5800
```

## Shut down

Press Ctrl+C to stop the server.



## Update SDK for clients

Use the command `npx teo generate client` to update request SDK in frontend starter.
You may need to update frontend code manually if data changes.

```sh
npx teo generate client
```
