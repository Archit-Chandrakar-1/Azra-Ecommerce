import Link from "next/link";
import { LayoutDashboard, ShoppingBag, Users, Settings, LogOut } from "lucide-react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <span className="font-bold text-xl tracking-tight text-gray-800">AZRA Admin</span>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            <li>
              <Link href="/admin" className="flex items-center gap-3 px-3 py-2 bg-gray-100 text-gray-900 rounded-md font-medium">
                <LayoutDashboard className="w-5 h-5 text-gray-500" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/admin" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md font-medium transition-colors">
                <ShoppingBag className="w-5 h-5 text-gray-400" />
                Products
              </Link>
            </li>
            <li>
              <Link href="/admin" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md font-medium transition-colors">
                <Users className="w-5 h-5 text-gray-400" />
                Customers
              </Link>
            </li>
            <li>
              <Link href="/admin" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md font-medium transition-colors">
                <Settings className="w-5 h-5 text-gray-400" />
                Settings
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <Link href="/" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-red-600 rounded-md font-medium transition-colors">
            <LogOut className="w-5 h-5 text-gray-400" />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-gray-50 p-8">
        {children}
      </main>
    </div>
  );
}
