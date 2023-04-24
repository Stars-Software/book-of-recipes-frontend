export type SignIn = {
  email: string;
  password: string;
};

export type SignUp = SignIn & {
  name: string;
};

export type AuthFormData = SignUp & {
  avatar: FormData | null;
};
