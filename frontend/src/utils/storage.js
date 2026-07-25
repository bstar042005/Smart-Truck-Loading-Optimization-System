export const saveUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const removeUser = () => {
  localStorage.removeItem("user");
};

export const saveDealer = (dealer) => {
  localStorage.setItem("dealer", JSON.stringify(dealer));
};

export const getDealer = () => {
  return JSON.parse(localStorage.getItem("dealer"));
};

export const removeDealer = () => {
  localStorage.removeItem("dealer");
};