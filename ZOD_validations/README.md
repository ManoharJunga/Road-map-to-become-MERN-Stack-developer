# ZOD VALIDATIONS

Zod is a schema validation library that allows you to define the structure and validation rules for your data. In the context of Next.js, you can use Zod to validate the data submitted through forms or received in API requests.

Here's an example of a Zod schema for a simple user object:

```javascript
import { object, string, number } from "zod";

const userSchema = object({
  name: string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }).min(3, "Name must be at least 3 characters"),

  age: number({
    required_error: "Age is required",
    invalid_type_error: "Age must be a number",
  }).int().positive().gte(18, "Age must be greater than or equal to 18"),

  email: string({
    required_error: "Email is required",
    invalid_type_error: "Email must be a string",
  }).email("Invalid email format"),
});
```

In this example, the `userSchema` defines the following validation rules:

- `name`: A required string field with a minimum length of 3 characters.
- `age`: A required number field that must be a positive integer greater than or equal to 18.
- `email`: A required string field that must follow a valid email format.

To use this schema for form validation in Next.js, you can integrate it with Formik, a popular form library for React. Here's an example of how to use Zod and Formik together in a Next.js application:

1. Install the necessary dependencies:

```bash
npm install formik zod zod-formik-adapter
```

2. Create a custom Formik adapter for Zod:

```javascript
// zodFormikAdapter.ts
import { FormikValues } from "formik";
import { AnyZodObject } from "zod";

export const toFormikValidationSchema = <T extends AnyZodObject>(schema: T) => {
  return (values: FormikValues) => {
    try {
      schema.parse(values);
      return {};
    } catch (error: any) {
      if (error.issues) {
        return error.issues.reduce((errors, issue) => {
          return {
            ...errors,
            [issue.path[0]]: issue.message,
          };
        }, {});
      }
      return {};
    }
  };
};
```

3. Use the Zod schema and Formik in your form component:

```javascript
// MyForm.tsx
import React from "react";
import { Formik, Form, Field } from "formik";
import { toFormikValidationSchema } from "./zodFormikAdapter";
import { userSchema } from "./userSchema";

const MyForm = () => {
  return (
    <Formik
      initialValues={{ name: "", age: 0, email: "" }}
      validationSchema={toFormikValidationSchema(userSchema)}
      onSubmit={(values, actions) => {
        console.log("Form submitted", values);
        actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field name="name" type="text" />
          <Field name="age" type="number" />
          <Field name="email" type="email" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
```

In this example, the `toFormikValidationSchema` function converts the Zod schema into a Formik validation schema. The `MyForm` component uses Formik to handle form state and submission, and the Zod schema to validate the form data. When the form is submitted, the validation schema is automatically applied, and any validation errors are displayed next to the corresponding form fields.