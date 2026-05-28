"use client";

import { useI18n } from "@/utils/i18n";

export function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  const { t } = useI18n();
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-ember">{t(eyebrow)}</p>
      <h2 className="font-display text-3xl font-black text-white sm:text-5xl">{t(title)}</h2>
      <p className="mt-5 text-base leading-8 text-white/64">{t(copy)}</p>
    </div>
  );
}
