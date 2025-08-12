export default function Footer() {
  return (
    <footer className="flex flex-col items-start gap-2.5 w-full px-4 lg:px-[100px]">
      <div className="flex justify-between items-center w-full bg-black rounded-t-[45px] px-8 lg:px-[60px] py-8 lg:py-[55px]">
        <div className="flex flex-col items-start gap-8 lg:gap-[66px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/225c597cd16460be91055ccd98baa69d50ae7f9c?width=560"
            alt="Wayfinder Labs Logo"
            className="w-[200px] lg:w-[280px] h-auto aspect-[35/9]"
          />
        </div>

        <div className="flex flex-col items-start gap-8 lg:gap-[50px]">
          <div className="flex items-start gap-6 lg:gap-10">
            <p className="text-white font-poppins text-sm lg:text-lg font-normal leading-7">
              © 2025 Wayfinder Labs Co, LTD. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
