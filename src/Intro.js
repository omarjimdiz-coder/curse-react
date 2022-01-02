const MiComponente = ({miProp}) => {
  return(
    <div>
      Nombre: {miProp}
    </div>
  )
}

const Intro = () => {
  return(
    <MiComponente miProp={'Inari'} />
  );
}
export default Intro;
