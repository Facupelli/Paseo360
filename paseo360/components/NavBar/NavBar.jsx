import Link from "next/link";
import s from "./NavBar.module.scss";

export const NavBar = ({route}) => {
  return (
    <nav className={s.nav_container}>
      <div className={s.logo_container}>
        {/* <img src="/vercel.svg" alt="logo" /> */}
        <p>PASEO.360°</p>
      </div>
      <div className={s.pages_container}>
        <Link href="/">
          <span className={route === 'home' ? s.active : ''}>PROPIEDADES</span>
        </Link>
        <span>ALQUILER</span>
        <span>VENTA</span>
        <Link href="/login">
          <span className={route === 'login' ? s.active : ''}>LOGIN</span>
        </Link>
        <span>CONTACTO</span>
      </div>
    </nav>
  );
};
