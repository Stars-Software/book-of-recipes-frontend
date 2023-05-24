import * as Yup from "yup";
import { RegExps } from "./regExps";

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .matches(RegExps.email)
    .required("Required"),
  password: Yup.string()
    .matches(RegExps.password)
    .required("Required"),
});

export const signUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(3)
    .max(20),
  email: Yup.string()
    .matches(RegExps.email)
    .required("Required"),
  password: Yup.string()
    .matches(RegExps.password)
    .required("Required"),
  avatar: Yup.mixed()
    .test("isFormData", "Avatar is required", (value) => {
      if (!(value instanceof FormData)) {
        return false;
      }
      const file = value.get("file");
      return file instanceof File && file.type.startsWith("image/");
    })
    .required("Required"),
});
