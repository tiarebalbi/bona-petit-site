import style from './sobre-nos.module.css';

const SobreNos = () => {
  return (
    <div className={style.container}>
      <h2 className={style.slogan}>Bona Petit</h2>
      <h1 className={style.title}>Sobre Nós</h1>
      <div className={style.content}>
        <div>Text</div>
        <div>
          <div>Photo 1</div>
          <div>Photo 2</div>
        </div>
      </div>
    </div>
  );
};

export default SobreNos;
