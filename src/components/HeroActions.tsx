import { ArrowDownRight, Download } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface Props {
  readonly projectsLabel: string;
  readonly projectsHref: string;
  readonly resumeLabel: string;
  readonly resumeHref: string;
  readonly contactLabel: string;
  readonly contactHref: string;
}

export default function HeroActions({
  projectsLabel,
  projectsHref,
  resumeLabel,
  resumeHref,
  contactLabel,
  contactHref,
}: Props) {
  return (
    <div className="hero-actions mt-8 grid gap-3 sm:flex sm:flex-wrap sm:items-center">
      <Button asChild size="lg" className="w-full font-bold sm:w-auto sm:min-w-40">
        <a href={contactHref}>
          {contactLabel}
          <ArrowDownRight data-icon="inline-end" />
        </a>
      </Button>
      <div className="grid grid-cols-2 gap-3 sm:contents">
        <Button
          asChild
          variant="outline"
          size="lg"
          className="min-w-0 px-3 text-xs sm:min-w-40 sm:px-6 sm:text-sm"
        >
          <a href={projectsHref}>
            {projectsLabel}
            <ArrowDownRight data-icon="inline-end" />
          </a>
        </Button>
        <Button
          asChild
          variant="secondary"
          size="lg"
          className="min-w-0 px-3 text-xs sm:min-w-40 sm:px-6 sm:text-sm"
        >
          <a href={resumeHref} target="_blank" rel="noopener noreferrer">
            {resumeLabel}
            <Download data-icon="inline-end" />
          </a>
        </Button>
      </div>
    </div>
  );
}
