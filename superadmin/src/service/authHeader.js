export const getAdminInfo = () => {
  let admin = JSON.parse(localStorage.getItem("admin"));
  // console.log(user);
  return admin;
};
