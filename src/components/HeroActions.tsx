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
    <div className="mt-8 flex flex-wrap items-center gap-3">
      <Button asChild size="lg" className="min-w-40 font-bold">
        <a href={contactHref}>
          {contactLabel}
          <ArrowDownRight data-icon="inline-end" />
        </a>
      </Button>
      <Button asChild variant="outline" size="lg" className="min-w-40">
        <a href={projectsHref}>
          {projectsLabel}
          <ArrowDownRight data-icon="inline-end" />
        </a>
      </Button>
      <Button asChild variant="secondary" size="lg" className="min-w-40">
        <a href={resumeHref} target="_blank" rel="noopener noreferrer">
          {resumeLabel}
          <Download data-icon="inline-end" />
        </a>
      </Button>
    </div>
  );
}
