import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

function Header() {
  const { data: session } = useSession();
  return (
    <header>
      <div className="item-center place-content-evenly flex space-x-8">
        <Link href="/">
          <img src="images/logo.png" alt="" />
        </Link>
        <div className="hidden  items-center space-x-5 md:inline-flex">
          <h3 className="">About</h3>
          <h3 className="">Contact</h3>
          <h3 className="rounded-full bg-green-600 px-4 py-1 text-white">
            Follow
          </h3>
          <div className="flex items-center space-x-5 text-green-600">
            {/* <Link></Link> */}
            <h3 onClick={signOut}>LogOut</h3>
            <h3>Get Started</h3>
            <Link href="/Admin">
              <h3>Admin</h3>
            </Link>
            <img
              // src={session.user.image}
              height={40}
              width={40}
              alt="user-img"
              className="rounded-full cursor-pointer"
            />
            <p className="hidden xl:inline-flex whitespace-nowrap font-semibold pr-3">
              {/* {session.user.name.toUpperCase()} */}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
