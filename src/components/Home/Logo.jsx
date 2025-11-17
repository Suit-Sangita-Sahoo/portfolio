import image1 from "../Home/Myimage.jpg";
import "./Logo.css";  

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={image1} alt="Logo" className="profile-pic" />
    </div>
  );
};

export default Logo;
