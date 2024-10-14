import React from 'react';
import Image from 'next/image';
import { ProductDataType } from '@/models/type';

const ProductCard = ({ name, imgUrl, regularPrice, reducedPrice, inStock, description }: ProductDataType) => {
    return (
        <>
            <div className='bg-slate-200 w-[150px]'>
                {/* images----------- */}
                <div>
                    <Image src={imgUrl} width={300} height={300} alt='img' className='w-[150px] h-[150px] '></Image>
                </div>
                <p>
                    {name}
                </p>
                <p>
                    {description}
                </p>
                <p>
                    {regularPrice}
                </p>
                <p>
                    {reducedPrice}
                </p>
                <p>
                    {inStock}
                </p>
            </div>
        </>
    );
};

export default ProductCard;
