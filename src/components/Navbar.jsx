"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "About", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li className="navbar-item" key={item.name}>
            <Link
              href={item.path}
              className={`navbar-link ${pathname === item.path ? "active" : ""}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
