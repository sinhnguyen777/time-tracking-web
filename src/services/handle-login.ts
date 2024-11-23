import axiosInterceptorInstance from "@/axios/axiosInterceptorInstance";

const HandleLogin = async (credentials: object, router: any) => {
  try {
    const response = await axiosInterceptorInstance
      .post("/auth/login", credentials)
      .then((res) => res.data)
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        }
      });
    if (response) {
      localStorage.setItem("token", JSON.stringify(response.accessToken));
      await HandleGetUserInfo();
      router.replace("/home").then(() => {
        window.location.reload();
      });
    }
  } catch (error) {
    console.error(error);
  }
};

const HandleGetUserInfo = async () => {
  try {
    const response = await axiosInterceptorInstance
      .get("users/user-info")
      .then((res) => res.data);
    if (response) {
      localStorage.setItem("user-info", JSON.stringify(response.data));
    }
  } catch (error) {
    console.log(error);
  }
};

export default HandleLogin;
