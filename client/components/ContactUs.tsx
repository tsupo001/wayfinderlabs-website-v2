import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

export default function ContactUs() {
  const [projectStage, setProjectStage] = useState("pre-tge");
  
  return (
    <section id="contact-us" className="flex flex-col items-center gap-12 w-full">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 px-4 lg:px-[100px] w-full">
        <div className="flex flex-col items-start">
          <div className="flex px-2 py-1 rounded-lg bg-black">
            <h2 className="text-white font-poppins text-2xl lg:text-[40px] font-medium leading-normal">
              Contact Us
            </h2>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full max-w-[1240px] px-4">
        <div className="bg-black rounded-[50px] p-8 lg:p-[50px] min-h-[600px] lg:min-h-[844px]">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 h-full">
            {/* Left side - Info */}
            <div className="w-full lg:w-[577px] flex flex-col justify-between gap-8 lg:gap-16">
              <div className="flex flex-col gap-8 lg:gap-10">
                <h3 className="text-white font-poppins text-2xl lg:text-[40px] font-medium leading-normal capitalize">
                  If liquidity, credibility, and market integrity matter to you - let's build together
                </h3>
                <p className="text-white font-poppins text-lg lg:text-2xl font-normal leading-normal max-w-[452px]">
                  Whether you're a token project or exchange, we'd love to learn how we can support your next stage of growth.
                </p>
              </div>
              
              <div className="flex flex-col gap-8 lg:gap-12">
                <div className="flex flex-col gap-2">
                  <h4 className="text-white font-poppins text-xl lg:text-[28px] font-medium leading-normal capitalize">
                    Book a Call
                  </h4>
                  <p className="text-white font-poppins text-base lg:text-xl font-normal leading-normal">
                    [Calendly Link]
                  </p>
                </div>
                
                <div className="flex flex-col gap-2">
                  <h4 className="text-white font-poppins text-xl lg:text-[28px] font-medium leading-normal capitalize">
                    Email
                  </h4>
                  <p className="text-white font-poppins text-base lg:text-xl font-normal leading-normal">
                    info@wayfinderlabs.io
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div className="w-full lg:w-[507px] flex flex-col gap-6">
              <form className="flex flex-col gap-6">
                {/* Name Field */}
                <div className="flex flex-col gap-1">
                  <Label htmlFor="name" className="text-white font-poppins text-lg lg:text-xl font-normal leading-7">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Name"
                    className="p-4 lg:p-[18px] rounded-[14px] border border-white bg-white text-gray-500 font-poppins text-base lg:text-lg"
                  />
                </div>

                {/* Project Field */}
                <div className="flex flex-col gap-1">
                  <Label htmlFor="project" className="text-white font-poppins text-lg lg:text-xl font-normal leading-7">
                    Project
                  </Label>
                  <Input
                    id="project"
                    placeholder="Name"
                    className="p-4 lg:p-[18px] rounded-[14px] border border-white bg-white text-gray-500 font-poppins text-base lg:text-lg"
                  />
                </div>

                {/* Project Stage */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
                  <Label className="text-white font-poppins text-lg lg:text-xl font-normal leading-7 lg:w-[221px]">
                    Project Stage:
                  </Label>
                  <RadioGroup value={projectStage} onValueChange={setProjectStage} className="flex gap-6">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem
                        value="pre-tge"
                        id="pre-tge"
                        className="w-5 h-5 border border-wayfinder-purple bg-white"
                      />
                      <Label htmlFor="pre-tge" className="text-white font-poppins text-lg lg:text-xl font-normal">
                        Pre TGE
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem
                        value="post-tge"
                        id="post-tge"
                        className="w-5 h-5 border border-wayfinder-purple bg-white"
                      />
                      <Label htmlFor="post-tge" className="text-white font-poppins text-lg lg:text-xl font-normal">
                        Post TGE
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Service Field */}
                <div className="flex flex-col gap-1">
                  <Label htmlFor="service" className="text-white font-poppins text-lg lg:text-xl font-normal leading-7">
                    What service are you looking for?
                  </Label>
                  <div className="relative">
                    <select className="w-full p-4 lg:p-[18px] rounded-[14px] border border-white bg-white text-gray-500 font-poppins text-base lg:text-lg appearance-none pr-12">
                      <option value="">Select service</option>
                      <option value="market-making">Market Making</option>
                      <option value="liquidity-provision">Liquidity Provision</option>
                      <option value="token-launch">Token Launch Support</option>
                      <option value="other">Other</option>
                    </select>
                    <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" viewBox="0 0 20 21" fill="none">
                      <path d="M5 8L10 13L15 8" stroke="#71717A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-1">
                  <Label htmlFor="email" className="text-white font-poppins text-lg lg:text-xl font-normal leading-7">
                    Email*
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="p-4 lg:p-[18px] rounded-[14px] border border-white bg-white text-gray-500 font-poppins text-base lg:text-lg"
                  />
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-1">
                  <Label htmlFor="message" className="text-white font-poppins text-lg lg:text-xl font-normal leading-7">
                    Message*
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Message"
                    className="p-4 lg:p-[18px] rounded-[14px] border border-white bg-white text-gray-500 font-poppins text-base lg:text-lg min-h-[100px] lg:min-h-[109px]"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full p-4 lg:p-[20px] bg-white text-black font-poppins text-lg lg:text-xl font-normal leading-7 rounded-[14px] hover:bg-gray-100 transition-colors"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
