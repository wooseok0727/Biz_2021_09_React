import { useUserContext } from "../context/UserContextProvider";

const Notice = () => {
  const { user } = useUserContext();
  return (
    <div>
      <h1>공지사항</h1>
      <h3>USER ID: {user.userid}</h3>
    </div>
  );
};

export default Notice;
