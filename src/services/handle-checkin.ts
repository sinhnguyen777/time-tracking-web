import axiosInterceptorInstance from "@/axios/axiosInterceptorInstance";

const HandleCheckin = async () => {
  try {
    const response = await axiosInterceptorInstance
      .post(`timekeeping/check-in`)
      .then(() => {
        alert("Check-in successfully!");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        }
      });
  } catch (error) {
    console.error(error);
  }
};
export default HandleCheckin;
