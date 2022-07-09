const Personaje = ({ personaje }) => {

    const {name,species, image} = personaje
  return (
    
    <div className="col-4 col-md-3 col-xl-2 mb-2">
      
      <div className="card">
        <img src={image} alt="" />
        <div className="card-body">
            <h5>{name}</h5>
            <p>{species}</p>
        </div>
      </div>
    </div>




  );
};

export default Personaje;
