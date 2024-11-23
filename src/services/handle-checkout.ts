import axiosInterceptorInstance from "@/axios/axiosInterceptorInstance";

const HandleCheckout = async () => {
  try {
    const response = await axiosInterceptorInstance
      .post(`timekeeping/check-out`)
      .then(() => {
        alert("Check-out successfully!");
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
export default HandleCheckout;
