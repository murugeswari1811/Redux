import './components.css'
import { BiSolidCartAdd } from "react-icons/bi";
import { IoBagCheckOutline } from "react-icons/io5";



export default function Women(){
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
                    <img class="object-center object-cover rounded h-56 w-56" src="https://m.media-amazon.com/images/I/51JBy6cn55L._AC_UY1100_.jpg" alt="photo"/>
                </div>
                <div class="text-center">
                    <p class="text-xl text-gray-700 font-bold">Black Crop Top</p>
                    <p class="text-base text-black font-normal ml-36">Rs.245 <span class="ml-36 text-2xl"><BiSolidCartAdd /></span></p>
                    
                </div>
            </div>
            <div class="w-full bg-white rounded-lg flex flex-col justify-center items-center">
                <div class="mb-4">
                    <img class="object-center object-cover rounded h-56 w-56" src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19524874/2022/8/17/0fb689b3-28b4-4f6a-be08-a2ce9dfedcdc1660715206206QOMNBluePrintMandarinCollarTop1.jpg" alt="photo"/>
                </div>
                <div class="text-center">
                    <p class="text-xl text-gray-700 font-bold ">Blue Jean Top</p>
                    <p class="text-base text-black font-normal ml-36">Rs.530 <span class="ml-36 text-2xl"><BiSolidCartAdd /></span></p>
                </div>
            </div>
            <div class="w-full bg-white rounded-lg flex flex-col justify-center items-center">
                <div class="mb-4">
                    <img class="object-center object-cover rounded h-56 w-56" src="https://assets.ajio.com/medias/sys_master/root/20230628/TXCu/649be94ba9b42d15c90dcc7c/-473Wx593H-465859234-white-MODEL.jpg" alt="photo"/>
                </div>
                <div class="text-center">
                    <p class="text-xl text-gray-700 font-bold">White Kurti</p>
                    <p class="text-base text-black font-normal ml-36">Rs.670 <span class="ml-36 text-2xl"><BiSolidCartAdd /></span></p>
                </div>
            </div>
            <div class="w-full bg-white rounded-lg flex flex-col justify-center items-center">
                <div class="mb-4">
                    <img class="object-center object-cover rounded h-56 w-56" src="https://www.zeelclothing.com/media/catalog/product/cache/1a663af2519e1158a3f1f53631c1a350/y/n/ynf3501red_1_.jpg" alt="photo"/>
                </div>
                <div class="text-center">
                    <p class="text-xl text-gray-700 font-bold">Brown Jean Kurti</p>
                    <p class="text-base text-black font-normal ml-36">Rs.395 <span class="ml-36 text-2xl"><BiSolidCartAdd /></span></p>
                </div>
            </div>
            <div class="w-full bg-white rounded-lg flex flex-col justify-center items-center">
                <div class="mb-4">
                    <img class="object-center object-cover rounded h-56 w-56" src="https://walusha.in/cdn/shop/files/WALUSHA-6.jpg?v=1701765782" alt="photo"/>
                </div>
                <div class="text-center">
                    <p class="text-xl text-gray-700 font-bold">Alia Kurti</p>
                    <p class="text-base text-black font-normal ml-36">Rs.580 <span class="ml-36 text-2xl"><BiSolidCartAdd /></span></p>
                </div>
            </div>
            <div class="w-full bg-white rounded-lg flex flex-col justify-center items-center">
                <div class="mb-4">
                    <img class="object-center object-cover rounded h-56 w-56" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6E4NZfgGrU3jiPw84G6YElWX_CWV8DaeGjWHbuhrJ3A&s" alt="photo"/>
                </div>
                <div class="text-center">
                    <p class="text-xl text-gray-700 font-bold">White Plain Frock</p>
                    <p class="text-base text-black font-normal ml-36">Rs.499 <span class="ml-36 text-2xl"><BiSolidCartAdd /></span></p>
                </div>
            </div>
        </div>
    
    
      </aside>
 
        </>
    )
}