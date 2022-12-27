import React from "react";

function Header() {
  return (
    <>
      <header className="fixed top-10 left-[90px] right-[90px] justify-between items-center flex">
        {/* kiri */}
        <div className="flex items-center">
          {/* Logo */}
          kiri
        </div>
        <div className="flex items-center">kanan</div>
      </header>
    </>
  );
}

export default Header;
