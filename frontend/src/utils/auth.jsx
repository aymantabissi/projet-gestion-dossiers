    export const isAuthenticated = () => {
  return !!localStorage.getItem("token"); // or your auth key
};