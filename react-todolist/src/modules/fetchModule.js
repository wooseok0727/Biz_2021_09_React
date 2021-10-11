const fetchLogin = async (userid, password) => {
  const reponse = await fetch("http://localhost:8080/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      userid,
      password,
    }),
  });

  if (reponse?.ok) {
    const resultUser = reponse.json();
    return resultUser;
  } else {
    return [];
  }
};

const fetchUser = async () => {
  const response = await fetch("http://localhost:8080/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  return response.json();
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

export { fetchLogin, fetchUser, fetchLogout };
