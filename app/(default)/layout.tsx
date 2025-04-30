import Header from "./_component/Header/Header";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="w-full">{children}</main>
    </div>
  );
}
