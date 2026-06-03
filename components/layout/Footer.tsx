import Link from "next/link";
import Image from "next/image";

const hours = [
  { day: "Monday", time: "11 AM – 8 PM" },
  { day: "Tuesday", time: "11 AM – 8 PM" },
  { day: "Wednesday", time: "11 AM – 8 PM" },
  { day: "Thursday", time: "11 AM – 8 PM" },
  { day: "Friday", time: "11 AM – 8 PM" },
  { day: "Saturday", time: "11 AM – 8 PM" },
  { day: "Sunday", time: "Noon – 6 PM" },
];

export default function Footer() {
  return (
    <footer
      className="mt-auto text-cream/80"
      style={{
        backgroundImage: "url('/wood-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay to keep text readable */}
      <div className="bg-walnut-darker/60">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Image src="/logo-text.png" alt="Park Avenue" width={200} height={47} className="h-10 w-auto mb-3" style={{ filter: "drop-shadow(0 0 6px rgba(255, 210, 120, 0.9)) drop-shadow(0 2px 4px rgba(0,0,0,0.6)) brightness(1.15)" }} />
            <p className="text-sm leading-relaxed">
              The finest collection of Men's and Kids Fashion. Located inside the Lakeland Square Mall.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-walnut-light mb-4">Navigate</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/shop" className="hover:text-white transition-colors">Shop</Link></li>
              <li><Link href="/lookbook" className="hover:text-white transition-colors">Lookbook</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Journal</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-walnut-light mb-4">Visit Us</p>
            <ul className="space-y-1.5 text-sm">
              <li>3800 US Hwy 98 N, Suite 320</li>
              <li>Lakeland, FL 33809</li>
              <li className="pt-1">
                <a href="tel:8638154677" className="hover:text-white transition-colors">(863) 815-4677</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-walnut-light mb-4">Hours</p>
            <ul className="space-y-1.5 text-sm">
              {hours.map(({ day, time }) => (
                <li key={day} className="flex justify-between gap-4">
                  <span className={day === "Sunday" ? "text-walnut-light" : ""}>{day}</span>
                  <span className={day === "Sunday" ? "text-walnut-light" : ""}>{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 px-6 py-4 max-w-7xl mx-auto">
          <p className="text-xs text-white/30 text-center">
            © {new Date().getFullYear()} Park Avenue. All rights reserved. · Lakeland Square Mall
          </p>
        </div>
      </div>
    </footer>
  );
}
