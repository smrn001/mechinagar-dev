import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import {
  BrandFacebook,
  BrandMessenger,
  BrandDiscord,
  Home2,
  BrandGithub,
  LayoutNavbarCollapse,
} from "tabler-icons-react";
import PropTypes from "prop-types"; // Import PropTypes
import { Link } from "react-router-dom";

// Utility function for combining Tailwind classes
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// FloatingDock for desktop devices
const FloatingDockDesktop = ({ items, className }) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto md:flex h-16 gap-4 items-end border hidden rounded-2xl bg-gray-50 px-4 pb-3 shadow-lg transition-shadow duration-200",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

const FloatingDockMobile = ({ items, className }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn("absolute md:hidden bottom-0 right-0 z-10 p-4", className)}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute bottom-full mb-2  rounded-full flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <Link
                  to={item.href}
                  key={item.title}
                  target="_blank"
                  className="h-10 w-10 rounded-full bg-gray-50  flex items-center justify-center"
                >
                  <div className="h-4 w-4">{item.icon}</div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="h-10 w-10 rounded-full bg-gray-50  flex items-center justify-center"
      >
        <LayoutNavbarCollapse className="h-5 w-5 text-neutral-500 " />
      </button>
    </div>
  );
};
// Icon container for each item
function IconContainer({ mouseX, title, icon, href }) {
  const ref = useRef(null);
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const width = useSpring(
    useTransform(distance, [-150, 0, 150], [40, 80, 40]),
    { mass: 0.1, stiffness: 150, damping: 12 }
  );
  const height = useSpring(
    useTransform(distance, [-150, 0, 150], [40, 80, 40]),
    { mass: 0.1, stiffness: 150, damping: 12 }
  );

  const widthIcon = useSpring(
    useTransform(distance, [-150, 0, 150], [20, 40, 20]),
    { mass: 0.1, stiffness: 150, damping: 12 }
  );
  const heightIcon = useSpring(
    useTransform(distance, [-150, 0, 150], [20, 40, 20]),
    { mass: 0.1, stiffness: 150, damping: 12 }
  );

  const [hovered, setHovered] = useState(false);

  const isExternalLink = href.startsWith("http");

  const linkProps = isExternalLink
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <Link to={href} {...linkProps}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-gray-200 flex items-center justify-center relative transition-transform duration-200 hover:scale-105"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}

// PropTypes validation for IconContainer
IconContainer.propTypes = {
  mouseX: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  href: PropTypes.string.isRequired,
};

// FloatingDockDemo component
export default function Dock() {
  const links = [
    {
      title: "Home",
      icon: <Home2 className="h-full w-full text-neutral-500" />,
      href: "/",
    },
    {
      title: "Messenger",
      icon: <BrandMessenger className="h-full w-full text-neutral-500" />,
      href: "https://www.facebook.com/messages/t/8369762343146421",
    },
    {
      title: "Discord",
      icon: <BrandDiscord className="h-full w-full text-neutral-500" />,
      href: "https://discord.gg/J8Xt8GXS",
    },
    {
      title: "Facebook",
      icon: <BrandFacebook className="h-full w-full text-neutral-500" />,
      href: "https://www.facebook.com/dc.mechinagar",
    },
    {
      title: "GitHub",
      icon: <BrandGithub className="h-full w-full text-neutral-500" />,
      href: "https://github.com/smrn001/mechinagar-dev",
    },
  ];

  const mobileClassName = "some-default-class"; // Define mobileClassName

  return (
    <div className="flex items-center fixed bottom-0 z-10 justify-center w-full">
      <FloatingDockDesktop items={links} />
      <FloatingDockMobile items={links} className={mobileClassName} />
    </div>
  );
}

// PropTypes validation for FloatingDockMobile
FloatingDockMobile.propTypes = {
  items: PropTypes.array.isRequired,
  className: PropTypes.string,
};

// PropTypes validation for FloatingDockDesktop
FloatingDockDesktop.propTypes = {
  items: PropTypes.array.isRequired,
  className: PropTypes.string,
};
