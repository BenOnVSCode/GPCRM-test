import MainLayout from '@/components/MainLayout';
import { Plus, Search, Filter, Phone, Mail, Building } from 'lucide-react';
import Link from 'next/link';

const LeadsPage = () => {
  const leads = [
    {
      id: 1,
      name: 'Acme Corporation',
      contact: 'John Smith',
      email: 'john.smith@acme.com',
      phone: '+1 (555) 123-4567',
      status: 'New Lead',
      source: 'Website',
      value: '$50,000',
      lastContact: '2 days ago',
    },
    {
      id: 2,
      name: 'TechStart Inc',
      contact: 'Sarah Johnson',
      email: 'sarah@techstart.com',
      phone: '+1 (555) 987-6543',
      status: 'Please take payment',
      source: 'Referral',
      value: '$75,000',
      lastContact: '1 week ago',
    },
    {
      id: 3,
      name: 'Global Solutions',
      contact: 'Mike Davis',
      email: 'mike@globalsolutions.com',
      phone: '+1 (555) 456-7890',
      status: 'Closer Callback',
      source: 'Cold Call',
      value: '$120,000',
      lastContact: '3 days ago',
    },
    {
      id: 4,
      name: 'Innovation Labs',
      contact: 'Emily Wilson',
      email: 'emily@innovationlabs.com',
      phone: '+1 (555) 789-0123',
      status: 'Sale',
      source: 'Trade Show',
      value: '$200,000',
      lastContact: 'Today',
    },
    {
      id: 5,
      name: 'Digital Dynamics',
      contact: 'Alex Brown',
      email: 'alex@digitaldynamics.com',
      phone: '+1 (555) 321-6540',
      status: 'SFDP',
      source: 'Social Media',
      value: '$150,000',
      lastContact: '1 day ago',
    },
    {
      id: 6,
      name: 'Future Tech',
      contact: 'Lisa Chen',
      email: 'lisa@futuretech.com',
      phone: '+1 (555) 654-3210',
      status: 'DD Sale',
      source: 'Email Campaign',
      value: '$180,000',
      lastContact: '4 days ago',
    },
    {
      id: 7,
      name: 'Smart Solutions',
      contact: 'David Wilson',
      email: 'david@smartsolutions.com',
      phone: '+1 (555) 987-1234',
      status: 'Please take payment dd',
      source: 'Website',
      value: '$95,000',
      lastContact: '2 hours ago',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New Lead':
        return 'bg-blue-100 text-blue-800';
      case 'Please take payment':
        return 'bg-yellow-100 text-yellow-800';
      case 'Closer Callback':
        return 'bg-purple-100 text-purple-800';
      case 'Sale':
        return 'bg-green-100 text-green-800';
      case 'SFDP':
        return 'bg-orange-100 text-orange-800';
      case 'DD Sale':
        return 'bg-indigo-100 text-indigo-800';
      case 'Please take payment dd':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Leads</h1>
            <p className="text-gray-600">Track and manage your sales opportunities</p>
          </div>
          <Link href="/leads/create" className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            Add Lead
          </Link>
        </div>

                 {/* Stats Cards */}
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
           <div className="bg-white p-6 rounded-lg shadow">
             <div className="flex items-center">
               <div className="p-2 bg-blue-100 rounded-lg">
                 <Building className="w-6 h-6 text-blue-600" />
               </div>
               <div className="ml-4">
                 <p className="text-sm font-medium text-gray-600">Total Leads</p>
                 <p className="text-2xl font-bold text-gray-900">1,234</p>
               </div>
             </div>
           </div>
           <div className="bg-white p-6 rounded-lg shadow">
             <div className="flex items-center">
               <div className="p-2 bg-yellow-100 rounded-lg">
                 <Building className="w-6 h-6 text-yellow-600" />
               </div>
               <div className="ml-4">
                 <p className="text-sm font-medium text-gray-600">Payment Pending</p>
                 <p className="text-2xl font-bold text-gray-900">456</p>
               </div>
             </div>
           </div>
           <div className="bg-white p-6 rounded-lg shadow">
             <div className="flex items-center">
               <div className="p-2 bg-purple-100 rounded-lg">
                 <Building className="w-6 h-6 text-purple-600" />
               </div>
               <div className="ml-4">
                 <p className="text-sm font-medium text-gray-600">Callbacks</p>
                 <p className="text-2xl font-bold text-gray-900">89</p>
               </div>
             </div>
           </div>
           <div className="bg-white p-6 rounded-lg shadow">
             <div className="flex items-center">
               <div className="p-2 bg-green-100 rounded-lg">
                 <Building className="w-6 h-6 text-green-600" />
               </div>
               <div className="ml-4">
                 <p className="text-sm font-medium text-gray-600">Sales</p>
                 <p className="text-2xl font-bold text-gray-900">23</p>
               </div>
             </div>
           </div>
         </div>

        {/* Search and Filters */}
        <div className="flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search leads..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-lg shadow">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Value
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Source
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Building className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                          <div className="text-sm text-gray-500">{lead.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{lead.contact}</div>
                      <div className="text-sm text-gray-500">{lead.phone}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(lead.status)}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {lead.value}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {lead.source}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {lead.lastContact}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                      <button className="text-green-600 hover:text-green-900 mr-3">Call</button>
                      <button className="text-purple-600 hover:text-purple-900">Email</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default LeadsPage;
