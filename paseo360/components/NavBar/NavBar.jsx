import s from './NavBar.module.scss'

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
        <p>CONTACTO</p>
      </div>
    </nav>
  );
};
