import React from 'react'

export default function Menu() {
    return (
        <div>
            <h1>Menu</h1>
            <h6>All items come with a drink and a side salad</h6>
            <div className='menuContainer'>
                <div className='itemContainer'>
                    <h3>Beef Ramen</h3>
                    <img src='https://www.thespruceeats.com/thmb/82r1DrloeLBrNLd8tthGMDEq40o=/1500x1500/smart/filters:no_upscale()/GettyImages-174947093-13afc2cc6bb14d2982701e95ddfe4689.jpg' alt='beef ramen' className='itemImg' />
                    <h4>$9.99</h4>
                </div>
                <div className='itemContainer'>
                    <h3>Yakisoba</h3>
                    <img src='https://www.justonecookbook.com/wp-content/uploads/2020/04/Yakisoba-5416-I-500x500.jpg' alt='Yakisoba' className='itemImg' />
                    <h4>$6.99</h4>
                </div>
                <div className='itemContainer'>
                    <h3>Chicken Katsu</h3>
                    <img src='https://christieathome.com/wp-content/uploads/2021/12/Chicken-Katsu-Updated-3.jpg' alt='Chicken Katsu' className='itemImg' />
                    <h4>$7.99</h4>
                </div>
                <div className='itemContainer'>
                    <h3>Terikayi Bowl</h3>
                    <img src='https://data.thefeedfeed.com/static/2020/10/21/16032540645f8fb730e3fe5.jpg' alt='Terikayi Bowl' className='itemImg' />
                    <h4>$7.99</h4>
                </div>
                <div className='itemContainer'>
                    <h3>Udon Soup</h3>
                    <img src='https://www.wandercooks.com/wp-content/uploads/2019/04/udon-noodle-soup-recipe-ft-500x500.jpg' alt='Udon Soup' className='itemImg' />
                    <h4>$8.99</h4>
                </div>
                <div className='itemContainer'>
                    <h3>Bento Box</h3>
                    <img src='https://www.hyattrestaurants.com/uploaded/videoalternates/videoalternate_Screen-Shot-2021-05-11-at-3-09-18-PM.jpg' alt='Bento Box' className='itemImg' />
                    <h4>$15.99</h4>
                </div>
                <h1>Sushi Menu</h1>
                <h6>6 rolls for $6.99 or 8 rolls for 7.99</h6>
                <div className='sushiContainer'> 
                
                <div className='itemContainer'>
                    <h3>California Roll</h3>
                    <img src='https://www.blondelish.com/wp-content/uploads/2020/11/California-Rolls-Recipe-Sushi-Rice-Recipe-10.jpg' alt='California Roll' className='itemImg' />
                    
                </div>
                <div className='itemContainer'>
                    <h3>Dragon Roll</h3>
                    <img src='https://mysushikitchen.com/wp-content/uploads/2021/02/Dragon-Roll.jpg' alt='Dragon Roll' className='itemImg' />
                    
                </div>
                <div className='itemContainer'>
                    <h3>Salmon Roll</h3>
                    <img src='https://tatyanaseverydayfood.com/wp-content/uploads/2014/04/Spicy-Salmon-Sushi-Roll.jpg' alt='Salmon Roll' className='itemImg' />
                    
                </div>
                <div className='itemContainer'>
                    <h3>Tempura Shrimp Roll</h3>
                    <img src='https://www.flypeachpie.com/wp-content/uploads/2020/10/tempura-shrimp-roll-2.jpg' alt='Tempura Shrimp Roll' className='itemImg' />
                    
                </div>
                <div className='itemContainer'>
                    <h3>Caterpillar Roll</h3>
                    <img src='https://media.istockphoto.com/photos/caterpillar-roll-picture-id183137625?k=20&m=183137625&s=170667a&w=0&h=30w7056j4nENeiGw4LEFu2KiDZkvgQEeL3golmrCAN0=' alt='Caterpillar Roll' className='itemImg' />
                    
                </div>
                <div className='itemContainer'>
                    <h3>Spicy Tuna Roll</h3>
                    <img src='https://i.pinimg.com/originals/ae/e3/17/aee317488f030db63c6a09f02fc2728a.jpg' alt='Spicy Tuna Roll' className='itemImg' />
                    
                </div>
                </div>
                
            </div>
        </div>
    )
}
