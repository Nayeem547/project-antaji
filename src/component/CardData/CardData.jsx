import React from 'react';
import { useLoaderData } from 'react-router-dom';


const CardData = ({}) => {
    
    
    const cartes = useLoaderData();
    console.log(cartes)


//     const [cart, setCart] = useState({});

//   const { _id } = useParams();
//   console.log(_id);

  

//   useEffect(() => {
//     const findCart = cartes?.find((cart) => cart._id == _id);
//     setCart(findCart);
//   }, [_id, cartes]);

    
    return (
        <div>
            <h1>Card item : </h1>
            {
                cartes.map((cart) => <div key={cart._id} > <h2>{cart.names}</h2> </div> )
            }
        </div>
    );
};

export default CardData;