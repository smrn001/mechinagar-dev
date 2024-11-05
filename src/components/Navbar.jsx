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
        "mx-auto flex h-16 gap-4 items-end border rounded-2xl bg-gray-50 px-4 pb-3 shadow-lg transition-shadow duration-200",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
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
export default function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: <Home2 className="h-full w-full text-neutral-500" />,
      href: "/",
    },
    {
      title: "Messenger",
      icon: <BrandMessenger className="h-full w-full text-neutral-500" />,
      href: "https://m.me/j/AbbEuCcBNjt-y9M3/",
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

  return (
    <div className="flex items-center fixed bottom-0 z-10 justify-center w-full">
      <FloatingDockDesktop items={links} />
    </div>
  );
}

// PropTypes validation for FloatingDockDesktop
FloatingDockDesktop.propTypes = {
  items: PropTypes.array.isRequired,
  className: PropTypes.string,
};
