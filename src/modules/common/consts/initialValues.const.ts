import {InitialState} from "../../recipes/components/forms/create.recipe.form"
export const recipeInitialValues: InitialState = {
    title: "",
    description: "",
    private: false,
    categoryId: "",
    products: [],
};

export const productInitialValues = {
        title: "",
        amount: "",
        categoryId: "",
}

export const passwordInitialValues = {
        password: "",
        confirmPassword: "",
}

export const avatarInitialValues = {
        avatar: null,
}

export const loginInitialValues = {
        email: "",
        password: "",
}

export const registerInitialValues = {
        name: "",
        email: "",
        password: "",
        avatar: null,
}