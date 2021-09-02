import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { selectItems } from "../slices/basketSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
import { route } from "next/dist/server/router";

import ClipboardListIcon from "@heroicons/react/outline/ClipboardListIcon";
import QuestionMarkCircleIcon from "@heroicons/react/solid/QuestionMarkCircleIcon";
import HomeIcon from "@heroicons/react/solid/HomeIcon";
import LogoutIcon from "@heroicons/react/outline/LogoutIcon";
import LibraryIcon from "@heroicons/react/outline/LibraryIcon";
import ScaleIcon from "@heroicons/react/outline/ScaleIcon";
import { CreditCardIcon, LockClosedIcon } from "@heroicons/react/solid";
import MapIcon from "@heroicons/react/outline/MapIcon";
import DocumentDuplicateIcon from "@heroicons/react/outline/DocumentDuplicateIcon";
import UserIcon from "@heroicons/react/outline/UserIcon";
import { XIcon } from "@heroicons/react/outline";

const closeLeftSideMenuView = (e) => {
  setLeftSideMenuView(false);
};
function Header() {
  const [leftSideMenuView, setLeftSideMenuView] = useState(false);
  const handleLeftSideMenuview = () => {
    setLeftSideMenuView(!leftSideMenuView);
    console.log(!leftSideMenuView);
  };

  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  // session.user.email
  return (
    <header className="relative">
      {/* Top */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* Search */}
        <div className="hidden sm:flex hover:bg-yellow-500 bg-yellow-400  items-center h-10 rounded-md flex-grow cursor-pointer ">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
            name=""
            id=""
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick={!session ? signIn : signOut} className="link">
            <p className="hover:underline">
              {session ? `Hello, ${session.user.name}` : "Sign In"}
            </p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div onClick={() => router.push("/orders")} className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="relative link flex items-center "
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* Button */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon
            className="h-6 mr-1"
            onClick={(e) => {
              handleLeftSideMenuview();
            }}
          />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
      {leftSideMenuView && (
        <div className="z-40">
          {/* <LeftSideMenu /> */}
          <div>
            <div className="bg-amazon_blue-light leftSideMenu_container ml-0 flex flex-col justify-between  z-40 fixed h-screen top-0">
              <div className="mx-4">
                <div
                  onClick={() => {
                    handleLeftSideMenuview();
                  }}
                  className="cursor-pointer"
                >
                  <XIcon className="h-6 w-6 mr-0 leftSideMenu_icons text-white justify-items-end ml-auto" />
                </div>
                <div
                  className="text-white flex link"
                  onClick={() => {
                    router.push("/");
                    console.log("HOME");
                  }}
                >
                  <HomeIcon className="h-6 w-6  leftSideMenu_icons" />
                  <span className="ml-2 leftSideMenu_iconsTitle"> Home</span>
                </div>

                <div
                  className="text-white flex link"
                  onClick={() => {
                    router.push("/Bookings", "/Bookings");
                    console.log("BOOKINGS");
                  }}
                >
                  <ClipboardListIcon className="h-6 w-6 leftSideMenu_icons" />
                  <span className="ml-2 leftSideMenu_iconsTitle">
                    {" "}
                    BOOKINGS
                  </span>
                </div>
                <div
                  className="text-white flex link"
                  onClick={() => {
                    router.push("/Account", "/Account");
                    console.log("ACCOUNT");
                  }}
                >
                  <UserIcon className="h-6 w-6  leftSideMenu_icons" />
                  <span className="ml-2 leftSideMenu_iconsTitle"> ACCOUNT</span>
                </div>
                <div
                  className="text-white flex link"
                  onClick={() => {
                    router.push("/Addresses", "/Addresses");
                    console.log("ADDRESSES");
                  }}
                >
                  <MapIcon className="h-6 w-6  leftSideMenu_icons" />
                  <span className="ml-2 leftSideMenu_iconsTitle">
                    {" "}
                    ADDRESSES
                  </span>
                </div>
                <div
                  className="text-white flex link"
                  onClick={() => {
                    router.push("/Wallate", "/Wallate");
                    console.log("WALLATE");
                  }}
                >
                  <CreditCardIcon className="h-6 w-6  leftSideMenu_icons" />
                  <span className="ml-2 leftSideMenu_iconsTitle"> WALLATE</span>
                </div>
                <div
                  className="text-white flex link"
                  onClick={() => {
                    router.push("/Help", "/Help");
                    console.log("HELP");
                  }}
                >
                  <QuestionMarkCircleIcon className="h-6 w-6  leftSideMenu_icons" />
                  <span className="ml-2 leftSideMenu_iconsTitle"> HELP</span>
                </div>
                <hr />
                <div
                  className="text-white flex link"
                  onClick={() => {
                    console.log("LOGOUT");
                  }}
                >
                  <LogoutIcon className="h-6 w-6  leftSideMenu_icons" />
                  <span className="ml-2 leftSideMenu_iconsTitle"> LOGOUT</span>
                </div>
                <hr />
              </div>
              <div className="text-white">lower menu</div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
