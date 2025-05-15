export const metadata = {
  title: 'SeedPass - Help',
  description: 'Learn how to use SeedPass, a secure deterministic password generator',
};

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  );
}