import { APIInstance, AUTHORIZATION } from "./../config/axios";
import Strings from "./../utils/strings";

export const login = async (identifier, password) => {
  try {
    const response = await APIInstance.post("auth/signin", {
      identifier,
      password,
    });
    return response;
  } catch (e) {
    if (e.response) {
      switch (e.response.status) {
        case 404:
          throw Strings.LOGIN.BAD_CREDENTIALS;
        default:
          throw Strings.COMMON_ERRORS.INTERNAL;
      }
    }
    throw Strings.COMMON_ERRORS.INTERNAL;
  }
};

export const register = async ({ username, email, password, name, photo }) => {
  try {
    const response = await APIInstance.post("auth/signup", {
      username,
      email,
      password,
      name,
      photo,
    });
    if (response) return response;
    throw new Error("There's a problem on our side:(");
  } catch (e) {
    throw e.response;
  }
};

export const loadUser = async () => {
  try {
    const response = await APIInstance.get("/user", { headers: { ...AUTHORIZATION } });
    return response;
  } catch (e) {
    if (e.response) {
      switch (e.response.status) {
        case 404:
          throw Strings.LOGIN.BAD_CREDENTIALS;
        default:
          throw Strings.COMMON_ERRORS.INTERNAL;
      }
    }
    throw Strings.COMMON_ERRORS.INTERNAL;
  }
};

export const saveToken = (token) => {
  localStorage.setItem(Strings.TOKEN, token);
};
