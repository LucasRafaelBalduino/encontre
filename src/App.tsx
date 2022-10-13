import './styles/main.css';

import backgroud from './assets/bannerheader.jpg'
import compre from './assets/compre_online.png';
import lojas from './assets/lojas.png';
import logo from './assets/logo.png';
import demo01 from './assets/demo01.jpg'
import demo02 from './assets/demo02.jpg'
import pintor from './assets/Banner_Pintor.jpg'
import Bannerdemo01 from './assets/Bannerdemo01.jpg';
import logofooter from './assets/grupo.png'


function App() {
  return (
    <>
    <div className='bg-[#F59103] max-w[1344px] flex justify-between items-center'>
      <img className='ml-[136px] my-4' src={logo} alt="" />
      <div className='mr-[139px]'>
        <button className='mr-6' type="button"> <img src={compre} alt=""/></button>
        <button type="button"> <img src={lojas} alt=""/></button>
    </div>
    </div>
    <div className=' mx-auto flex flex-col items-center'>
      <img src={backgroud} alt="" />
      <div className=" flex max-w-[1344px] mx-auto bg-[#2E2F7B]  p-6 rounded-xl mt-[-30px] ">
    <div className="relative ml-4  bg-[#ffffff] rounded-xl">
	<button className="text-xl w-[159px] inline-flex items-center h-12 px-5 text-[#2E2F7B] transition-colors duration-150  rounded-lg focus:shadow-outline hover:bg-[#EB7700]">
	  <span>Estados</span>
	  <svg className="w-4 h-4 ml-10 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
	</button>
  </div>
  <div className="relative ml-14 bg-[#ffffff] rounded-xl">
	<button className="text-xl w-[159px] inline-flex items-center h-12 px-5 text-[#2E2F7B] transition-colors duration-150  rounded-lg focus:shadow-outline hover:bg-[#EB7700]">
	  <span>Cidade</span>
	  <svg className="w-4 h-4 ml-10 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
	</button>
  </div>
  <div className="relative ml-14  bg-[#ffffff] rounded-xl">
	<button className="text-xl w-[281px]  inline-flex items-center h-12 px-5 text-[#2E2F7B] transition-colors duration-150  rounded-lg focus:shadow-outline hover:bg-[#EB7700]">
	  <span>Especialidade</span>
    <svg className="w-4 h-4 ml-24 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
	</button>
  
  </div>
  <div className="relative ml-14  bg-[#EB7700] rounded-xl">
	 <button className="text-xl w-[117px] font-bold inline-flex items-center h-12 px-5 text-[#ffffff] transition-colors duration-150  rounded-lg focus:shadow-outline hover:bg-[#EB7700]">
    BUSCAR
   </button>
  </div>
</div>
    </div>

    <div className="p-6 max-w-[1344px] mx-auto flex flex-col items-center">
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
  <div className="overflow-hidden rounded-2xl bg-gray-50">
      <div className="flex items-center h-[180px] overflow-hidden">
        <img src={demo01} alt="Hamburger" />
      </div>

      <div className="p-6">
        <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
          <div>
            <h2 className="mt-2 text-lg font-semibold text-gray-800">Nome do Pintor</h2>
            <p className="text-gray-400">Curitiba</p>
          </div>
        </div>

        <hr className="mt-4 mb-4" />

        <div className="flex flex-wrap justify-between">
          <p className="inline-flex items-center">

            <span className="mt-2 inline-block rounded-md bg-orange-400 p-3 text-center font-medium text-white"> Saiba mais </span>

          </p>

          <p className="inline-flex items-center text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>

            <span className="ml-2"> 5.0 </span>
          </p>
        </div>
      </div>
    </div>    
    <div className="overflow-hidden rounded-2xl bg-gray-50">
      <div className="flex items-center h-[180px] overflow-hidden">
        <img src={demo02} alt="Hamburger" />
      </div>

      <div className="p-6">
        <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
          <div>
            <h2 className="mt-2 text-lg font-semibold text-gray-800">Nome do Pintor</h2>
            <p className="text-gray-400">Curitiba</p>
          </div>
        </div>

        <hr className="mt-4 mb-4" />

        <div className="flex flex-wrap justify-between">
          <p className="inline-flex items-center">

            <span className="mt-2 inline-block rounded-md bg-orange-400 p-3 text-center font-medium text-white"> Saiba mais </span>

          </p>

          <p className="inline-flex items-center text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>

            <span className="ml-2"> 5.0 </span>
          </p>
        </div>
      </div>
    </div>
    <div className="overflow-hidden rounded-2xl bg-gray-50">
      <div className="flex items-center h-[180px] overflow-hidden">
        <img src={demo01} alt="Hamburger" />
      </div>

      <div className="p-6">
        <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
          <div>
            <h2 className="mt-2 text-lg font-semibold text-gray-800">Nome do Pintor</h2>
            <p className="text-gray-400">Curitiba</p>
          </div>
        </div>

        <hr className="mt-4 mb-4" />

        <div className="flex flex-wrap justify-between">
          <p className="inline-flex items-center">

            <span className="mt-2 inline-block rounded-md bg-orange-400 p-3 text-center font-medium text-white"> Saiba mais </span>

          </p>

          <p className="inline-flex items-center text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>

            <span className="ml-2"> 5.0 </span>
          </p>
        </div>
      </div>
    </div>    
    <div className="overflow-hidden rounded-2xl bg-gray-50">
      <div className="flex items-center h-[180px] overflow-hidden">
        <img src={demo02} alt="Hamburger" />
      </div>

      <div className="p-6">
        <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
          <div>
            <h2 className="mt-2 text-lg font-semibold text-gray-800">Nome do Pintor</h2>
            <p className="text-gray-400">Curitiba</p>
          </div>
        </div>

        <hr className="mt-4 mb-4" />

        <div className="flex flex-wrap justify-between">
          <p className="inline-flex items-center">

            <span className="mt-2 inline-block rounded-md bg-orange-400 p-3 text-center font-medium text-white"> Saiba mais </span>

          </p>

          <p className="inline-flex items-center text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>

            <span className="ml-2"> 5.0 </span>
          </p>
        </div>
      </div>
    </div>  <div className="overflow-hidden rounded-2xl bg-gray-50">
      <div className="flex items-center h-[180px] overflow-hidden">
        <img src={demo01} alt="Hamburger" />
      </div>

      <div className="p-6">
        <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
          <div>
            <h2 className="mt-2 text-lg font-semibold text-gray-800">Nome do Pintor</h2>
            <p className="text-gray-400">Curitiba</p>
          </div>
        </div>

        <hr className="mt-4 mb-4" />

        <div className="flex flex-wrap justify-between">
          <p className="inline-flex items-center">

            <span className="mt-2 inline-block rounded-md bg-orange-400 p-3 text-center font-medium text-white"> Saiba mais </span>

          </p>

          <p className="inline-flex items-center text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>

            <span className="ml-2"> 5.0 </span>
          </p>
        </div>
      </div>
    </div>    
    <div className="overflow-hidden rounded-2xl bg-gray-50">
      <div className="flex items-center h-[180px] overflow-hidden">
        <img src={demo02} alt="Hamburger" />
      </div>

      <div className="p-6">
        <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
          <div>
            <h2 className="mt-2 text-lg font-semibold text-gray-800">Nome do Pintor</h2>
            <p className="text-gray-400">Curitiba</p>
          </div>
        </div>

        <hr className="mt-4 mb-4" />

        <div className="flex flex-wrap justify-between">
          <p className="inline-flex items-center">

            <span className="mt-2 inline-block rounded-md bg-orange-400 p-3 text-center font-medium text-white"> Saiba mais </span>

          </p>

          <p className="inline-flex items-center text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>

            <span className="ml-2"> 5.0 </span>
          </p>
        </div>
      </div>
    </div>  <div className="overflow-hidden rounded-2xl bg-gray-50">
      <div className="flex items-center h-[180px] overflow-hidden">
        <img src={demo01} alt="Hamburger" />
      </div>

      <div className="p-6">
        <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
          <div>
            <h2 className="mt-2 text-lg font-semibold text-gray-800">Nome do Pintor</h2>
            <p className="text-gray-400">Curitiba</p>
          </div>
        </div>

        <hr className="mt-4 mb-4" />

        <div className="flex flex-wrap justify-between">
          <p className="inline-flex items-center">

            <span className="mt-2 inline-block rounded-md bg-orange-400 p-3 text-center font-medium text-white"> Saiba mais </span>

          </p>

          <p className="inline-flex items-center text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>

            <span className="ml-2"> 5.0 </span>
          </p>
        </div>
      </div>
    </div>    
    <div className="overflow-hidden rounded-2xl bg-gray-50">
      <div className="flex items-center h-[180px] overflow-hidden">
        <img src={demo02} alt="Hamburger" />
      </div>

      <div className="p-6">
        <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
          <div>
            <h2 className="mt-2 text-lg font-semibold text-gray-800">Nome do Pintor</h2>
            <p className="text-gray-400">Curitiba</p>
          </div>
        </div>

        <hr className="mt-4 mb-4" />

        <div className="flex flex-wrap justify-between">
          <p className="inline-flex items-center">

            <span className="mt-2 inline-block rounded-md bg-orange-400 p-3 text-center font-medium text-white"> Saiba mais </span>

          </p>

          <p className="inline-flex items-center text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>

            <span className="ml-2"> 5.0 </span>
          </p>
        </div>
      </div>
    </div>
    
  </div>
</div>

<div className='max-w-[1344px] mx-auto flex flex-col items-center my-10'>
<p className="inline-flex items-center">
<span className="w-44 h-12 inline-block rounded-xl bg-orange-400 p-3 text-center text-xl font-semibold text-white"> VER TODOS </span>
</p>
</div>

<div className='bg-[#F1F2F2]   mx-auto flex flex-col items-center m'>
  <h1 className=' text-4xl text-[#2E2F7B]  mt-20'>OFERTAS <span className='font-black'>VERGINIA</span> </h1>
  
  <div className='mx-auto items-center max-w-[1144px] grid grid-cols-4 gap-7 my-16'>
  <a className='relative rounded-3xl overflow-hidden' href="http://">
    <img src={Bannerdemo01} alt="" />
   </a>
   <a className='relative rounded-3xl overflow-hidden' href="http://">
    <img src={Bannerdemo01} alt="" />
   </a>
   <a className='relative rounded-3xl overflow-hidden' href="http://">
    <img src={Bannerdemo01} alt="" />
   </a>
   <a className='relative rounded-3xl overflow-hidden' href="http://">
    <img src={Bannerdemo01} alt="" />
   </a>

  </div>

</div>


<div className=' mx-auto flex flex-col items-center'>
      <img src={pintor} alt="" />

    </div>


    <footer className="px-3 py-8 bg-[#F59103] text-2 text-gray-500 dark:text-gray-200 transition-colors duration-200">
    <div className="flex flex-col">

        <div className="mt-4 md:mt-0 flex flex-col md:flex-row">
        <div>
        <img className='ml-[136px] my-4 px-44 py-14 mt-8' src={logofooter} alt="" />
      </div>
            <div className="mt-4 md:mt-0 flex-1 flex items-center justify-center md:border-r border-gray-100">
            <div>
        <strong className=' text-2xl text-[#2E2F7B] font-black block mb-4 mr-10'>
          Receba novidades e promoções!
        </strong>
        <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
    <div className=" relative ">
        <input type="text" id="&quot;form-subscribe-Subscribe" className=" rounded-xl border-transparent flex-1 appearance-none border border-[#2E2F7B] w-full py-2 px-64 bg-[#F59103] text-white placeholder-[#2E2F7B] shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#2E2F7B] focus:border-transparent" placeholder="Digite seu e-mail"/>
        </div>
        <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-[#2E2F7B] rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
            Subscribe
        </button>
    </form>
      <div className='grid grid-cols-3 gap-4 my-1'>
      <button type="button" className="py-2 px-4  bg-[#2E2F7B] hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
        COMPRE ONLINE
      </button>
      <button type="button" className="py-2 px-4   hover:bg-[#b4741ae7] focus:ring-indigo-500 focus:ring-offset-indigo-200 
      text-[#2E2F7B] w-full transition ease-in duration-200 text-center 
      text-base font-bold focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
        COMPRE ONLINE
      </button>
      <button type="button" className="py-2 px-4   hover:bg-[#b4741ae7] focus:ring-indigo-500 focus:ring-offset-indigo-200 text-[#2E2F7B]  
      w-full transition ease-in duration-200 text-center text-base font-bold focus:outline-none focus:ring-2 
      focus:ring-offset-2  rounded-lg ">
        COMPRE ONLINE
      </button>
      </div>

      </div>

            </div>

        </div>
    </div>
</footer>
    </>
  )
}

export default App
