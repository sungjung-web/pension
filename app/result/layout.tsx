import Spacing from '@/components/Spacing';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Spacing size={64 - 24} />
      {children}
    </>
  );
}
