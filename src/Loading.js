import './Loading.css'
import linkedinlogo from "./linkdeinlogo.png";
function Loading() {
  return (
    <div>
      <div className="loading-scr">
        <div className="loading-animation">
          <img src={linkedinlogo} alt="Linkedin logo" className="logo" />
          <div className="load-bar"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
