import MainLayout from '@/components/MainLayout';
import { Search, Filter, Calendar, User, Shield, Settings, Database, Plus, Mail, Globe, Monitor, AlertCircle, Folder, Clock, FileText } from 'lucide-react';

const ActivityLogsPage = () => {
  const activities = [
    {
      id: 1,
      type: 'user_created',
      user: 'Admin',
      description: 'Created new user account for Sarah Wilson',
      timestamp: '2 hours ago',
      status: 'Completed',
      targetUser: 'Sarah Wilson',
      email: 'sarah.wilson@example.com',
    },
    {
      id: 2,
      type: 'user_login',
      user: 'John Doe',
      description: 'User logged in successfully',
      timestamp: '4 hours ago',
      status: 'Success',
      ipAddress: '192.168.1.100',
      userAgent: 'Chrome 120.0.0.0',
    },
    {
      id: 3,
      type: 'user_updated',
      user: 'Admin',
      description: 'Updated user permissions for Mike Johnson',
      timestamp: '1 day ago',
      status: 'Completed',
      targetUser: 'Mike Johnson',
      changes: 'Role changed from User to Manager',
    },
    {
      id: 4,
      type: 'user_deleted',
      user: 'Admin',
      description: 'Deleted user account',
      timestamp: '2 days ago',
      status: 'Completed',
      targetUser: 'Alex Brown',
      reason: 'Account termination',
    },
    {
      id: 5,
      type: 'system_backup',
      user: 'System',
      description: 'Automated system backup completed',
      timestamp: '3 days ago',
      status: 'Success',
      backupSize: '2.5 GB',
      duration: '15 minutes',
    },
    {
      id: 6,
      type: 'permission_changed',
      user: 'Admin',
      description: 'Changed system permissions',
      timestamp: '4 days ago',
      status: 'Completed',
      module: 'Leads Management',
      action: 'Granted edit permissions to Sales team',
    },
    {
      id: 7,
      type: 'data_export',
      user: 'Jane Smith',
      description: 'Exported leads data to CSV',
      timestamp: '5 days ago',
      status: 'Completed',
      records: '1,234 leads',
      fileSize: '2.1 MB',
    },
    {
      id: 8,
      type: 'failed_login',
      user: 'Unknown',
      description: 'Failed login attempt',
      timestamp: '6 days ago',
      status: 'Failed',
      ipAddress: '203.0.113.45',
      reason: 'Invalid credentials',
    },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'user_created':
        return <User className="w-5 h-5 text-green-600" />;
      case 'user_login':
        return <Shield className="w-5 h-5 text-blue-600" />;
      case 'user_updated':
        return <Settings className="w-5 h-5 text-purple-600" />;
      case 'user_deleted':
        return <User className="w-5 h-5 text-red-600" />;
      case 'system_backup':
        return <Database className="w-5 h-5 text-orange-600" />;
      case 'permission_changed':
        return <Shield className="w-5 h-5 text-indigo-600" />;
      case 'data_export':
        return <Database className="w-5 h-5 text-cyan-600" />;
      case 'failed_login':
        return <Shield className="w-5 h-5 text-red-600" />;
      default:
        return <User className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
      case 'Success':
        return 'bg-green-100 text-green-800';
      case 'Failed':
        return 'bg-red-100 text-red-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getActivityTypeLabel = (type: string) => {
    switch (type) {
      case 'user_created':
        return 'User Created';
      case 'user_login':
        return 'User Login';
      case 'user_updated':
        return 'User Updated';
      case 'user_deleted':
        return 'User Deleted';
      case 'system_backup':
        return 'System Backup';
      case 'permission_changed':
        return 'Permission Changed';
      case 'data_export':
        return 'Data Export';
      case 'failed_login':
        return 'Failed Login';
      default:
        return 'System Activity';
    }
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Activity Logs</h1>
            <p className="text-gray-600">Track system activities and user actions</p>
          </div>
          <div className="flex space-x-3">
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Database className="w-4 h-4 mr-2" />
              Export Logs
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4 mr-2" />
              View All
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <User className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">User Activities</p>
                <p className="text-2xl font-bold text-gray-900">156</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Login Events</p>
                <p className="text-2xl font-bold text-gray-900">89</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-red-100 rounded-lg">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Failed Logins</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Database className="w-6 h-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">System Events</p>
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
              placeholder="Search activities..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
        </div>

        {/* Activity Timeline */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Recent System Activities</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {activities.map((activity) => (
              <div key={activity.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      {getActivityIcon(activity.type)}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(activity.status)}`}>
                          {activity.status}
                        </span>
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                          {getActivityTypeLabel(activity.type)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">{activity.timestamp}</p>
                    </div>
                    <p className="text-sm text-gray-900 mt-1">{activity.description}</p>
                    
                    {/* Activity Details */}
                    <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-600">
                      {activity.targetUser && (
                        <span className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {activity.targetUser}
                        </span>
                      )}
                      {activity.email && (
                        <span className="flex items-center">
                          <Mail className="w-4 h-4 mr-1" />
                          {activity.email}
                        </span>
                      )}
                      {activity.ipAddress && (
                        <span className="flex items-center">
                          <Globe className="w-4 h-4 mr-1" />
                          {activity.ipAddress}
                        </span>
                      )}
                      {activity.userAgent && (
                        <span className="flex items-center">
                          <Monitor className="w-4 h-4 mr-1" />
                          {activity.userAgent}
                        </span>
                      )}
                      {activity.changes && (
                        <span className="flex items-center">
                          <Settings className="w-4 h-4 mr-1" />
                          {activity.changes}
                        </span>
                      )}
                      {activity.reason && (
                        <span className="flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {activity.reason}
                        </span>
                      )}
                      {activity.backupSize && (
                        <span className="flex items-center">
                          <Database className="w-4 h-4 mr-1" />
                          {activity.backupSize}
                        </span>
                      )}
                      {activity.duration && (
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {activity.duration}
                        </span>
                      )}
                      {activity.module && (
                        <span className="flex items-center">
                          <Folder className="w-4 h-4 mr-1" />
                          {activity.module}
                        </span>
                      )}
                      {activity.action && (
                        <span className="flex items-center">
                          <Shield className="w-4 h-4 mr-1" />
                          {activity.action}
                        </span>
                      )}
                      {activity.records && (
                        <span className="flex items-center">
                          <Database className="w-4 h-4 mr-1" />
                          {activity.records}
                        </span>
                      )}
                      {activity.fileSize && (
                        <span className="flex items-center">
                          <FileText className="w-4 h-4 mr-1" />
                          {activity.fileSize}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ActivityLogsPage;
