import style from './style.module.css';

const Footer = () => (
  <footer className={style.main}>
    <div className={style.faleConosco}>
      <div>Fale Conosco</div>
      <div>Form</div>
    </div>
    <div className={style.parceiros} />
    <div className={style.overlay} />
  </footer>
);

export default Footer;
