import { CopyrightIcon, DotIcon } from "lucide-react";

import { footerLinks } from "./footer.constants";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-y-3">
      <div className="flex flex-wrap items-center justify-center">
        {footerLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="hover:text-gray-700 flex text-xs text-slate-400">
            {link.label}
            {index !== footerLinks.length - 1 && (
              <DotIcon className="h-4 w-4" />
            )}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-x-1 text-xs text-slate-400">
        <CopyrightIcon className="inline-flex h-3 w-3" />
        2024
        <span className="font-bold">Gelecek Bilimde</span> Tüm hakları saklıdır.
      </div>
    </div>
  );
};

export default Footer;
