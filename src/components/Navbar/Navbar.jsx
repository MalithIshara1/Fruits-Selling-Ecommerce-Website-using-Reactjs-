import React from "react";
import { FaLeaf } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";

const Navbar = () => {
  const NavbarMenu = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Product",
      link: "#",
    },
    {
      id: 3,
      title: "About",
      link: "#",
    },
    {
      id: 4,
      title: "Shop",
      link: "#",
    },
    {
      id: 5,
      title: "Contact",
      link: "#",
    },
  ];
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        <div className="container flex items-center justify-between py-4 md:pt-4">
          {/* logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <p className="text-primary">Fruit</p>
            <p className="text-secondary">Store</p>
            <FaLeaf className="text-green-500" />
          </div>
          {/* Menu Section  */}

          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-500">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <a
                    className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
                    href={menu.link}
                  >
                    {menu.title}
                  </a>
                </li>
              ))}
              <button className="text-2xl hover:bg-primary hover:text-white p-2 rounded-full duration-200">
                <MdOutlineShoppingCart />
              </button>
            </ul>
          </div>
          {/* Mobile Hamberger Menu */}

          <div className=" md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
          
        </div>
      </motion.nav>

      {/*  mobile menu section  */}

      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
