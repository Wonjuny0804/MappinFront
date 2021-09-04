export const authHeader = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return `Bearer ${token}`;
  } else {
    return null;
  }
};
