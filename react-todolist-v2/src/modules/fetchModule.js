const fetchLogin = async (userid, password) => {
  const fetchOption = {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    credentials: "include",
    body: JSON.stringify({ userid, password }),
  };

  const reponse = await fetch("http://localhost:8080/users/login", fetchOption);

  if (reponse?.ok) {
    const resultUser = reponse.json();
    return resultUser;
  }
};

const fetchLogout = async () => {
  const response = await fetch("http://localhost:8080/users/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  return response.json();
};

export { fetchLogin, fetchLogout };
