import React from 'react'
import kyoto from '../images/kyotobanner.jpg'

export default function About() {
    return (
        <>
        <div className='aboutBox'>
            <h1 className='header1'>The Spot</h1>
           <p className='par1'>
The Sushi Spot is a Japanese restaurant that provides all customers with the best traditional experience
and the best quality food in Orange County California. Dine in has been designed with a classical and traditional
look to give the environment of an old Japan with modern touches while you enjoy fresh sushi and delicios plates. 
</p>
           
        </div>
<div className='theRoots'>
<h1 className='header2'> Our Roots</h1>

<p className='par2'>
<img src={ kyoto } alt = 'image of kyoto city in Japan' className='kyoto' />    
The Sushi Spot was founded by Mr "Yuto Nakamura" on 1974 in Kyoto Japan, using the recipes passed down by his family
he was able to open his first restaurant that would be passed down in 2001 to his son "Sota Nakamura" who in 2009 would expand all
the way to California to open the first Sushi Spot restaurant in Irvine California. 
</p>
</div>
        </>
    )
}
