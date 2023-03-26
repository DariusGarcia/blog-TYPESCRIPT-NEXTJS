import React, { ReactNode } from 'react';
import NavComponent from './nav/navbar';

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavComponent />
      <main>{children}</main>
    </>
  );
}
