/* eslint-disable prettier/prettier */
import { useEffect } from 'react';

import Navbar from './nav';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="h-screen">{children}</main>
    </>
  );
}
