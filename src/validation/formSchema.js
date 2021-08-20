//schema for our form
import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Please Enter A Name for the Pizza")
    .min(2, "Name must be 2 characters long"),

  size: yup
    .string()
    .oneOf(["small", "medium", "large", "xl"], "Size is required"),

  special: yup
    .string()
    .trim()
    .required("Please enter any special instructions for delivery"),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  mushrooms: yup.boolean(),
  olives: yup.boolean()
});

export default formSchema;
