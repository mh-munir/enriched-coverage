"use client";

import { homeFetchItem } from "@/reduxStore/homePageSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

export default function clientPage({ prata }) {
  const { data } = useSelector((state) => state.home);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(homeFetchItem());
  }, [dispatch]);
  return (
    <div className="flex flex-col gap-10 items-start">
      <h1
        className={`text-white text-7xl font-semibold max-w-xl ${prata.className}`}
      >
        Your Medicare, your way
      </h1>
      <p className="text-white font-normal text-xl max-w-md">
        Confidently navigate the world of healthcare with us by your side,
        ensuring you make the best decisions for your needs.
      </p>
      <Link
        className="text-white text-xl font-medium rounded-full bg-orange-700 px-10 py-4 hover:bg-orange-800 duration-100 flex items-center gap-2 hover:gap-4"
        href="/contact"
      >
        Contact US <GoArrowRight />
      </Link>
    </div>
  );
}
