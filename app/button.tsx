import Image from "next/image";
import React from 'react';

type SocialButtonProps = {
  icon: string;
  url: string;
  alt: string;
};

const SocialButton: React.FC<SocialButtonProps> = ({ icon, url, alt }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <Image
        src={icon}
        alt={alt}
        width={40}
        height={40}
    />
  </a>
);

export default SocialButton;
