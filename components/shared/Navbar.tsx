"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed z-10 top-5 w-full flex items-center justify-center">
      <ul
        className="border-white/10 bg-white/5 px-1.5 py-1 flex items-center justify-center space-x-5 rounded-full text-sm
       text-accent-foreground"
      >
        {options.map((option) => {
          const isActive = pathname === option.path;

          return (
            <motion.li
              className="cursor-pointer focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground gap-1 rounded-full p-2 focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4 inline-block px-4 py-1.5 text-sm font-light text-white/70 transition-[text-shadow,color] duration-300 hover:text-white/85 relative"
              key={option.path}
              data-active={isActive}
              initial={{ opacity: 0.8 }}
              animate={{
                opacity: 1,
                color: isActive
                  ? "rgba(255, 255, 255, 0.95)"
                  : "rgba(255, 255, 255, 0.7)",
              }}
              transition={{ duration: 0.3 }}
            >
              <Link href={option.path}>{option.label}</Link>

              {/* active link style with framer motion */}
              {isActive && (
                <motion.div
                  className="bg-primary/5 absolute inset-0 -z-10 w-full rounded-full"
                  layoutId="activeBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                >
                  <motion.div
                    className="bg-primary absolute -top-[9px] left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full"
                    layoutId="activeIndicator"
                  >
                    <motion.div
                      className="bg-primary/20 absolute -top-2 -left-2 h-6 w-12 rounded-full blur-md"
                      layoutId="glow1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    />
                    <motion.div
                      className="bg-primary/20 absolute -top-1 h-6 w-8 rounded-full blur-md"
                      layoutId="glow2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.15 }}
                    />
                    <motion.div
                      className="bg-primary/20 absolute top-0 left-2 h-4 w-4 rounded-full blur-sm"
                      layoutId="glow3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                    />
                  </motion.div>
                </motion.div>
              )}
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

const options = [
  { path: "/", label: "Home" },
  { path: "/work", label: "Work" },
  { path: "/about", label: "About" },
  { path: "/blog", label: "Blog" },
  { path: "/more", label: "More" },
];
