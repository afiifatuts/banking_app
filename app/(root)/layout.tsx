

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-full font-inter">
    Sidebar 
    <div className="flex size-full flex-col">
    {children}
    </div>
  </main>
  );
}
