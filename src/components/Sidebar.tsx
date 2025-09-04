'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Users, UserPlus, Activity } from 'lucide-react';

const Sidebar = () => {
  const pathname = usePathname();

  const navigation = [
    {
      name: 'Users',
      href: '/users',
      icon: Users,
    },
    {
      name: 'Leads',
      href: '/leads',
      icon: UserPlus,
    },
    {
      name: 'Activity Logs',
      href: '/activity-logs',
      icon: Activity,
    },
  ];

  return (
    <div className="flex h-screen w-64 flex-col bg-white border-r border-gray-200">
      {/* Logo */}
      <div className="flex h-16 items-center justify-center border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-900">CRM Gadget</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-4 py-6">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <item.icon
                className={`mr-3 h-5 w-5 ${
                  isActive ? 'text-blue-700' : 'text-gray-400 group-hover:text-gray-500'
                }`}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-gray-200 p-4">
        <div className="text-xs text-gray-500">
          © 2024 CRM Gadget
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
