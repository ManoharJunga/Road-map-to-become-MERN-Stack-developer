# Getting Started with MongoDB and Mongoose for Backend Development

This guide will walk you through setting up a basic backend using MongoDB as the database and Mongoose as the Object Data Modeling (ODM) library.

1. First, create a new account on StackBlitz if you haven't already.
2. Create a new backend project and select Express.js as the framework.
3. In the project directory, create a new folder named `models`.
4. Inside the models folder, create three new files: `sub_todo.models.js`, `todo.models.js`, and `user.models.js`.
5. Open the terminal in StackBlitz and run the following command to install Mongoose:

```sh
npm install mongoose
```

Now, let's edit each file:

1. `sub_todo.models.js`:

```javascript
import mongoose from 'mongoose';

const subTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const Subtodo = mongoose.model('Subtodo', subTodoSchema);

```

2. `todo.models.js`

```javascript
import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subtodo',
      },
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);

```

3. `user.models.js`

```javascript
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);

```

The main purpose of modeling in a database-driven application like this one is to define the structure and behavior of the data that the application will work with. Here's why modeling is important:

1. Data Organization: Modeling helps organize data in a structured manner. It defines how different types of data are related to each other and how they should be stored in the database.

2. Data Integrity: By defining the schema for each type of data (e.g., users, todos), modeling ensures data integrity. It specifies what fields are required, their data types, and any constraints (such as uniqueness or default values), which helps maintain consistency and accuracy of data.

3. Data Validation: Models often include validation rules that ensure only valid data is stored in the database. For example, requiring certain fields to be present or ensuring that data meets specific criteria before it's saved.

4. Abstraction: Models abstract away the complexity of database interactions. Instead of directly dealing with low-level database operations, the application interacts with high-level model methods, making development easier and less error-prone.

5. Relationships: Models define relationships between different types of data. For example, in this case, the User model may have a relationship with the Todo model, indicating that a user can have multiple todos. Modeling helps manage these relationships effectively.

6. Business Logic: Models can encapsulate business logic related to data manipulation and retrieval. This ensures consistency in how data is handled across different parts of the application.

Overall, modeling serves as the foundation for building database-driven applications, providing structure, consistency, and organization to the data that the application manages.