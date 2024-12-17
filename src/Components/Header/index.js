import React from 'react';
import Logo from '../../Assets/logo.svg';
//import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/js/bootstrap.min.js';   

import UserIcon from '../Svg/User';
import MenuIcon from '../Svg/MenuIcon';
import './styles.css';

import DairyIcon from '../Svg/DaryIcon';
import SpicesIcon from '../Svg/SpeacesIcon';
import FruitsIcon from '../Svg/FruitsIcon';
import MeatIcon from '../Svg/MeatIcon';
import SeafoodIcon from '../Svg/SeaIcon';
import BakeryIcon from '../Svg/Bacary';
import CannedIcon from '../Svg/CannedIcon';
import FrozenIcon from '../Svg/FrozenIcon';
import PastaIcon from '../Svg/PastaIcon';
import BreakfastIcon from '../Svg/BreakFast';
import SnacksIcon from '../Svg/SnackIcon';
import BeveragesIcon from '../Svg/Bevereges';
import BabyIcon from '../Svg/BabyIcon';
import HealthIcon from '../Svg/Health';
import HouseholdIcon from '../Svg/Household';
import PersonalIcon from '../Svg/PersonalIcon';
import PetIcon from '../Svg/PetIcon';
import { WishlistIcon } from '../Svg/Wilisht';
import { ShoppingBagIcon } from '../Svg/ShoopingBag';
import YouCart from '../YouCart';

const Header = () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="row py-3 border-bottom">
          <div className="col-sm-4 col-lg-2 text-center text-sm-start d-flex gap-3 justify-content-center justify-content-md-start">
            <div className="d-flex align-items-center my-3 my-sm-0">
              <a href="index.html">
                <img src={Logo} alt="logo" className="img-fluid" />
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"  
              aria-controls="offcanvasNavbar"
            >
              <svg width="24" height="24" viewBox="0 0 24 24">
                <MenuIcon />
              </svg>
            </button>
          </div>

          
          <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-4">
            <div className="search-bar row bg-light p-2 rounded-4">
              <div className="col-md-4 d-none d-md-block">
                <select className="form-select border-0 bg-transparent">
                  <option>All Categories</option>
                  <option>Groceries</option>
                  <option>Drinks</option>
                  <option>Chocolates</option>
                </select>
              </div>
              <div className="col-11 col-md-7">
                <form id="search-form" className="text-center" action="index.html" method="post">
                  <input
                    type="text"
                    className="form-control border-0 bg-transparent"
                    placeholder="Search for more than 20,000 products"
                  />
                </form>
              </div>
              
            </div>
          </div>







          <div className="col-lg-4">
            <ul className="navbar-nav list-unstyled d-flex flex-row gap-3 gap-lg-5 justify-content-center flex-wrap align-items-center mb-0 fw-bold text-uppercase text-dark">
              <li className="nav-item active">
                <a href="index.html" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle pe-3"
                  role="button"
                  id="pages"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-menu border-0 p-3 rounded-0 shadow" aria-labelledby="pages">
                  <li><a href="index.html" className="dropdown-item">About Us</a></li>
                  <li><a href="index.html" className="dropdown-item">Shop</a></li>
                  <li><a href="index.html" className="dropdown-item">Single Product</a></li>
                  <li><a href="index.html" className="dropdown-item">Cart</a></li>
                  <li><a href="index.html" className="dropdown-item">Checkout</a></li>
                  <li><a href="index.html" className="dropdown-item">Blog</a></li>
                  <li><a href="index.html" className="dropdown-item">Single Post</a></li>
                  <li><a href="index.html" className="dropdown-item">Styles</a></li>
                  <li><a href="index.html" className="dropdown-item">Contact</a></li>
                  <li><a href="index.html" className="dropdown-item">Thank You</a></li>
                  <li><a href="index.html" className="dropdown-item">My Account</a></li>
                  <li><a href="index.html" className="dropdown-item">404 Error</a></li>
                </ul>
              </li>
            </ul>
          </div>




          <div className="col-1 svg-header ">
            <svg className="svg" width="24" height="24" viewBox="0 0 24 24">
              <UserIcon />
            </svg>
             
            <svg className="svg" width="24" height="24" viewBox="0 0 24 24">
              <WishlistIcon />
            </svg>

          <div className='shopping'>
          <a
              href="#"
              className="p-2 mx-1"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasCart"  
              aria-controls="offcanvasCart"
            >
               <svg className="svg" width="24" height="24" viewBox="0 0 24 24">
               <ShoppingBagIcon />
               </svg>
              
              
            </a>
          </div>
           
          </div>
        
      


              
               
    







          
          <div className="col-sm-8 col-lg-2 d-flex gap-5 align-items-center justify-content-center justify-content-sm-end">
            <ul className="d-flex justify-content-end list-unstyled m-0">
              <li>
                <a href="#" className="p-2 mx-1">
                  <svg width="24" height="24">
                    <use xlinkHref="#user"></use>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="p-2 mx-1">
                  <svg width="24" height="24">
                    <use xlinkHref="#wishlist"></use>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="p-2 mx-1"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasCart"  
                  aria-controls="offcanvasCart"
                >
                  <svg width="24" height="24">
                    <use xlinkHref="#shopping-bag"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      
      <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar">
        <div className="offcanvas-header justify-content-between">
          <h4 className="fw-normal text-uppercase fs-6">Menu</h4>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          {/* Aqui o conteúdo do menu */}

          <div class="offcanvas-body">
    
    <ul class="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">
      <li class="nav-item border-dashed active">
        <a href="index.html" class="nav-link d-flex align-items-center gap-3 text-dark p-2">
          <FruitsIcon/>
          {/* <svg width="24" height="24" viewBox="0 0 24 24"><use xlink:href="#fruits"></use></svg> */}
          <span>Fruits and vegetables</span>
        </a>
      </li>
      <li class="nav-item border-dashed">
        <a href="index.html" class="nav-link d-flex align-items-center gap-3 text-dark p-2">
          <DairyIcon/>
         
          <span>Dairy and Eggs</span>
        </a>
      </li>
      <li class="nav-item border-dashed">
        <a href="index.html" class="nav-link d-flex align-items-center gap-3 text-dark p-2">
          <MeatIcon/>
          
          <span>Meat and Poultry</span>
        </a>
      </li>
      <li class="nav-item border-dashed">
        <a href="index.html" class="nav-link d-flex align-items-center gap-3 text-dark p-2">
          <SeafoodIcon/>
          
          <span>Seafood</span>
        </a>
      </li>
      <li class="nav-item border-dashed">
        <a href="index.html" class="nav-link d-flex align-items-center gap-3 text-dark p-2">
          <BakeryIcon/>
         
          <span>Bakery and Bread</span>
        </a>
      </li>
      <li class="nav-item border-dashed">
        <a href="index.html" class="nav-link d-flex align-items-center gap-3 text-dark p-2">
          <CannedIcon/>
         
          <span>Canned Goods</span>
        </a>
      </li>
      <li class="nav-item border-dashed">
        <a href="index.html" class="nav-link d-flex align-items-center gap-3 text-dark p-2">
          <FrozenIcon/>
          
          <span>Frozen Foods</span>
        </a>
      </li>
      <li class="nav-item border-dashed">
        <a href="index.html" class="nav-link d-flex align-items-center gap-3 text-dark p-2">
          <PastaIcon/>
          {/* <svg width="24" height="24" viewBox="0 0 24 24"><use xlink:href="#pasta"></use></svg> */}
          <span>Pasta and Rice</span>
        </a>
      </li>
      <li class="nav-item border-dashed">
        <a href="index.html" class="nav-link d-flex align-items-center gap-3 text-dark p-2">
          <BreakfastIcon/>
          
          <span>Breakfast Foods</span>
        </a>
      </li>
      <li class="nav-item border-dashed">
        <a href="index.html" class="nav-link d-flex align-items-center gap-3 text-dark p-2">
          <SnacksIcon/>
          {/* <svg width="24" height="24" viewBox="0 0 24 24"><use xlink:href="#snacks"></use></svg> */}
          <span>Snacks and Chips</span>
        </a>
      </li>
      <li class="nav-item border-dashed">
        <button class="btn btn-toggle dropdown-toggle position-relative w-100 d-flex justify-content-between align-items-center text-dark p-2" data-bs-toggle="collapse" data-bs-target="#beverages-collapse" aria-expanded="false">
          <div class="d-flex gap-3">
            <BeveragesIcon/>
          
            <span>Beverages</span>
          </div>
        </button>
        <div class="collapse" id="beverages-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal ps-5 pb-1">
            <li class="border-bottom py-2"><a href="index.html" class="dropdown-item">Water</a></li>
            <li class="border-bottom py-2"><a href="index.html" class="dropdown-item">Juice</a></li>
            <li class="border-bottom py-2"><a href="index.html" class="dropdown-item">Soda</a></li>
            <li class="border-bottom py-2"><a href="index.html" class="dropdown-item">Tea</a></li>
          </ul>
        </div>
      </li>
      <li class="nav-item border-dashed">
        <a href="index.html" class="nav-link d-flex align-items-center gap-3 text-dark p-2">
         <SpicesIcon/>
          <span>Spices and Seasonings</span>
        </a>
      </li>
      <li class="nav-item border-dashed">
        <a href="index.html" class="nav-link d-flex align-items-center gap-3 text-dark p-2">
          <BabyIcon/>
          
          <span>Baby Food and Formula</span>
        </a>
      </li>
      <li class="nav-item border-dashed">
        <a href="index.html" class="nav-link d-flex align-items-center gap-3 text-dark p-2">
          <HealthIcon/>
          
          <span>Health and Wellness</span>
        </a>
      </li>
      <li class="nav-item border-dashed">
        <a href="index.html" class="nav-link d-flex align-items-center gap-3 text-dark p-2">
          <HouseholdIcon/>
          
          <span>Household Supplies</span>
        </a>
      </li>
      <li class="nav-item border-dashed">
        <a href="index.html" class="nav-link d-flex align-items-center gap-3 text-dark p-2">
          <PersonalIcon/>
          
          <span>Personal Care</span>
        </a>
      </li>
      <li class="nav-item border-dashed">
        <a href="index.html" class="nav-link d-flex align-items-center gap-3 text-dark p-2">
          <PetIcon/>
          <span>Pet Food and Supplies</span>
        </a>
      </li>
    </ul>
  
  </div>

        </div>
      </div>

      
      <YouCart/>
      <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasCart">
        <div className="offcanvas-header justify-content-center">
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          
          <div class="collapse" id="beverages-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal ps-5 pb-1">
                <li class="border-bottom py-2"><a href="index.html" class="dropdown-item">Water</a></li>
                <li class="border-bottom py-2"><a href="index.html" class="dropdown-item">Juice</a></li>
                <li class="border-bottom py-2"><a href="index.html" class="dropdown-item">Soda</a></li>
                <li class="border-bottom py-2"><a href="index.html" class="dropdown-item">Tea</a></li>
              </ul>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


