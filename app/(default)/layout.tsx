import Header from "@/app/(default)/_component/Header/Header";

export default function DefaultLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="w-full">{children}</main>
      {modal}
    </div>
  );
}
