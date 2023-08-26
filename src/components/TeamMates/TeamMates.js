import React, { useEffect, useState } from 'react';
import './TeamMates.css';
import Worker from '../Worker/Worker';
import Cart from '../Cart/Cart';

const TeamMates = () => {
    const [workers, setWorkers] = useState([]);
    const [cart, setCart] = useState([])

    useEffect( ()=>{
        fetch('./workers.JSON')
        .then(res => res.json())
        .then(data => setWorkers(data));
    }, [])

    const handleAddToCart = (worker) =>{
        //console.log(worker.name)
        const isAlreadyInCart = cart.some(cartWorker => cartWorker._id === worker._id);

        if (!isAlreadyInCart) {
            const newCart = [...cart, worker];
            setCart(newCart);
        }
    }

    return (
        <div className='teams-container'>
            <div className='team-container'>
                {
                    workers.map(worker => <Worker key={worker._id} 
                        worker={worker}
                        handleAddToCart = {handleAddToCart} 
                    >
                    </Worker>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default TeamMates;