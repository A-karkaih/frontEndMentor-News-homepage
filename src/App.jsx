import { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-[90%] md:w-[80%] h-[90vh] mx-auto mt-10 mb-10">
      <nav className="flex justify-between items-center h-[10%]">
        <h1 className="text-3xl md:text-4xl text-black font-black">W.</h1>
        <div className="hidden md:flex gap-4 lg:gap-9 text-slate-500">
          <h2 className="hover:text-orange-300 cursor-pointer tracking-wide">
            Home
          </h2>
          <h2 className="hover:text-orange-300 cursor-pointer tracking-wide">
            New
          </h2>
          <h2 className="hover:text-orange-300 cursor-pointer tracking-wide">
            Popular
          </h2>
          <h2 className="hover:text-orange-300 cursor-pointer tracking-wide">
            Trending
          </h2>
          <h2 className="hover:text-orange-300 cursor-pointer tracking-wide">
            Categories
          </h2>
        </div>
        {isOpen ? (
          <div className="absolute top-0 right-0 w-[70vw] sm:w-[50vw] bg-white shadow-2xl h-[100vh] lg:hidden">
            <div
              className="w-[100%] mt-7"
              onClick={() => setIsOpen(false)}
            >
              <img
                className="ml-auto mr-2 cursor-pointer"
                src={`/images/icon-menu-close.svg`}
                alt="menu svg"
              />
            </div>
            <div className="mt-5 p-5 gap-5 flex flex-col">
              <h1 className="cursor-pointer">Home</h1>
              <h1 className="cursor-pointer">New</h1>
              <h1 className="cursor-pointer">Popular</h1>
              <h1 className="cursor-pointer">Trending</h1>
              <h1 className="cursor-pointer">Categories</h1>
            </div>
          </div>
        ) : (
          <div
            className="flex lg:hidden cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <img src={`/images/icon-menu.svg`} alt="menu svg" />
          </div>
        )}
      </nav>

      <div className="h-auto flex flex-col md:flex-row gap-5 md:gap-[3%] mt-8">
        <div className="h-auto w-full md:w-[71%]">
          <div className="h-[55%] image1">
            <img
              className="object-cover h-[100%] w-[100%]"
              src="/images/image-web-3-desktop.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col md:flex-row h-[43%] mt-[1%]">
            <div className="flex-1">
              <div className="w-[90%]">
                <h1 className="text1 font-extrabold text-3xl md:text-5xl lg:text-6xl">
                  The Bright Future of Web 3.0?
                </h1>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between mt-4 md:mt-0">
              <p className="text2 text-[hsl(236,13%,42%)] text-lg w-[80%]">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <div className="h-[50px] w-[200px] bg-[#F05D50] flex items-center justify-center text-xl font-black cursor-pointer hover:opacity-80 mt-4 md:mt-0">
                Read More
              </div>
            </div>
          </div>
        </div>
        <div className="side h-auto w-full md:w-[26%] bg-[#01011A] p-4">
          <h1 className="text-[#EAAD55] text-4xl font-bold">New</h1>
          <div className="mt-5">
            <h2 className="text-white text-lg tracking-wide hover:text-[#EAAD55] cursor-pointer">
              Hydrogen VS Electric Cars
            </h2>
            <p className="text-[hsl(236,13%,42%)] text-[15px] mb-6">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
            <hr className="h-px bg-gray-700 border-0" />
          </div>
          <div className="mt-5">
            <h2 className="text-white text-lg tracking-wide hover:text-[#EAAD55] cursor-pointer">
              The Downsides of AI Artistry
            </h2>
            <p className="text-[hsl(236,13%,42%)] text-[15px] mb-6">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
            <hr className="h-px bg-gray-700 border-0" />
          </div>
          <div className="mt-5">
            <h2 className="text-white text-lg tracking-wide hover:text-[#EAAD55] cursor-pointer">
              Is VC Funding Drying Up?
            </h2>
            <p className="text-[hsl(236,13%,42%)] text-[15px] mb-6">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </div>

      <div className="footer h-auto flex flex-col md:flex-row justify-between gap-6 md:gap-3 mt-6">
        <div className="flex-1 flex gap-3">
          <img
            className="h-[127px] w-[110px]"
            src="/images/image-retro-pcs.jpg"
            alt=""
          />
          <div>
            <h1 className="text-[#F15D52] font-bold text-[30px]">01</h1>
            <h2 className="text-black font-bold text-lg">Reviving Retro PCs</h2>
            <p className="text-[hsl(236,13%,42%)] text-[15px]">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="flex-1 flex gap-3">
          <img
            className="h-[127px] w-[110px]"
            src="/images/image-top-laptops.jpg"
            alt=""
          />
          <div>
            <h1 className="text-[#F15D52] font-bold text-[30px]">02</h1>
            <h2 className="text-black font-bold text-lg">
              Top 10 Laptops of 2022
            </h2>
            <p className="text-[hsl(236,13%,42%)] text-[15px]">
              Our best picks for various needs and budget
            </p>
          </div>
        </div>
        <div className="flex-1 flex gap-3">
          <img
            className="h-[127px] w-[110px]"
            src="/images/image-gaming-growth.jpg"
            alt=""
          />
          <div>
            <h1 className="text-[#F15D52] font-bold text-[30px]">03</h1>
            <h2 className="text-black font-bold text-lg">
              The Growth of Gaming
            </h2>
            <p className="text-[hsl(236,13%,42%)] text-[15px]">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </div>
      <div className="h-6 w-full"></div>
    </div>
  );
};

export default App;
