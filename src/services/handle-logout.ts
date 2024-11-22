const HandleLogout = (router: any) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user-info");
  router.push("/login");
};

export default HandleLogout;
