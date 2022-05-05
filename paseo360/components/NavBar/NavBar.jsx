import Link from "next/link";
import s from "./NavBar.module.scss";

export const NavBar = () => {
  return (
    <nav className={s.nav_container}>
      <div className={s.logo_container}>
        <img src="/vercel.svg" alt="logo" />
      </div>
      <div className={s.pages_container}>
        <Link href="/">
          <span>PROPIEDADES</span>
        </Link>
        <span>ALQUILER</span>
        <span>VENTA</span>
        <Link href="/login">
          <span>LOGIN</span>
        </Link>
        <span>CONTACTO</span>
      </div>
    </nav>
  );
};
