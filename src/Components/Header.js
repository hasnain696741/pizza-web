import React from 'react'

const Header = () => {
  return (
    <div className='banner'>
      <nav className='main-nav'>
        <div className='row'>
          <div className='row-child'>
            <p> <strong>Call Us: </strong> (+04) 743 323 424</p>
            <p><strong>ADDRESS: </strong>New York, Thomas Nolan 5322</p>
          </div>
          <div className='row-child2'>
          <span><img className='img-search'  src="/img/search.jpg" alt="" /></span> 
          <input type="search" className='inp' />
          </div>
        </div>
      </nav>
      <div className='nav-2'>
        <span><img  src="https://maestropizzini.modeltheme.com/wp-content/uploads/2018/01/logo.png" alt="" /></span>
        <button className='menue'>
          <button></button>
          <button></button>
          <button></button>
        </button>
        <ul>
          <li>HOME</li>
          <li>MENUE</li>
          <li>ABOUT</li>
          <li>SHOP</li>
          <li>NEWS</li>
          <li>CONTACT</li>
        </ul>
      </div>
  <a className='goli' href="http://localhost:3000/" ><img src="/img/goback.png" alt="" /></a>
      <div className='content'>
        <h2>Pizza Delievery</h2>
        <h1>MAESTRO PIZINNI</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt mollitia deleniti culpa
          perferendis esse alias totam reiciendis sit iste repudiandae. </p>
        <button>DELIEVERY NOW</button>
      </div>
      <div className='z-index'>
        <div className='aboutUs'>
          <div className='aboutUs-content'>
            <span className='about-tags'>
              <h2>About Us</h2>
              <h1>WELCOME TO <br /> MAESTRO PIZZINI</h1>
              <p>Investigationes demonstraverunt lectores legere me lius <br />
                quod ii legunt saepius. Claritas est etiam processus dynaus, <br />
                quise sequitur mutationem consuetudium lectorum.</p>
              <button>Read More</button>
            </span>
          </div>
          <div className='aboutUs-image'>
            <span><img src="https://maestropizzini.modeltheme.com/wp-content/uploads/2018/01/maestropizzini-aboutus-bg-1.jpg" alt="" /></span>
          </div>
        </div>



        {/* FREE DELIVERY */}

        <div className='free-delivery'>
          <div className='free-delivery-content'>
            <h2>
              Free Delivery With
            </h2>
            <h1>
              PIZZA OF THE <span>DAY</span>
            </h1>
            <h2>
              Only 8.99 USD
            </h2>
            <button>Call Now</button>
          </div>
        </div>


        {/* PIZZA MENUE CHICAGO */}

        <div className='pizzaMenueChicago'>
          <div className='pizzaMenueChicago-image'>
            <span><img src="https://maestropizzini.modeltheme.com/wp-content/uploads/2018/01/maestropizzini-pizzamenu-bg.jpg" alt="" /></span>
          </div>
          <div className='pizzaMenueChicago-content'>
            <h2>The Pizza Menu</h2>
            <h1>CHICAGO <br /> THIN CRUST</h1>
            <p>Investigationes demonstraverunt lectores legere me lius
              quod ii legunt saepius. Claritas est etiam processus dynaus,
              quise sequitur mutationem consuetudium lectorum.

            </p>
            <button>View More</button>
          </div>
        </div>

        {/* CUSTOMER CONUT */}

        <div className='count-main'>
          <span><p>120</p><i>Awesome Employees</i></span>
          <span><p>58</p><i>Pizza Types</i></span>
          <span><p>1420</p><i>Satisfied Clients</i></span>
          <span><p>2031</p><i>Delivery</i></span>

        </div>

        {/* QUICK DELIVERY */}


        <div className='quickDelivery'>
          <div className='quickDelivery-content'>
            <h2>Quick Delivery</h2>
            <h1>ORDER A <br /> PIZZA NOW</h1>
            <p>Investigationes demonstraverunt lectores legere me lius <br />
              quod ii legunt saepius. Claritas est etiam processus.</p>
            <div className='all-inputs'>
              <span className='inp-1'>
                <input type="text" placeholder='First Name' id="" />
                <input type="text" placeholder='Last Name' id="" />
              </span>
              <input type="text" placeholder='Enter Street Address' className='full-inp1' />
              <span className='inp-2'>
                <input type="text" placeholder='Apartment Room' id="" />
                <input type="text" placeholder='Phone Number' id="" />
              </span>
              <input type="text" placeholder='Pizza Type' className='full-inp2' />

              <span className='inp-3'>
                <input type="text" placeholder='Enter Number' id="" />
                <input type="text" placeholder='Size' id="" />
              </span>
              <button>QUICK DELIVERY</button>
            </div>

          </div>
          <div className='quickDelivery-image'>
            <img id='img-img' src="https://img.freepik.com/free-photo/superhero-pizza-man_1368-8475.jpg?w=360&t=st=1690543601~exp=1690544201~hmac=aa9ae92a4fc64428a226b80457c41b0f2351e0a2806db4311228474cd0b4d516" alt="" />
          </div>
        </div>
        {/* PIZZA MENUE-1 */}


        {/* <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div> */}

        {/* PIZZA MENUE-2 */}

<div className='pizzaMenue-2'>
  <div className='pizzaMenue-head'>
    <div className='pizzaMenue-div'>
      <h2>Pizza Menu</h2>
      <h1>WELCOME TO <span className='mas'> MAESTRO PIZZINI </span></h1>
    </div>
  </div>
  <div className='row-styled'></div>
  <div className='lowCarb'>
    <div className='lowCarb-1'>
      <img className='img' src="https://maestropizzini.modeltheme.com/wp-content/uploads/2018/01/pizza6.png"  alt="" />
    </div>
    <div className='lowCarb-2'>
      <h2>Low Carb Pizza</h2>
      <p className='target-all-p'>Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
     
    </div>
    <div className='lowCarb-3'>
    <p className='dollar'>$34</p>

    </div>
  </div>
  <div className='row-styled'></div>
  <div className='pizzaBiscuit'>
  <div className='pizzaBiscuit-1'>
  <img className='img' src="https://maestropizzini.modeltheme.com/wp-content/uploads/2018/01/pizza6.png" alt="" />

  </div>
    <div className='pizzaBiscuit-2'>
    <h2>Low Carb Pizza</h2>
      <p className='target-all-p'>Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
     
    </div>
    <div className='pizzaBiscuit-3'>
    <p className='dollar'>$24</p>

    </div>
  </div>
  <div className='row-styled'></div>
  <div className='crazyCrust'>
  <div className='crazyCrust-1'>
  <img className='img' src="https://maestropizzini.modeltheme.com/wp-content/uploads/2018/01/pizza4.png" alt="" />

  </div>
    <div className='crazyCrust-2'>
    <h2>Low Carb Pizza</h2>
      <p className='target-all-p'>Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
     
    </div>
    <div className='crazyCrust-3'>
    <p className='dollar'>$24</p>

    </div>
  </div>
  <div className='row-styled'></div>
  <div className='beerPizza '>
  <div className='beerPizza-1'>
  <img className='img' src="https://maestropizzini.modeltheme.com/wp-content/uploads/2018/01/pizza3.png" alt="" />

  </div>
    <div className='beerPizza-2 '>
    <h2>Low Carb Pizza</h2>
      <p className='target-all-p'>Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
     
    </div>
    <div className='beerPizza-3 '>
    <p className='dollar'>$33</p>

    </div>
  </div>
  <div className='row-styled'></div>
  <div className='pizzaProsciutto'>
  <div className='pizzaProsciutto-1'>
  <img className='img' src="https://maestropizzini.modeltheme.com/wp-content/uploads/2018/01/pizza2.png" alt="" />

  </div>
    <div className='pizzaProsciutto-2'>
    <h2>Low Carb Pizza</h2>
      <p className='target-all-p'>Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
    </div>
    <div className='pizzaProsciutto-3'>
    <p className='dollar'>$31</p>
   

    </div>
  </div>
  <div className='row-styled'></div>
  <div className='pizzaMargeritta'>
  <div className='pizzaMargeritta-1'>
  <img className='img' src="https://maestropizzini.modeltheme.com/wp-content/uploads/2018/01/pizza1.png" alt="" />

  </div>
    <div className='pizzaMargeritta-2'>
    <h2>Low Carb Pizza</h2>
      <p className='target-all-p'>Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
     
    </div>
    <div className='pizzaMargeritta-3'>
    <p className='dollar'>$34</p>

   

    </div>
  </div>
  <div className='row-styled'></div>
</div>



<div className='pizza-second'>
  <div className='pizza-second-1'>
    <div className='child-1'>
    <h2>Pizza Menu</h2>
      <h1>WELCOME TO <span className='mass'> MAESTRO PIZZINI </span></h1>
    </div>
  </div>
  <div className='pizza-second-2'>
  <div className='child-3'>
  <img className='img' src="https://maestropizzini.modeltheme.com/wp-content/uploads/2018/01/pizza1.png"  alt="" />
  <h2>Pizza Menu</h2>
  <p className='target-all-p'>Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
  <p className='dollar'>$34</p>

  </div>
  <div className='child-4'>

  <img className='img' src="https://maestropizzini.modeltheme.com/wp-content/uploads/2018/01/pizza2.png"  alt="" />
  <h2>Pizza Menu</h2>
  <p className='target-all-p'>Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
  <p className='dollar'>$25</p>
 

  </div>
  <div className='child-5'>

  <img className='img' src="https://maestropizzini.modeltheme.com/wp-content/uploads/2018/01/pizza3.png"  alt="" />
  <h2>Pizza Menu</h2>
  <p className='target-all-p'>Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
  <p className='dollar'>$49</p>

  </div>

  </div>
  <div className='pizza-second-3'>
  <div className='child-6'>

  <img className='img' src="https://maestropizzini.modeltheme.com/wp-content/uploads/2018/01/pizza4.png"  alt="" />
  <h2>Pizza Menu</h2>
  <p className='target-all-p'>Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
  <p className='dollar'>$44</p>

  </div>
 
  <div className='child-7'>
  <img className='img' src="https://maestropizzini.modeltheme.com/wp-content/uploads/2018/01/pizza5.png"  alt="" />
  <h2>Pizza Menu</h2>
  <p className='target-all-p'>Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
  <p className='dollar'>$36</p>

  </div>
  
  <div className='child-8'>
  <img className='img' src="https://maestropizzini.modeltheme.com/wp-content/uploads/2018/01/pizza6.png"  alt="" />
  <h2>Pizza Menu</h2>
  <p className='target-all-p'>Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
  <p className='dollar'>$37</p>

  </div>

  </div>
</div>


        {/* FOOTER */}
        <div className='foo-footer'>
          <div  className='foo-about'>
            <h1 className='foo-h1'>About us</h1>
            <p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Eodem modo typi, qui nunc nobis videntur. Investigationes demonstraverunt lectores
             legere me lius quod ii legunt saepius. Investigationes demonstraverunt lectores.</p>
             <p><strong>Monday to Saturday:</strong> 9.00 am to 9.00 pm <br />
          <strong>Sunday: </strong>  10.00 am to 6.00 pm </p>
          </div>
          <div  className='foo-quick'>
          <h1 className='foo-h1'>Quick Links</h1>
<ul className='ul'>
  <li>Need help ? Contact us</li>
  <li>Our latest news</li>
  <li>About us page</li>
  <li>Table Booking</li>
  <li>Fast delivery</li>
</ul>
          </div>
          <div  className='foo-recepies'>
          <h1 className='foo-h1'>Recepies</h1>
          <ul className='ul'>
  <li>Pizza Biscuit Bake</li>
  <li>Pizza Margeritta</li>
  <li>Pizza Prosciutto</li>
  <li>Pizza Low Carb</li>
  <li>Pizza Del Sole</li>
</ul>
          </div>
          <div  className='foo-contact'>
          <h1 className='foo-h1'>Contact us</h1>
          <ul className='ul'>
  <li>(+40) 74 0920 2288</li>
  <li>office@example.com</li>
  <li>New York 11673</li>

</ul>
          </div>
          <div  className='foo-copy'>
        <p>Copyright by ModelTheme. All Rights Reserved.</p>

          </div>
        </div>

      </div>
    </div>

  )
}
export default Header;
