import {
  BarChart2,
  DollarSign,
  Menu,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const SIDEBAR_ITEMS = [
  {
    name: "Resorts",
    icon: ShoppingBag,
    color: "#8B5CF6",
    href: "/admin",
  },
  { name: "Users", icon: Users, color: "#EC4899", href: "/admin/users" },
  //   { name: "Sales", icon: DollarSign, color: "#10B981", href: "/admin/sales" },
  //   { name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
  {
    name: "Analytics",
    icon: TrendingUp,
    color: "#3B82F6",
    href: "/admin/analytics",
  },
  {
    name: "Settings",
    icon: Settings,
    color: "#6EE7B7",
    href: "/admin/settings",
  },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 165 : 89 }}
    >
      <div className="fixed h-full bg-gray-800 p-2 flex flex-col border-r border-gray-700">
        {/* Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
        >
          <Menu size={24} />
        </motion.button>

        {/* Navigation Items */}
        <nav className="mt-8 flex-grow flex-col bg-transparent items-baseline justify-start gap-2">
          {SIDEBAR_ITEMS.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link key={item.href} to={item.href}>
                <motion.div
                  className={`flex items-center p-4 text-sm font-medium rounded-lg transition-colors mb-2 ${
                    isActive
                      ? "bg-gray-700 text-white"
                      : "hover:bg-gray-700 text-gray-300"
                  }`}
                >
                  <item.icon
                    size={20}
                    style={{
                      color: isActive ? "#FFFFFF" : item.color,
                      minWidth: "20px",
                    }}
                  />
                  <AnimatePresence>
                    {isSidebarOpen && (
                      <motion.span
                        className="ml-4 whitespace-nowrap"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2, delay: 0.3 }}
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Link>
            );
          })}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
