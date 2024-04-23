import { useNavigate } from "react-router-dom"
export default function Home(){
    const navigate=useNavigate();
    return(
        <>
<section class="bg-[url('https://img.freepik.com/free-photo/arrangement-black-friday-shopping-carts-with-copy-space_23-2148667047.jpg')] bg-cover bg-center h-screen">
  <div class="flex h-full w-full items-center justify-center container mx-auto px-8">
    <div class="max-w-2xl text-center">
      <h1 class="text-3xl sm:text-5xl capitalize tracking-widest text-white lg:text-7xl">QuickCart</h1>

      <p class="mt-6 lg:text-lg text-white">Discover the look you’ve been searching for at our latest fashion sale. Shop now!
</p>

      <div class="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">

        <button class="transform rounded-md bg-orange-500 px-10 py-6 text-l font-medium capitalize tracking-wide text-black transition-colors duration-200 hover:bg-white focus:bg-white focus:outline-none sm:mx-2" onClick={()=>navigate('/men')}>Get Started</button>
      </div>
    </div>
  </div>
</section>

        </>
    )
}