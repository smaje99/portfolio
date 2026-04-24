import { ArrowUpRight, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface Props {
  talkLabel: string;
  githubLabel: string;
}

export default function HeroActions({ talkLabel, githubLabel }: Props) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <Button asChild size="lg">
        <a href="mailto:smajefranco@gmail.com">
          {talkLabel}
          <Mail data-icon="inline-end" />
        </a>
      </Button>
      <Button asChild variant="outline" size="lg">
        <a href="https://github.com/smaje99" target="_blank" rel="noopener noreferrer">
          {githubLabel}
          <ArrowUpRight data-icon="inline-end" />
        </a>
      </Button>
    </div>
  );
}
