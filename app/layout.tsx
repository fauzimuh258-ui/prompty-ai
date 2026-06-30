import "./globals.css";

export const metadata = {
  title: "Prompty AI - Generate Prompt AI Presisi Tinggi",
  description: "AI prompt generator gratis. Oleh Vazi, founder 17 tahun.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased">{children}</body>
    </html>
  );
}
