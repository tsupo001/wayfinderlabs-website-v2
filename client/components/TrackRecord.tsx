export default function TrackRecord() {
  return (
    <section id="track-record" className="flex flex-col items-center gap-12 w-full">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 px-4 lg:px-[100px] w-full">
        <div className="flex flex-col items-start">
          <div className="flex px-2 py-1 rounded-lg bg-black">
            <h2 className="text-white font-poppins text-2xl lg:text-[40px] font-medium leading-normal">
              Track Record
            </h2>
          </div>
        </div>
        <p className="flex-1 text-black font-poppins text-lg lg:text-2xl font-normal leading-normal">
          We're outcome-driven. Here's what we've done so far — and we're just getting started:
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center gap-6 px-4 max-w-[1225px] w-full">
        {/* Volume Supported Card */}
        <div className="w-full lg:w-[455px] bg-black rounded-[50px] p-8 lg:p-[54px] flex items-center justify-center min-h-[400px] lg:min-h-[571px]">
          <div className="flex flex-col items-start gap-12 lg:gap-[184px] w-full max-w-[335px]">
            <div className="text-white font-poppins text-4xl lg:text-[80px] font-medium leading-normal">
              $500M+
            </div>
            <div className="text-white font-poppins text-2xl lg:text-[48px] font-medium leading-normal">
              Daily Vol. Supported
            </div>
          </div>
        </div>

        {/* Partners and Venues */}
        <div className="flex flex-col gap-6 w-full lg:w-[746px]">
          {/* Partners Card */}
          <div className="bg-white rounded-[50px] p-8 lg:p-12 min-h-[250px] lg:min-h-[339px] flex flex-col gap-6">
            <div className="flex items-center gap-6">
              <div className="bg-black rounded-full p-4 flex-shrink-0">
                <svg className="w-10 h-10" viewBox="0 0 41 40" fill="none">
                  <path d="M18.8333 28.3334L22.1666 31.6667C22.4949 31.9951 22.8846 32.2555 23.3136 32.4332C23.7425 32.6108 24.2023 32.7023 24.6666 32.7023C25.1309 32.7023 25.5906 32.6108 26.0196 32.4332C26.4485 32.2555 26.8383 31.9951 27.1666 31.6667C27.4949 31.3384 27.7553 30.9487 27.933 30.5197C28.1107 30.0908 28.2021 29.631 28.2021 29.1667C28.2021 28.7025 28.1107 28.2427 27.933 27.8138C27.7553 27.3848 27.4949 26.9951 27.1666 26.6667M23.8336 23.3334L28.0003 27.5001C28.6633 28.1631 29.5626 28.5356 30.5003 28.5356C31.438 28.5356 32.3373 28.1631 33.0003 27.5001C33.6633 26.8371 34.0358 25.9378 34.0358 25.0001C34.0358 24.0624 33.6633 23.1631 33.0003 22.5001L26.5336 16.0334C25.5961 15.0971 24.3253 14.5712 23.0003 14.5712C21.6753 14.5712 20.4045 15.0971 19.467 16.0334L18.0003 17.5001C17.3373 18.1631 16.438 18.5356 15.5003 18.5356C14.5626 18.5356 13.6633 18.1631 13.0003 17.5001C12.3373 16.8371 11.9648 15.9378 11.9648 15.0001C11.9648 14.0624 12.3373 13.1631 13.0003 12.5001L17.6836 7.81677C19.204 6.30035 21.1868 5.33436 23.318 5.07173C25.4493 4.8091 27.6072 5.26483 29.4503 6.36677L30.2336 6.83344C30.9433 7.26175 31.787 7.4103 32.6003 7.25011L35.5003 6.66677M35.4999 5.00008L37.1666 23.3334H33.8333M5.49992 5.00008L3.83325 23.3334L14.6666 34.1667C15.3296 34.8298 16.2289 35.2023 17.1666 35.2023C18.1043 35.2023 19.0035 34.8298 19.6666 34.1667C20.3296 33.5037 20.7021 32.6044 20.7021 31.6667C20.7021 30.7291 20.3296 29.8298 19.6666 29.1667M5.49992 6.66675H18.8333" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="flex-1 text-black font-poppins text-xl lg:text-[28px] font-medium leading-normal">
                Partners and Venues
              </h3>
            </div>
            
            {/* Partner logos grid */}
            <div className="w-full h-auto relative">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 items-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/9dbc0b591682eb18e0daafc2558ed253b4906010?width=374"
                  alt="Partner"
                  className="w-full max-w-[120px] lg:max-w-[187px] h-auto object-contain"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/6f256064217d315310afe917bf5c99d60b6202b3?width=232"
                  alt="Partner"
                  className="w-full max-w-[80px] lg:max-w-[116px] h-auto object-contain"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e097bd9c4a973bc9b0e581ca7bc0c62052da7e13?width=250"
                  alt="Partner"
                  className="w-full max-w-[80px] lg:max-w-[125px] h-auto object-contain"
                />
                <div className="flex items-center gap-2">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/2081985dcaa5630f2887c674df2f10c7237ea748?width=334"
                    alt="Partner"
                    className="w-full max-w-[120px] lg:max-w-[167px] h-auto object-contain"
                  />
                  <div className="text-[#F0B90B] font-poppins text-base lg:text-[26px] font-medium">TH</div>
                </div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d7d28bea2a89b9eb69b44bb905ecf83967bb5685?width=380"
                  alt="Partner"
                  className="w-full max-w-[120px] lg:max-w-[190px] h-auto object-contain"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/c2ba0c114ec7b2d5692fad106cc0fdeaa604b88d?width=318"
                  alt="Partner"
                  className="w-full max-w-[100px] lg:max-w-[159px] h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Bottom two cards */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="bg-white rounded-[44px] p-8 lg:p-12 flex items-center flex-1 min-h-[150px] lg:min-h-[208px]">
              <p className="text-black font-poppins text-lg lg:text-2xl font-medium leading-normal">
                Token liquidity partners across top USDT, USDC and fiat denominated pairs
              </p>
            </div>
            <div className="bg-black rounded-[44px] p-8 lg:p-12 flex items-center flex-1 min-h-[150px] lg:min-h-[208px]">
              <p className="text-white font-poppins text-lg lg:text-2xl font-medium leading-normal">
                Expanding into DEX and hybrid liquidity solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
