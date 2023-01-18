import React from "react";


const HeaderBar = () => {
  return (
    <div className=" bg-gray-100 border-b-2 w-full">
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <ul className="flex py-1 space-x-4">
              <li>item1</li>
              <li>item1</li>
              <li>item1</li>
              <li>item1</li>
            </ul>
          </div>
          <select name="" id="" className="">
            <option value="">ES</option>
            <option value="">EN</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
