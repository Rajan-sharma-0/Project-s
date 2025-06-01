import React from 'react';

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-950">
    
      <main className="flex-1 flex flex-col">
        <div className="p-4 sm:p-8 flex flex-col gap-6">
          {/* Cards Row */}
          <div className="flex flex-col gap-4 md:flex-row md:gap-6">
            {/* Weather Card */}
            <div className="bg-gray-800 rounded-xl p-4 sm:p-6 flex-1 min-w-[200px]">
              <div className="flex items-center mb-2 text-blue-400">
                <span className="material-icons mr-2">cloud</span>
                <span className="font-semibold">Weather</span>
              </div>
              <a href="#" className="text-blue-400 hover:underline">View details →</a>
            </div>
            {/* Stocks Card */}
            <div className="bg-gray-800 rounded-xl p-4 sm:p-6 flex-1 min-w-[200px]">
              <div className="flex items-center mb-2 text-blue-400">
                <span className="material-icons mr-2">show_chart</span>
                <span className="font-semibold">Stocks</span>
              </div>
              <div className="text-white font-bold text-lg sm:text-2xl">IBM</div>
              <div className="text-2xl sm:text-3xl font-bold text-white">$137.32 <span className="text-green-400 text-base sm:text-lg align-top">↑ +1.24%</span></div>
              <div className="text-gray-400 text-xs sm:text-sm">Open: $137.89 &nbsp; High: $138.60</div>
              <a href="#" className="text-blue-400 hover:underline mt-2 inline-block">View details →</a>
            </div>
            {/* News Card */}
            <div className="bg-gray-800 rounded-xl p-4 sm:p-6 flex-1 min-w-[200px]">
              <div className="flex items-center mb-2 text-blue-400">
                <span className="material-icons mr-2">article</span>
                <span className="font-semibold">Latest News</span>
              </div>
              <div className="text-gray-400 text-xs mb-1">5/22/2025</div>
              <div className="text-white font-semibold mb-1 text-sm sm:text-base">
                19-Year-Old to Plead Guilty to Hacking Charges After Data Breach of Millions of Schoolchildren
              </div>
              <div className="text-gray-400 text-xs sm:text-sm mb-2">
                A company with the personal information of tens of millions of children was breached last year....
              </div>
              <a href="#" className="text-blue-400 hover:underline">View all news →</a>
            </div>
          </div>
          {/* Recent Activity */}
          <div className="bg-gray-800 rounded-xl p-4 sm:p-6 mt-4 sm:mt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg sm:text-xl font-semibold text-white">Recent Activity</h3>
              <span className="bg-blue-700 text-white text-xs px-3 py-1 rounded-full">Today</span>
            </div>
            <ul>
              <li className="flex items-center mb-4">
                <span className="material-icons mr-4 p-2 rounded-full bg-blue-900 text-white">cloud</span>
                <div>
                  <div className="text-white text-sm sm:text-base">Weather alert in your area</div>
                  <div className="text-xs text-gray-400">10 minutes ago</div>
                </div>
              </li>
              <li className="flex items-center mb-4">
                <span className="material-icons mr-4 p-2 rounded-full bg-blue-800 text-white">show_chart</span>
                <div>
                  <div className="text-white text-sm sm:text-base">IBM stock price update</div>
                  <div className="text-xs text-gray-400">25 minutes ago</div>
                </div>
              </li>
              <li className="flex items-center">
                <span className="material-icons mr-4 p-2 rounded-full bg-yellow-900 text-white">article</span>
                <div>
                  <div className="text-white text-sm sm:text-base">New headlines in Technology</div>
                  <div className="text-xs text-gray-400">1 hour ago</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;