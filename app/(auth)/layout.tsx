export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-radial-[at_50%_50%] from-white via-neutral-100 to-neutral-300">
      <div className="w-full max-w-md p-8">
        {children}
      </div>
    </div>
  );
}