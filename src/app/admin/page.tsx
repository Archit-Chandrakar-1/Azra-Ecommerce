import { ArrowUpRight, DollarSign, ShoppingBag, Users } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { title: "Total Revenue", value: "$45,231.89", change: "+20.1%", icon: DollarSign },
    { title: "Active Orders", value: "123", change: "+12.5%", icon: ShoppingBag },
    { title: "New Customers", value: "89", change: "+5.4%", icon: Users },
  ];

  const recentOrders = [
    { id: "ORD-1023", customer: "Sarah Johnson", date: "Today, 10:24 AM", total: "$530.00", status: "Processing" },
    { id: "ORD-1022", customer: "Emily Chen", date: "Today, 09:12 AM", total: "$850.00", status: "Shipped" },
    { id: "ORD-1021", customer: "Aisha Patel", date: "Yesterday, 04:30 PM", total: "$240.00", status: "Delivered" },
    { id: "ORD-1020", customer: "Jessica Smith", date: "Yesterday, 02:15 PM", total: "$420.00", status: "Processing" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Overview of your store's performance.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">{stat.title}</p>
                  <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                </div>
                <div className="p-2 bg-gray-50 rounded-lg">
                  <Icon className="w-5 h-5 text-gray-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <ArrowUpRight className="w-4 h-4 text-emerald-500 mr-1" />
                <span className="text-emerald-500 font-medium">{stat.change}</span>
                <span className="text-gray-400 ml-2">from last month</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-sm border-b border-gray-200">
                <th className="px-6 py-3 font-medium">Order ID</th>
                <th className="px-6 py-3 font-medium">Customer</th>
                <th className="px-6 py-3 font-medium">Date</th>
                <th className="px-6 py-3 font-medium">Total</th>
                <th className="px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm py-2">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 text-gray-600">{order.customer}</td>
                  <td className="px-6 py-4 text-gray-500">{order.date}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">{order.total}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${order.status === 'Processing' ? 'bg-amber-100 text-amber-800' : 
                        order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' : 
                        'bg-emerald-100 text-emerald-800'}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
