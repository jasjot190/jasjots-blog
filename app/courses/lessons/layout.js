"use client";
import React, { Suspense } from "react";

const layout = ({ children }) => {
  return <Suspense>{children}</Suspense>;
};

export default layout;
