// import React from "react";
// import NavButton from "../components/NavButtons";
// import logo from "../utils/pictures/newLogo.png";
// import "../styles/navBar.css";
// import "../styles/animation.css";

// const NavBar = ({ mobile, ...props }) => {
//   return (
//     <div className={`${mobile ? "mobile-" : ""}navBarLayout`}>
//       <div className={`${mobile ? "mobile-" : ""}left-side`}>
//         <img
//           src={logo}
//           style={{ height: "200px", width: "70%" }}
//           alt="logo"
//         ></img>
//       </div>
//       <div className={`${mobile ? "mobile-" : ""}right-side section`}>
//         <NavButton title="Деда Мраз" mobile={mobile} />
//         <NavButton title="Венчања" mobile={mobile} />
//         <NavButton title="Јахање" mobile={mobile} />
//         <NavButton title="Наши фијакери" mobile={mobile} />
//         <NavButton title="Наши коњи" mobile={mobile} />
//         <NavButton title="О нама" mobile={mobile} />
//       </div>
//     </div>
//   );
// };

// export default NavBar;
import React from "react";
import NavButton from "../components/NavButtons";
import logo from "../utils/pictures/newLogo.png";
import "../styles/navBar.css";
import "../styles/animation.css";

const NavBar = ({ mobile, ...props }) => {
  // Define the class name based on the mobile prop
  const logoClass = mobile ? "mobile-logo" : "desktop-logo";

  return (
    <div className={`${mobile ? "mobile-" : ""}navBarLayout`}>
      <div className={`${mobile ? "mobile-" : ""}left-side`}>
        <img src={logo} className={logoClass} alt="logo"></img>
      </div>
      <div className={`${mobile ? "mobile-" : ""}right-side section`}>
        <NavButton title="Деда Мраз" mobile={mobile} />
        <NavButton title="Венчања" mobile={mobile} />
        <NavButton title="Јахање" mobile={mobile} />
        <NavButton title="Наши фијакери" mobile={mobile} />
        <NavButton title="Наши коњи" mobile={mobile} />
        <NavButton title="О нама" mobile={mobile} />
      </div>
    </div>
  );
};

export default NavBar;
