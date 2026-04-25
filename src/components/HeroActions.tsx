import { ArrowDownRight, Download, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface Props {
  projectsLabel: string;
  resumeLabel: string;
  contactLabel: string;
}

export default function HeroActions({ projectsLabel, resumeLabel, contactLabel }: Props) {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      <Button asChild size="lg" className="min-w-40 font-bold">
        <a href="#projects">
          {projectsLabel}
          <ArrowDownRight data-icon="inline-end" />
        </a>
      </Button>
      <Button asChild variant="outline" size="lg" className="min-w-40">
        <a href="/docs/curriculum-vitae-sergio-maje.pdf" target="_blank" rel="noopener noreferrer">
          {resumeLabel}
          <Download data-icon="inline-end" />
        </a>
      </Button>
      <Button asChild variant="secondary" size="lg" className="min-w-40">
        <a href="mailto:smajefranco@gmail.com">
          {contactLabel}
          <Mail data-icon="inline-end" />
        </a>
      </Button>
    </div>
  );
}
