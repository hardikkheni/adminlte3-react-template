import { ModeToggle } from '@/components/mode-toggle';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <ModeToggle />
    </div>
  );
}
