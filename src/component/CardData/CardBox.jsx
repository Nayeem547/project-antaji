

const CardBox = ({cart}) => {
    const {names, image, Brand,  Price,  description} = cart;
    console.log(cart);
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{names}</h2>
    <h2>{Brand}</h2>
    <p>{Price}</p>
    <p>{description}</p>
    
  </div>
</div>
        </div>
    );
};

export default CardBox;