export default function MarketMaking() {
  return (
    <section id="market-making" className="flex flex-col items-center gap-12 w-full">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 px-4 lg:px-[100px] w-full">
        <div className="flex flex-col items-start">
          <div className="flex px-2 py-1 rounded-lg bg-black">
            <h2 className="text-white font-poppins text-2xl lg:text-[40px] font-medium leading-normal">
              Market Making
            </h2>
          </div>
        </div>
        <p className="flex-1 text-black font-poppins text-lg lg:text-2xl font-normal leading-normal">
          We provide liquidity and market making services for exchanges and token projects. Every partnership is tailored. Every result is measurable.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-6 w-full max-w-[1225px] px-4">
        {/* Exchange Liquidity Provision - Main Card */}
        <div className="w-full lg:w-[567.5px] bg-black rounded-[50px] p-8 lg:p-[50px] relative min-h-[400px] lg:min-h-[572px] flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 bg-white rounded-full p-4 w-fit">
              <svg className="w-10 h-10" viewBox="0 0 41 40" fill="none">
                <path d="M13.8333 10H30.5M10.5 20H25.5M18.8333 30H30.5" stroke="#18181B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-white font-poppins text-2xl lg:text-[40px] font-medium leading-normal">
              Exchange Liquidity Provision
            </h3>
          </div>
          <p className="text-white font-poppins text-lg lg:text-2xl font-normal leading-normal">
            We support both centralised and decentralised exchanges with tight spreads, consistent volume, and market depth — without adding operational overhead to your team.
          </p>
          
          {/* Chrome illustration */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/c9164b14aa018241bb3d93e782788cfa9b8908b1?width=342"
            alt=""
            className="absolute top-2 right-4 w-[120px] lg:w-[171px] h-auto hidden lg:block"
          />
        </div>

        {/* Right side cards */}
        <div className="flex flex-col gap-6 w-full lg:w-[673px]">
          {/* Feature cards */}
          <div className="bg-white rounded-[50px] p-8 lg:p-12 flex items-center gap-6">
            <div className="bg-black rounded-full p-4 flex-shrink-0">
              <svg className="w-10 h-10" viewBox="0 0 40 41" fill="none">
                <path d="M10.1333 16.1667L4.30001 18.8333C4.01369 18.9679 3.77158 19.1812 3.602 19.4483C3.43242 19.7154 3.34237 20.0253 3.34237 20.3417C3.34237 20.6581 3.43242 20.9679 3.602 21.235C3.77158 21.5021 4.01369 21.7154 4.30001 21.85L18.6333 28.3667C19.0653 28.5623 19.5341 28.6635 20.0083 28.6635C20.4826 28.6635 20.9513 28.5623 21.3833 28.3667L35.6833 21.8667C35.9791 21.7363 36.2306 21.5227 36.4071 21.2519C36.5836 20.9811 36.6776 20.6649 36.6776 20.3417C36.6776 20.0184 36.5836 19.7022 36.4071 19.4314C36.2306 19.1607 35.9791 18.9471 35.6833 18.8167L29.85 16.1667M10.1333 24.5L4.30001 27.1667C4.01369 27.3013 3.77158 27.5146 3.602 27.7817C3.43242 28.0488 3.34237 28.3586 3.34237 28.675C3.34237 28.9914 3.43242 29.3012 3.602 29.5683C3.77158 29.8354 4.01369 30.0487 4.30001 30.1833L18.6333 36.7C19.0653 36.8956 19.5341 36.9968 20.0083 36.9968C20.4826 36.9968 20.9513 36.8956 21.3833 36.7L35.6833 30.2C35.9791 30.0696 36.2306 29.856 36.4071 29.5852C36.5836 29.3145 36.6776 28.9982 36.6776 28.675C36.6776 28.3518 36.5836 28.0355 36.4071 27.7648C36.2306 27.494 35.9791 27.2804 35.6833 27.15L29.85 24.5M21.3834 3.96686C20.9491 3.76877 20.4773 3.66626 20 3.66626C19.5227 3.66626 19.051 3.76877 18.6167 3.96686L4.33335 10.4669C4.0376 10.5973 3.78615 10.8109 3.60963 11.0816C3.4331 11.3524 3.33911 11.6686 3.33911 11.9919C3.33911 12.3151 3.4331 12.6313 3.60963 12.9021C3.78615 13.1729 4.0376 13.3864 4.33335 13.5169L18.6334 20.0335C19.0676 20.2316 19.5394 20.3341 20.0167 20.3341C20.494 20.3341 20.9657 20.2316 21.4 20.0335L35.7 13.5335C35.9958 13.4031 36.2472 13.1895 36.4238 12.9188C36.6003 12.648 36.6943 12.3317 36.6943 12.0085C36.6943 11.6853 36.6003 11.369 36.4238 11.0983C36.2472 10.8275 35.9958 10.6139 35.7 10.4835L21.3834 3.96686Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-black font-poppins text-lg lg:text-2xl font-medium leading-normal">
              Improve liquidity depth in the order books
            </p>
          </div>

          <div className="bg-white rounded-[50px] p-8 lg:p-12 flex items-center gap-6">
            <div className="bg-black rounded-full p-4 flex-shrink-0">
              <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                <path d="M3.33325 15L8.33325 20L3.33325 25M14.9999 5H33.3333C34.2537 5 34.9999 5.74619 34.9999 6.66667V15C34.9999 15.9205 34.2537 16.6667 33.3333 16.6667H14.9999C14.0794 16.6667 13.3333 15.9205 13.3333 15V6.66667C13.3333 5.74619 14.0794 5 14.9999 5ZM14.9999 23.3333H33.3333C34.2537 23.3333 34.9999 24.0795 34.9999 25V33.3333C34.9999 34.2538 34.2537 35 33.3333 35H14.9999C14.0794 35 13.3333 34.2538 13.3333 33.3333V25C13.3333 24.0795 14.0794 23.3333 14.9999 23.3333Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-black font-poppins text-lg lg:text-2xl font-medium leading-normal">
              Tighten the spread between the bid & ask
            </p>
          </div>

          <div className="bg-white rounded-[50px] p-8 lg:p-12 flex items-center gap-6">
            <div className="bg-black rounded-full p-4 flex-shrink-0">
              <svg className="w-10 h-10" viewBox="0 0 40 41" fill="none">
                <path d="M5 4V37.3333M35 4V37.3333M8.33333 9H11.6667C13.5076 9 15 10.4924 15 12.3333V29C15 30.841 13.5076 32.3333 11.6667 32.3333H8.33333C6.49238 32.3333 5 30.841 5 29V12.3333C5 10.4924 6.49238 9 8.33333 9ZM28.3333 12.3333H31.6667C33.5076 12.3333 35 13.8257 35 15.6667V25.6667C35 27.5076 33.5076 29 31.6667 29H28.3333C26.4924 29 25 27.5076 25 25.6667V15.6667C25 13.8257 26.4924 12.3333 28.3333 12.3333Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-black font-poppins text-lg lg:text-2xl font-medium leading-normal">
              Arbitrage between pairs, exchanges and liquidity pools.
            </p>
          </div>
        </div>
      </div>

      {/* Token Market Making Card */}
      <div className="bg-black rounded-[50px] p-8 lg:p-[50px] w-full max-w-[1225px] mx-4 relative min-h-[350px] lg:min-h-[476px] flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-6 max-w-[586px]">
            <div className="flex items-center gap-2 bg-white rounded-full p-4 w-fit">
              <svg className="w-10 h-10" viewBox="0 0 41 40" fill="none">
                <path d="M30.6497 17.2836C32.2252 17.8709 33.6271 18.8461 34.7259 20.1189C35.8247 21.3917 36.5848 22.921 36.9359 24.5653C37.287 26.2097 37.2178 27.9161 36.7347 29.5266C36.2516 31.1372 35.3702 32.5999 34.172 33.7796C32.9738 34.9592 31.4975 35.8177 29.8796 36.2756C28.2617 36.7335 26.5545 36.7761 24.9158 36.3993C23.2771 36.0226 21.7599 35.2387 20.5044 34.1202C19.2489 33.0017 18.2957 31.5847 17.733 30.0002M12.1666 10H13.8333V16.6667M28.3497 23.1332L29.5163 24.3165L24.8163 29.0165M23.8333 13.3334C23.8333 18.8562 19.3561 23.3334 13.8333 23.3334C8.3104 23.3334 3.83325 18.8562 3.83325 13.3334C3.83325 7.81053 8.3104 3.33337 13.8333 3.33337C19.3561 3.33337 23.8333 7.81053 23.8333 13.3334Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-white font-poppins text-2xl lg:text-[40px] font-medium leading-normal">
              Token Market Making
            </h3>
          </div>
          
          {/* Bitcoin coin illustration */}
          <div className="hidden lg:block w-[159px] h-[159px] relative">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/6def23af59225c1b370c123a38402848a177ecdf?width=318"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
        
        <p className="text-white font-poppins text-lg lg:text-2xl font-normal leading-normal max-w-[966px]">
          We help token projects launch and scale with healthy, active markets across venues. From pre-listing prep to long-term support, we are proactive - not reactive - in ensuring healthy markets for your token.
        </p>
      </div>
    </section>
  );
}
