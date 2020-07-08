## Database setup

In this setup, mongo db database will use, and we need mongoose package to connect our application with database. Install mongoose as:
```bash
npm install mongoose --save
```

## Mongodb server
To run your application, your machine shoud have installed mongodb server. For instance, I am using ubuntu 20.04 while writing this article, where you can install mongodb server as:

```bash
sudo apt install mongodb-server-core
```

After mongodb installation, create a folder on root of your project and run mongodb server as
```bash
mongod --dbpath=database
```
Run your project in another terminal, as

## Run mongodb in background
```bash
mongod --dbpath=database --fork --syslog
```