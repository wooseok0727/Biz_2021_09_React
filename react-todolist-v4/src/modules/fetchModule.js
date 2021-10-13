const fetchOption = {
  method: "POST",
  headers: {
    "Content-Type": "Application/json",
  },
  credentials: "include",
};

const fetchLogin = async (userid, password) => {
  // 이미 선언된 fetchOption에 body 속성을 추가하기
  fetchOption.body = JSON.stringify({ userid, password });

  const reponse = await fetch("http://localhost:8080/users/login", fetchOption);

  if (reponse?.ok) {
    const resultUser = reponse.json();
    return resultUser;
  }
};

const fetchUser = async () => {
  const response = await fetch("http://localhost:8080/users", fetchOption);

  if (response?.ok) {
    const resultUser = response.json();
    return resultUser;
  } else {
    return [];
  }
};

const fetchLogout = async () => {
  const response = await fetch(
    "http://localhost:8080/users/logout",
    fetchOption
  );
  return response.json();
};

export { fetchLogin, fetchUser, fetchLogout };
