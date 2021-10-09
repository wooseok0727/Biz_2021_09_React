import { useUserContext } from "../context/UserContextProvider";

const Board = () => {
  const { user } = useUserContext();

  return (
    <div>
      <h1>게시판</h1>
      <h3>USERID : {user.userid}</h3>
    </div>
  );
};

export default Board;
