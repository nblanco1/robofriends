import React from 'react';

const Card = ({ name, email, id }) => {
    return ( //The following is JSX not HTML! needs react import
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/set_set2/bgset_bg1/${id}?size=300x300`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;