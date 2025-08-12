export default function AboutUs() {
  return (
    <section id="about-us" className="flex flex-col items-center gap-12 w-full">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 px-4 lg:px-[100px] w-full">
        <div className="flex flex-col items-start">
          <div className="flex px-2 py-1 rounded-lg bg-black">
            <h2 className="text-white font-poppins text-2xl lg:text-[40px] font-medium leading-normal">
              About Us
            </h2>
          </div>
        </div>
        <p className="flex-1 text-black font-poppins text-lg lg:text-2xl font-normal leading-normal">
          We've been market making since 2017 — across bull runs, bear markets,
          and everything in between.
        </p>
      </div>

      {/* Content */}
      <div className="w-full max-w-[1244px] px-4">
        <div className="bg-white rounded-[50px] p-8 lg:p-[50px] flex flex-col gap-6">
          <p className="text-black font-poppins text-lg lg:text-2xl font-normal leading-normal italic">
            Wayfinder Labs is a team of experienced traders, operators, and
            technologists with backgrounds in exchanges, token projects,
            payments, and crypto infrastructure. We've been on all sides of the
            market — and we know what real liquidity takes.
          </p>
          <p className="text-black font-poppins text-lg lg:text-2xl font-normal leading-normal italic">
            Our edge is simple: we work closely with our partners, tailor every
            engagement, and deliver results you can measure.
          </p>
        </div>
      </div>
    </section>
  );
}
