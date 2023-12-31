import { useState } from "react";
import { Button, Drawer } from "antd";
import SectionProducts from "./SectionProducts";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Header = () => {

  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    setOpen(true);
  }
  const onClose = () => {
    setOpen(false);
  }



  const products = useSelector((state:RootState) => state.products);

  const filteredProducts = products.filter((product) => product.Title !== "");
  

  return (
    <div className="py-4 px-[3rem] flex justify-between">
      <h1 className="text-black font-bold text-2xl">E-commerce Store</h1>
      <span className="relative" onClick={showDrawer}>
        <h1 className="text-black mt-1.5 hover:cursor-pointer">
          <svg
            width="17"
            height="17"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 64C19.6 64 16.04 67.6 16.04 72C16.04 76.4 19.6 80 24 80C28.4 80 32 76.4 32 72C32 67.6 28.4 64 24 64ZM0 0V8H8L22.4 38.36L17 48.16C16.36 49.28 16 50.6 16 52C16 56.4 19.6 60 24 60H72V52H25.68C25.12 52 24.68 51.56 24.68 51L24.8 50.52L28.4 44H58.2C61.2 44 63.84 42.36 65.2 39.88L79.52 13.92C79.84 13.36 80 12.68 80 12C80 9.8 78.2 8 76 8H16.84L13.08 0H0ZM64 64C59.6 64 56.04 67.6 56.04 72C56.04 76.4 59.6 80 64 80C68.4 80 72 76.4 72 72C72 67.6 68.4 64 64 64Z"
              fill="black"
            />
          </svg>
        </h1>
        <span className="bg-orange-400 text-black text-xs font-bold px-1 rounded-full absolute top-0 right-3">
          {filteredProducts.length}
        </span>
      </span>
      <Drawer title="Panier" placement="right" onClose={onClose} open={open}>
        <SectionProducts />
      </Drawer>
    </div>
  );
};

export default Header;
