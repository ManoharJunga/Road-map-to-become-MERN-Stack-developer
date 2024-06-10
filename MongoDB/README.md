# MongoDB

### BRIEF INTRODUCTION TO NOSQL


NoSQL is a non-relational database that uses key-value pairs to store and retrieve data. Unlike a relational database, which stores data in rows and columns.

### Non-relational database

NON RELATIONAL DATABASE is a collection of unstructured and semi structured items which do not store data n tabular form.

## what is mongoDB

MongoDB is a NoSQL (Not only SQL) database that stores large volumes of data in the form of documents. MongoDB removes the concept of "rows" of conventional and relational data models by introducing "documents." This offers the developers the flexibility to work with evolving data models.

- (DOCUMENT BASED) Represents Hierarchical relationship in a single record instead of multiple tables.
- (Relational data model) Highly-structured table organization with rigidly-defined data formats and record structures.
- (Document data model) Collection of complex documents with arbitrary. nested data formats and varying "record" format.

## why MONGODB is Used?

- Open-source database
- Easy to use: Robust, highly scalable and powerful way of storing data in comparison to traditional database models.
- Highly Flexible: Allows you to store and work on different data types in one document.
- Advanced Security
- Powerful Query Language
- Reliable Indexing
- Flexible Schema: design that allows you to meet the ever-changing conditions characteristic of Big Data applications.
- High Performance: MongoDB offers incredible features like on-demand scaling, real-time resources, etc. to guarantee high performance of the applications

## How does MongoDB Work?

MongoDB stores data objects in collections and documents instead of the tables and rows used in traditional relational databases. Collections comprise sets of documents, which are equivalent to tables in a relational database. Documents consist of key-value pairs, which are the basic unit of data in MongoDB.

## Applications of MongoDB

- Internet Of Things
- Mobile applications
- Real time analysis
- Personalization
- Catalog management
- Content management

India's Unique Identification project boasts the largest biometric database in the world. The Aadhar Project uses MongoDB to store the massive demographic and biometric data of over 1.5 billion Indians. Aadhar also uses MongoDB to store images, QR Code details etc

## Companies using MongoDB
- Google
- facebook
- BOSCH
- TOYOTA
- CISCO
- Adobe
- ebay
etc....

## SQL VS NOSQL

STRUCTURED QUERY LANGUAGE IS USED TO COMMUNICATE WITH DATABASE. ALLOWS THE USER TO ACCESS AND MANIPULATE DATA STORED IN THE DATABASE. it is used for 
- INSERT
- UPDATE
- MODIFY
- DELETE

## RELATIONAL DATABASE SYSTEMS

RELATIONAL DATABASE IS THE USED TO ORGANIZE STRUCTURED DATA INTO TABLES IN THE FORM OF ROWS AND COLUMNS

## POPULAR SQL DATABASES

- mysql
- oracel database
- SQL Server (Microsoft SQL Server)
- SQLite

## WHAT IS NOSQL

NosQL is a non-relational database that uses key-value pairs to store and retrieve data. Unlike a relational database, which stores data in rows and columns

## NON RELATIONAL DATABASE

NON RELATIONAL DATABASE IS A COLLECTION OF UNSTRUTURED AND SEMI STRUCTURED ITEMS WHICH DO NOT STORE DATA IN TABULAR FORM

## WHY WE USE NOSQL?

- HIERARCHICAL STORAGE STRUCTURE INSTEAD OFA TABLE-LIKE STRUCTURE.
- CONSTANT ADDITION OF NEW FEATURES AND FUNCTIONS
- RELATIONSHIP BETWEEN STORED DATA IS NOT IMPORTANT

## POPULAR NOSQL DATABASES

- mongoDB
- apaceh HBASE
- cassandra
- redis
- neo4j

## Types of NOSQL DATABASES

- Document oriented
- Key value pair
- Column based
- Graph Oriented

<img src="./NOSQL_WORK.png" alt="No SQL">

## HOW NOSQL WORKS?

```json
{
    "_id": "5cf0029caff5056591b0ce7d",
    "firstname": "Jane",
    "lastname": "Wu",
    "address": {
    "street": "1 Circle Rd",
    "city": "Los Angeles",
    "state": "CA",
    "zip": "90404"
    },
    "hobbies": ["surfing", "coding"]
}
```

## Difference between Sql and Nosql

| **Characteristics** | **SQL (MySQL)** | **NoSQL** |
| --- | --- | --- |
| **Data Structure** | Structured, tables with fixed schema | Unstructured, flexible schema |
| **Data Storage** | Tables with rows and columns | Key-value, documents, graphs, or column families |
| **Scalability** | Vertical scaling, limited scalability | Horizontal scaling, high scalability |
| **Performance** | Good for complex queries, slower for large datasets | Good for large datasets, faster for simple queries |
| **Querying** | Uses SQL, supports complex queries | Uses various query languages, supports simple queries |
| **Flexibility** | Rigid schema, less flexible | Flexible schema, highly adaptable |
| **Data Modeling** | Supports complex relationships, ACID properties | Supports flexible data models, eventual consistency |
| **Use Cases** | Suitable for structured data, complex queries | Suitable for unstructured data, big data, real-time web apps |


## ADVANTAGES & DISADVANTAGES OF USING NOSQL

### ADVANTAGES

- HIGH PERFORMANCE AND SCALABILITY
- AVAILABILITY AND FLEXIBILITY
- OPEN SOURCE AND SCHEMA LESS

### DISADVANCES

- LACK OF STANDARDIZATION
- CONSISTENCY ISSUES
- LIMITED QUERY CAPABILITIES
