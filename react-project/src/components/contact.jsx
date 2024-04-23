import { useNavigate } from "react-router-dom"
import { FaBackward } from "react-icons/fa";
import { setData } from "./store/counterSlice";
import { useDispatch ,useSelector} from "react-redux";

export default function Contact(){
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const data=useSelector((state)=>state.counter.data)
    console.log(data)
    return(
        <>
        <div class = "relative flex min-h-screen flex-col justify-center overflow-hidden bg-black py-4 sm:py-12">
        <button type="button" class="ml-6 bg-black text-white text-2xl font-bold rounded" onClick={()=>navigate(-1)}><FaBackward /></button>
        <div class = "bg-white max-w-4xl mx-auto w-full">
        <div class = "grid grid-cols-6 h-full">
        <div class = "bg-orange-500 p-10 col-span-2">
        <h2  class = "mb-10 font-bold text-2xl text-black before:block before:absolute before:bg-white before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">Contact Address</h2>
        <p   class = "font-bold text-black py-8 border-b border-blue-700">
          Location Address
          <span class = "font-normal text-xs text-black block">16,West Street,Vadasery,Nagercoil,629001.</span>
        </p>
        <p class = "font-bold text-black py-8 border-b border-blue-700">
          Phone Number
          <span class = "font-normal text-xs text-black block">+91 9629604674</span>
        </p>
        <p class = "font-bold text-black py-8 border-b border-blue-700">
          Email Address
          <span class = "font-normal text-xs text-black block">quickcart@gmail.com</span>
        </p>
        <p class = "font-bold text-black py-8 border-b border-blue-700">
          Web Address
          <span class = "font-normal text-xs text-black block">www.quickcart.com</span>
        </p>

      </div>
      <div   class = "bg-white p-14 col-span-4">
      <h2    class = "mb-14 font-bold text-4xl text-black before:block before:absolute before:bg-orange-500 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">Enter your contact here!</h2>
      <div   class = "grid gap-6 mb-6 grid-cols-2">
      <div   class = "flex flex-col">
      <input class = "py-4 bg-white rounded-full px-6 placeholder:text-xs" aria-placeholder = "Votre nom" placeholder = "First Name" onKeyUp={(e)=>dispatch(setData({...data ,firstName:e.target.value}))}></input>
          </div>
          <div   class = "flex flex-col">
          <input class = "py-4 bg-white rounded-full px-6 placeholder:text-xs" aria-placeholder = "Votre nom" placeholder = "Last Name" onKeyUp={(e)=>dispatch(setData({...data ,lastName:e.target.value}))}></input>
          </div>
        </div>
        <div   class = "grid gap-6 mb-6 grid-cols-2">
        <div   class = "flex flex-col">
        <input class = "py-4 bg-white rounded-full px-6 placeholder:text-xs" aria-placeholder = "Votre nom" placeholder = "Email Address" onKeyUp={(e)=>dispatch(setData({...data ,email:e.target.value}))}></input>
          </div>
          <div   class = "flex flex-col">
          <input class = "py-4 bg-white rounded-full px-6 placeholder:text-xs" aria-placeholder = "Votre nom" placeholder = "Subject" onKeyUp={(e)=>dispatch(setData({...data ,subject:e.target.value}))}></input>
          </div>
        </div>
        <div      class = "mb-6">
        <textarea class = "w-full rounded-2xl placeholder:text-xs px-6 py-4" placeholder = "Enter Message" name = "" id = "" rows = "8" onKeyUp={(e)=>dispatch(setData({...data ,message:e.target.value}))}></textarea>
        </div>
        <div    class = "flex justify-center">
        <button class = "rounded-full bg-black text-white font-bold py-4 px-6 min-w-40 hover:bg-orange-500 transition-all">Send</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
}