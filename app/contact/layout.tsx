// app/contact/layout.tsx
import Navbar from '../../src/components/ui/Navbar';
import Footer from '../../src/components/ui/Footer';

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}   