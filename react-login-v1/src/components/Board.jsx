import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../context/UserContextProvider";

const Board = () => {
  const { user, setUser } = useUserContext();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const result = await response.json();
      console.log(result);
      await setUser(result);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!user.userid) {
    history.replace("/login");
  }

  return (
    <div>
      <h1>게시판</h1>
    </div>
  );
};

export default Board;
