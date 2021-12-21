import Restaurantimg from '../src/images/sushirestaurant.jpg'


function Header() {
  return (
    
      <header className="headerTag">
        <img src={ Restaurantimg } className='bannerImg' alt='banner' />
        
      </header>
    
  );
}

export default Header;
