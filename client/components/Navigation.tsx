import { Link } from "react-router-dom";

export default function Navigation() {
  const menuItems = [
    { name: "Market Making", href: "#market-making" },
    { name: "Track Record", href: "#track-record" },
    { name: "Our Backbone", href: "#our-backbone" },
    { name: "About Us", href: "#about-us" },
    { name: "Contact Us", href: "#contact-us" },
  ];

  return (
    <nav className="flex w-full justify-between items-center px-4 lg:px-[100px] pt-6 pb-12">
      <div className="flex-shrink-0">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/cf64cc2c7b1744e335a0f82a7cc132158948037e?width=560"
          alt="Wayfinder Labs Logo"
          className="w-[200px] lg:w-[280px] h-auto aspect-[35/9]"
        />
      </div>

      <div className="hidden lg:flex items-center gap-8 xl:gap-10">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-black font-poppins text-lg xl:text-xl font-normal leading-7 hover:text-gray-600 transition-colors"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Mobile menu button - simplified for now */}
      <div className="lg:hidden">
        <button className="p-2 text-black">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
