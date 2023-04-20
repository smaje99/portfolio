import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { SiPlatzi } from 'react-icons/si';

import type { IconType } from 'react-icons';

export interface SocialMediaType {
  readonly path: string;
  readonly description: string;
  readonly Icon: IconType;
}

export const SocialMedia = Object.freeze({
  TWITTER: Object.freeze<SocialMediaType>({
    path: 'https://twitter.com/smaje99',
    description: "Sergio Majé's Twitter",
    Icon: BsTwitter,
  }),
  GITHUB: Object.freeze<SocialMediaType>({
    path: 'https://github.com/smaje99',
    description: "Sergio Majé's Github",
    Icon: BsGithub,
  }),
  LINKEDIN: Object.freeze<SocialMediaType>({
    path: 'https://www.linkedin.com/in/smaje/',
    description: "Sergio Majé's LinkedIn",
    Icon: BsLinkedin,
  }),
  PLATZI: Object.freeze<SocialMediaType>({
    path: 'https://platzi.com/p/smaje99/',
    description: "Sergio Majé's Platzi",
    Icon: SiPlatzi,
  }),
});
