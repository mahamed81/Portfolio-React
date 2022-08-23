import Logo from '/Users/mahamedahmed/Desktop/NucampFolder/portfolio/src/app/assets/img/logo192.png'

const AboutDesc = () => {
  const hr =  {
    border: 'none',
    borderTop: '3px double #333',
    color: '#333',
    overflow: 'visible',
    textAlign: 'center',
    height: '5px'
}
  return (
    <div class="col header-desc my-5">
    <div class="jumbotron text-center ">
      <img src={Logo} alt=""  className='rounded-5'/>
        <h1 class="" >Mahamed Ahmed</h1>
        <hr className='offset-3'/>
        <h2 className="">I am an aspiring Full Stack Developer</h2>
        <p className='text-justify w-50 offset-3 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci tenetur nulla ad ea sint nesciunt vel repellendus accusantium incidunt alias, perferendis reiciendis minus laudantium quo quia. Numquam repellat vero molestias.</p>
        <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
    </div>
</div>
  );
}

export default AboutDesc;
