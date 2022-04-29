import Link from "next/link";
import s from "./NavBar.module.scss";

export const NavBar = () => {
  return (
    <nav className={s.nav_container}>
      <div className={s.logo_container}>
        <img src="/vercel.svg" alt="logo" />
      </div>
      <div className={s.pages_container}>
        <p>ALQUILER</p>
        <p>VENTA</p>
        <p>ABOUT</p>
        <Link href="/login">
          <a>LOGIN</a>
        </Link>
        <p>CONTACTO</p>
      </div>
    </nav>
  );
};
