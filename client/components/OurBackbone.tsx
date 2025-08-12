export default function OurBackbone() {
  const features = [
    {
      number: "01",
      title: "Modular Infrastructure",
      description:
        "Automated quoting, rebalancing, and venue-aware execution tailored for the idiosyncrasies of your markets.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      number: "02",
      title: "Global Footprint",
      description:
        "Incorporated and operational across multiple jurisdictions for access to regulated rails. We serve partners globally, with direct exchange connectivity.",
      bgColor: "bg-white",
      textColor: "text-black",
    },
    {
      number: "03",
      title: "Security-First Architecture",
      description:
        "Segregated infra, strict access controls, and strategy isolation — your market's health and our edge are protected.",
      bgColor: "bg-white",
      textColor: "text-black",
    },
    {
      number: "04",
      title: "Smart Risk Management",
      description:
        "Live inventory buffers, automated exposure control, and real-time risk protect both liquidity and longevity.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
  ];

  return (
    <section
      id="our-backbone"
      className="flex flex-col items-center gap-12 w-full"
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 px-4 lg:px-[100px] w-full">
        <div className="flex flex-col items-start">
          <div className="flex px-2 py-1 rounded-lg bg-black">
            <h2 className="text-white font-poppins text-2xl lg:text-[40px] font-medium leading-normal">
              Our Backbone
            </h2>
          </div>
        </div>
        <p className="flex-1 text-black font-poppins text-lg lg:text-2xl font-normal leading-normal">
          We operate with the speed, control, and security of a global trading
          desk — with the flexibility of a close partner.
        </p>
      </div>

      {/* Content Grid */}
      <div className="flex flex-wrap items-start gap-6 w-full max-w-[1244px] px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`
              w-full lg:w-[610px] h-auto min-h-[250px] lg:min-h-[289px] 
              rounded-[50px] p-8 lg:p-[50px] 
              ${feature.bgColor} 
              flex flex-col gap-6 
              relative
            `}
          >
            {/* Background shape - for visual consistency */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div
                className={`w-full h-full rounded-[50px] ${feature.bgColor}`}
              ></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-6">
              <h3
                className={`${feature.textColor} font-poppins text-xl lg:text-[32px] font-medium leading-normal capitalize`}
              >
                <span className="font-bold">{feature.number}</span>{" "}
                {feature.title}
              </h3>
              <p
                className={`${feature.textColor} font-poppins text-base lg:text-xl font-normal leading-normal`}
              >
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
