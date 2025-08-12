export default function Hero() {
  return (
    <section className="flex w-full px-4 lg:px-[100px] justify-between items-start gap-8 lg:gap-16">
      <div className="flex flex-col justify-between items-start max-w-2xl">
        <div className="flex flex-col items-start gap-8 lg:gap-[35px] mb-12 lg:mb-16">
          <h1 className="text-2xl lg:text-[32px] font-medium lg:font-medium leading-normal text-black font-poppins max-w-[684px]">
            We provide deep, reliable liquidity across CEXs and DEXs—for exchanges and tokens serious about liquidity, credibility, and market integrity.
          </h1>
          <p className="text-lg lg:text-2xl font-normal leading-normal text-black font-poppins max-w-[562px]">
            From launch to scale, we work with you to tighten spreads, deepen order books, and build trading volume that lasts.
          </p>
        </div>
        
        <button className="flex items-center gap-2.5 px-6 lg:px-[35px] py-4 lg:py-5 bg-black rounded-lg lg:rounded-[14px] hover:bg-gray-800 transition-colors">
          <span className="text-white text-center font-poppins text-lg lg:text-xl font-medium leading-7">
            Partner With Us
          </span>
        </button>
      </div>
      
      <div className="hidden lg:block flex-shrink-0">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/5edc7794479483bb015d1c6d9ccc4cb6b6c4bcf3?width=1030"
          alt="Wayfinder Labs Hero Visual"
          className="w-[400px] xl:w-[515px] h-[400px] xl:h-[515px] object-cover"
        />
      </div>
    </section>
  );
}
