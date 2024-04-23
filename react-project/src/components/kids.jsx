import './components.css'
import { BiSolidCartAdd } from "react-icons/bi";
import { IoBagCheckOutline } from "react-icons/io5";


export default function Kids(){
    return(
        <>
         <nav class="bg-black p-4 flex items-center justify-between">
    <div>
      <h1 class="text-white text-xl font-semibold"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcqQ0mgImK_63i3oPX3v1puU6cmgDFypFiT0q2t-KzFA&s" alt="Logo" class="w-16 h-auto"/>
</h1>
    </div>
    <div class="flex items-center space-x-4">
      <span class="mr-24 text-orange-500 text-5xl">QuickCart</span>
      <span class="text-white  text-4xl"><IoBagCheckOutline /></span>

      <i class="fas fa-user-circle text-white text-2xl"></i>
    </div>
  </nav>

  <aside class="pt-32 pl-6 bg-orange-500 text-white text-l w-64 min-h-screen p-4">
    <nav>
      <ul class="space-y-2">
        <li class="opcion-con-desplegable">
          <div class="flex items-center justify-between p-2 hover:bg-gray-700">
            <div class="flex items-center">
              <i class="fas fa-calendar-alt mr-2"></i>
              <span><a href="/men">Men</a></span>
            </div>
            <i class="fas fa-chevron-down text-xs"></i>
          </div>
          <ul class="desplegable ml-4 hidden">
            <li>
              <a href="#" class="block p-2 hover:bg-gray-700 flex items-center">
                <i class="fas fa-chevron-right mr-2 text-xs"></i>
              </a>
            </li>
            <li>
              <a href="#" class="block p-2 hover:bg-gray-700 flex items-center">
                <i class="fas fa-chevron-right mr-2 text-xs"></i>
                
              </a>
            </li>
          </ul>
        </li>
        <li class="opcion-con-desplegable">
          <div class="flex items-center justify-between p-2 hover:bg-gray-700">
            <div class="flex items-center">
              <i class="fas fa-money-bill-wave mr-2"></i>
              <span><a href="/women">Women</a></span>
            </div>
            <i class="fas fa-chevron-down text-xs"></i>
          </div>
          <ul class="desplegable ml-4 hidden">
            <li>
              <a href="#" class="block p-2 hover:bg-gray-700 flex items-center">
                <i class="fas fa-chevron-right mr-2 text-xs"></i>
              </a>
            </li>
            <li>
              <a href="#" class="block p-2 hover:bg-gray-700 flex items-center">
                <i class="fas fa-chevron-right mr-2 text-xs"></i>
              </a>
            </li>
            <li>
              <a href="#" class="block p-2 hover:bg-gray-700 flex items-center">
                <i class="fas fa-chevron-right mr-2 text-xs"></i>
              </a>
            </li>
          </ul>
        </li>
        <li class="opcion-con-desplegable">
          <div class="flex items-center justify-between p-2 hover:bg-gray-700">
            <div class="flex items-center">
              <i class="fas fa-chart-bar mr-2"></i>
              <span><a href="/kids">Kids</a></span>
            </div>
            <i class="fas fa-chevron-down text-xs"></i>
          </div>
          <ul class="desplegable ml-4 hidden">
            <li>
              <a href="#" class="block p-2 hover:bg-gray-700 flex items-center">
                <i class="fas fa-chevron-right mr-2 text-xs"></i>
              </a>
            </li>
            <li>
              <a href="#" class="block p-2 hover:bg-gray-700 flex items-center">
                <i class="fas fa-chevron-right mr-2 text-xs"></i>
              </a>
            </li>
          </ul>
        </li>
        <li class="opcion-con-desplegable">
          <div class="flex items-center justify-between p-2 hover:bg-gray-700">
            <div class="flex items-center">
              <i class="fas fa-file-alt mr-2"></i>
              <span><a href="/contact">Contact</a></span>
            </div>
            <i class="fas fa-chevron-down text-xs"></i>
          </div>
          <ul class="desplegable ml-4 hidden">
            <li>
              <a href="/contact" class="block p-2 hover:bg-gray-700 flex items-center">
                <i class="fas fa-chevron-right mr-2 text-xs"></i>
              </a>
            </li>
            <li>
              <a href="#" class="block p-2 hover:bg-gray-700 flex items-center">
                <i class="fas fa-chevron-right mr-2 text-xs"></i>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>

  <aside class="text-black" id="rightaside">
        

   
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="w-full bg-white rounded-lg flex flex-col justify-center items-center">
                <div class="mb-4">
                    <img class="object-center object-cover rounded h-56 w-56" src="https://m.media-amazon.com/images/I/91AUyGb+TJL._AC_UY350_DpWeblab_.jpg" alt="photo"/>
                </div>
                <div class="text-center">
                    <p class="text-xl text-gray-700 font-bold">Baby Apple Printed Frock</p>
                    <p class="text-base text-black font-normal ml-36">Rs.575 <span class="ml-36 text-2xl"><BiSolidCartAdd /></span></p>
                    {/* <span class="ml-40 text-4xl"><BiSolidCartAdd /></span> */}
                    
                </div>
            </div>
            <div class="w-full bg-white rounded-lg flex flex-col justify-center items-center">
                <div class="mb-4">
                    <img class="object-center object-cover rounded h-56 w-56" src="https://www.latestkurtidesigns.com/wp-content/uploads/2023/07/blue-dress.jpg" alt="photo"/>
                </div>
                <div class="text-center">
                    <p class="text-xl text-gray-700 font-bold ">Blue Party Wear Frock</p>
                    <p class="text-base text-black font-normal ml-36">Rs.670<span class="ml-36 text-2xl"><BiSolidCartAdd /></span></p>
                </div>
            </div>
            <div class="w-full bg-white rounded-lg flex flex-col justify-center items-center">
                <div class="mb-4">
                    <img class="object-center object-cover rounded h-56 w-56" src="https://staranddaisy.in/wp-content/uploads/2022/04/204627fsd.jpg" alt="photo"/>
                </div>
                <div class="text-center">
                    <p class="text-xl text-gray-700 font-bold">Blue Barbie Frock</p>
                    <p class="text-base text-black font-normal ml-36">Rs.980 <span class="ml-36 text-2xl"><BiSolidCartAdd /></span></p>
                </div>
            </div>
            <div class="w-full bg-white rounded-lg flex flex-col justify-center items-center">
                <div class="mb-4">
                    <img class="object-center object-cover rounded h-56 w-56" src="https://5.imimg.com/data5/AR/IV/FV/SELLER-33048404/kids-boy-party-wear-dress-1000x1000.jpg" alt="photo"/>
                </div>
                <div class="text-center">
                    <p class="text-xl text-gray-700 font-bold">Denim Baby Shirt</p>
                    <p class="text-base text-black font-normal ml-36">Rs.720 <span class="ml-36 text-2xl"><BiSolidCartAdd /></span></p>
                </div>
            </div>
            <div class="w-full bg-white rounded-lg flex flex-col justify-center items-center">
                <div class="mb-4">
                    <img class="object-center object-cover rounded h-56 w-56" src="https://images.meesho.com/images/products/252023427/lcvae_512.webp" alt="photo"/>
                </div>
                <div class="text-center">
                    <p class="text-xl text-gray-700 font-bold">Blue Georgette Frock</p>
                    <p class="text-base text-black font-normal ml-36">Rs.990 <span class="ml-36 text-2xl"><BiSolidCartAdd /></span></p>
                </div>
            </div>
            <div class="w-full bg-white rounded-lg flex flex-col justify-center items-center">
                <div class="mb-4">
                    <img class="object-center object-cover rounded h-56 w-56" src="https://fashion-wear.in/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-21-at-13.39.57-jpeg.webp" alt="photo"/>
                </div>
                <div class="text-center">
                    <p class="text-xl text-gray-700 font-bold">White Cool T-Shirt</p>
                    <p class="text-base text-black font-normal ml-36">Rs.300 <span class="ml-36 text-2xl"><BiSolidCartAdd /></span></p>
                </div>
            </div>
        </div>
    
    
      </aside>

 
        </>
    )
}