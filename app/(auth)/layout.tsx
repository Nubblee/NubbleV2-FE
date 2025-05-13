import Logo from "@/components/Logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <main className="w-full h-screen flex flex-col justify-center items-center">
        <Logo />
        {children}
      </main>
    </div>
  );
}
