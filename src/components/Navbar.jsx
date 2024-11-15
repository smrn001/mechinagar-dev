import {
  FaDiscord,
  FaFacebook,
  FaFacebookMessenger,
  // FaLinkedin,
} from "react-icons/fa";

const socialLinks = [
  {
    href: "https://www.facebook.com/dc.mechinagar",
    label: "Facebook",
    icon: FaFacebook,
  },
  // { href: "#", label: "LinkedIn", icon: FaLinkedin },
  { href: "https://discord.gg/yzgb3Sjr", label: "Discord", icon: FaDiscord },
  { href: "#", label: "Messenger", icon: FaFacebookMessenger },
];

const Navbar = () => {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/photo/logo.jpg"
            alt="Community Logo"
            className="rounded-lg"
            width={50}
            height={50}
          />
          <span className="sr-only">Developers Community Mechinagar</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900"
                >
                  <span className="sr-only">{link.label}</span>
                  <link.icon className="h-6 w-6" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
