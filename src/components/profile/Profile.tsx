import Cookies from "js-cookie";

const Profile = () => {
  const handleLogout = () => {
    console.log("entered");
    Cookies.remove("token");
  };
  return (
    <div>
      <button onClick={() => handleLogout()} className="bg-primary p-2 text-white">Logout</button>
    </div>
  );
};

export default Profile;
