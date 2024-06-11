# MongoDB Basics
================

## 1. Connecting to MongoDB

To connect to a MongoDB server using the MongoDB Shell, follow these steps:

### Open Command Prompt or Terminal

Launch Command Prompt (Windows) or Terminal (macOS/Linux).

### Start MongoDB Shell

Type the following command and press Enter:
```bash
mongo
```
This command will start the MongoDB Shell and attempt to connect to the default MongoDB server running on your local machine.

### Verify Connection

Once connected, you'll see a prompt indicating that you're in the MongoDB Shell.

## 2. Listing Databases

To list all databases available on the MongoDB server, use the following command:
```bash
show dbs
```

This command will display a list of databases along with their sizes.

## 3. Using a Database

To switch to a specific database and start operating within it, use the `use` command followed by the name of the database. For example, to switch to a database named `sample_database`, use:

```bash
use sample_database
```

## 4. Listing Collections

To list all collections within the current database, use the following command:

```bash
show collections
```
This command will display a list of collections available in the currently selected database.

## 5. Inserting Documents

To insert a document into a collection, you can use the `insertOne()` or `insertMany()` methods. For example, to insert a single document into a collection named `users`, use:


```bash
db.users.insertOne({ name: "John", age: 30 })
```

## 6. Querying Documents

To query documents from a collection, use the `find()` method. For example, to retrieve all documents from the `users` collection, use:

```bash
db.users.find()
```

This command will return all documents in the `users` collection.

## 7. Updating Documents

To update documents in a collection, you can use the `updateOne()` or `updateMany()` methods. For example, to update a document in the `users` collection where the name is "John", you can use:

```bash
db.users.updateOne({ name: "John" }, { $set: { age: 35 } })
```
## 8. Deleting Documents

To delete documents from a collection, you can use the `deleteOne()` or `deleteMany()` methods. For example, to delete a document from the `users` collection where the name is "John", you can use:


```bash
db.users.deleteOne({ name: "John" })
```