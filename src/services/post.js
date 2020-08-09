const { APIInstance, AUTHORIZATION } = require("../config/axios");

export const loadPost = async (page = 0, limit = 100000) => {
  try {
    const response = await APIInstance.get(`post/all?page=${page}&limit=${limit}`, {
      headers: {
        ...AUTHORIZATION,
      },
    });
    return response;
  } catch (e) {
    throw e;
  }
};

export const createPost = async ({ title, image, description }) => {
  try {
    const response = await APIInstance.post(
      "/post",
      { title, image, description },
      {
        headers: { ...AUTHORIZATION },
      }
    );
    return response;
  } catch (e) {
    throw e;
  }
};

export const like = async (id) => {
  try {
    const response = await APIInstance.patch(
      `post/like`,
      { _id: id },
      { headers: { ...AUTHORIZATION } }
    );
    return response;
  } catch (e) {
    throw e;
  }
};

export const savePost = async (id) => {
  try {
    const response = await APIInstance.patch(
      "user/savePost",
      { postID: id },
      { headers: { ...AUTHORIZATION } }
    );
    return response;
  } catch (e) {
    throw e;
  }
};

export const loadProfile = async (id) => {
  try {
    const response = await APIInstance.get(`/user/profile/${id}`, {
      headers: { ...AUTHORIZATION },
    });
    return response;
  } catch (e) {
    throw e;
  }
};
