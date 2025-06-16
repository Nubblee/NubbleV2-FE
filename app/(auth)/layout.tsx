import Logo from "@/components/Logo";
import AuthRedirectProvider from "./_component/auth-redirect-provider";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthRedirectProvider>
      <div className="min-h-screen">
        <main className="w-full h-screen flex flex-col justify-center items-center">
          <Logo />
          {children}
        </main>
      </div>
    </AuthRedirectProvider>
  );
}
