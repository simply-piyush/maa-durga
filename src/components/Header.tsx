"use client";

import Navbar, { NavbarProps } from "@/components/Navbar";

export type HeaderProps = NavbarProps;

export default function Header(props: HeaderProps) {
  return <Navbar {...props} />;
}
