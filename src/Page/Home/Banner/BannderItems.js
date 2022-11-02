import React from 'react';
import './BannderItems'
import './BannerItems.css'

const BannderItems = ({slide}) => {
    const {image,id,next,pre} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item  relative w-full">
        <div className='carousel-img w-full'>
        <img src={image} className="   w-full object-cover object-top rounded-xl" />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5  top-1/4">
            <h1 className='text-6xl font-bold text-white'> 
                Affordable <br/>
                Price for car <br/>
                Service
            </h1>
        </div>
        <div className="absolute flex w-2/5 transform -translate-y-1/2 left-5  top-1/2">
            <p className=' text-white text-xl'> 
               There are many variations of passages of available, but
               The mejority of suffered from alteration of many forms.
            </p>
        </div>
        <div className="absolute flex w-2/5 transform -translate-y-1/2 left-5  top-3/4">
        <button className="btn btn-warning mr-5">Discover more</button>
        <button className="btn btn-outline btn-warning">Latest news</button>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href={`#slide${pre}`} className="btn mr-5 btn-circle">❮</a> 
          <a href={`#slide${next}`} className="btn btn-circle">❯</a>
        </div>
      </div> 
    );
};

export default BannderItems;