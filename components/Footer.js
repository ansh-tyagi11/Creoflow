import React from 'react';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-12 py-6 text-center text-sm text-white/70">
      © {new Date().getFullYear()} Creoflow ·{" "}
      <Link href="/about" className="hover:underline">
        About
      </Link>{" "}
      ·{" "}
      <Link href="/privacy" className="hover:underline">
        Privacy
      </Link>
    </footer>
  )
}
export default Footer
