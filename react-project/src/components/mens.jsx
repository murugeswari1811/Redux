import './components.css'
import { BiSolidCartAdd } from "react-icons/bi";
import { IoBagCheckOutline } from "react-icons/io5";



export default function Men(){
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

  <aside class="pt-32 pl-6 bg-orange-500 text-white text-l w-64 min-h-screen p-4 ">
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
                <img class="object-center object-cover rounded h-56 w-56" src="https://rukminim2.flixcart.com/image/550/650/xif0q/shirt/c/o/e/s-st10-vebnor-original-imagzdsu8hkehz8f.jpeg?q=90&crop=false" alt="photo"/>
            </div>
            <div class="text-center">
                <p class="text-xl text-gray-700 font-bold">Black Shirt</p>
                <p class="text-base text-black font-normal ml-36">Rs.250 <span class="ml-36 text-2xl"><BiSolidCartAdd /></span></p>
                
            </div>
        </div>
        <div class="w-full bg-white rounded-lg flex flex-col justify-center items-center">
            <div class="mb-4">
                <img class="object-center object-cover rounded h-56 w-56" src="https://www.montecarlo.in/cdn/shop/products/2240401149FS-2-38_1.jpg?v=1707463662&width=1100" alt="photo"/>
            </div>
            <div class="text-center">
                <p class="text-xl text-gray-700 font-bold ">Lined Green Shirt</p>
                <p class="text-base text-black font-normal ml-36">Rs.540 <span class="ml-36 text-2xl"><BiSolidCartAdd /></span></p>
            </div>
        </div>
        <div class="w-full bg-white rounded-lg flex flex-col justify-center items-center">
            <div class="mb-4">
                <img class="object-center object-cover rounded h-56 w-56" src="https://sslimages.shoppersstop.com/sys-master/images/hb9/hb7/29503753224222/S23FLINSTP194NV_NAVY.jpg_230Wx334H" alt="photo"/>
            </div>
            <div class="text-center">
                <p class="text-xl text-gray-700 font-bold">Blue Plain Shirt</p>
                <p class="text-base text-black font-normal ml-36">Rs.670 <span class="ml-36 text-2xl"><BiSolidCartAdd /></span></p>
            </div>
        </div>
        <div class="w-full bg-white rounded-lg flex flex-col justify-center items-center">
            <div class="mb-4">
                <img class="object-center object-cover rounded h-56 w-56" src="https://1099554485.rsc.cdn77.org/upload/products/medium/river_blue_cotton_plain_white_casual_wear_shirt_1698473036sm_04598(white)_1.jpg" alt="photo"/>
            </div>
            <div class="text-center">
                <p class="text-xl text-gray-700 font-bold">White Plain Shirt</p>
                <p class="text-base text-black font-normal ml-36">Rs.390 <span class="ml-36 text-2xl"><BiSolidCartAdd /></span></p>
            </div>
        </div>
        <div class="w-full bg-white rounded-lg flex flex-col justify-center items-center">
            <div class="mb-4">
                <img class="object-center object-cover rounded h-56 w-56" src="https://cdn.shopify.com/s/files/1/0274/0086/3853/t/31/assets/f3d07d21898a--GSOSHSSHRT3014RED-2-a7569f.jpeg?v=1705652729" alt="photo"/>
            </div>
            <div class="text-center">
                <p class="text-xl text-gray-700 font-bold">Red Plain Shirt</p>
                <p class="text-base text-black font-normal ml-36">Rs.690 <span class="ml-36 text-2xl"><BiSolidCartAdd /></span></p>
            </div>
        </div>
        <div class="w-full bg-white rounded-lg flex flex-col justify-center items-center">
            <div class="mb-4">
                <img class="object-center object-cover rounded h-56 w-56" src="https://getketchadmin.getketch.com/product/8907787940739/300/1.jpg" alt="photo"/>
            </div>
            <div class="text-center">
                <p class="text-xl text-gray-700 font-bold">White Checked Shirt</p>
                <p class="text-base text-black font-normal ml-36">Rs.490 <span class="ml-36 text-2xl"><BiSolidCartAdd /></span></p>
            </div>
        </div>
    </div>


  </aside>

 
        </>
    )
}