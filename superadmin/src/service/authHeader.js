export const getAdminInfo = () => {
  let user = JSON.parse(localStorage.getItem("users"));
  // console.log(user);
  return user;
};
