'use client';

export default function AccountPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">My Account</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div className="bg-white dark:bg-background-dark rounded-xl p-6 shadow-sm h-fit">
          <nav className="space-y-2">
            <button className="w-full text-left px-4 py-3 rounded-lg bg-primary text-white font-semibold">
              Profile
            </button>
            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              Orders
            </button>
            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              Wishlist
            </button>
            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              Settings
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="md:col-span-2 bg-white dark:bg-background-dark rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Full Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold mb-2">Phone</label>
              <input 
                type="tel" 
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                placeholder="+1 (555) 000-0000"
              />
            </div>
            
            <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}