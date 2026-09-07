import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

interface Props {
  readonly navigation: { label: string; href: string }[];
  readonly menuLabel: string;
  readonly closeMenuLabel: string;
  readonly languageSwitcherLabel: string;
  readonly languageLabel: string;
  readonly languageSwitcherHref: string;
  readonly languageSwitcherLocale: 'es' | 'en';
}

export default function MobileNavigation({
  navigation,
  menuLabel,
  closeMenuLabel,
  languageSwitcherLabel,
  languageLabel,
  languageSwitcherHref,
  languageSwitcherLocale,
}: Props) {
  return (
    <div className="mobile-navigation">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label={menuLabel}
            title={menuLabel}
          >
            <Menu data-icon="inline-start" aria-hidden="true" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" closeLabel={closeMenuLabel} className="mobile-navigation-sheet">
          <SheetHeader className="border-b border-border/60 px-6 pb-5 pt-6">
            <SheetTitle>{menuLabel}</SheetTitle>
            <SheetDescription className="sr-only">{menuLabel}</SheetDescription>
          </SheetHeader>

          <nav aria-label={menuLabel} className="flex flex-1 flex-col gap-2 px-6 pb-6">
            {navigation.map((item) => (
              <SheetClose asChild key={item.href}>
                <a
                  href={item.href}
                  className="flex min-h-11 items-center rounded-full border border-border/60 bg-background/35 px-4 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary/70 hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {item.label}
                </a>
              </SheetClose>
            ))}
            <SheetClose asChild>
              <a
                href={languageSwitcherHref}
                aria-label={languageSwitcherLabel}
                rel="alternate"
                hrefLang={languageSwitcherLocale}
                className="mt-auto flex min-h-11 items-center justify-center rounded-full border border-primary/60 bg-primary/10 px-4 text-sm font-bold text-foreground transition-colors hover:bg-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {languageLabel}
              </a>
            </SheetClose>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
