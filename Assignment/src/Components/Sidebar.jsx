import React from 'react';

function Sidebar() {
  return (
    <aside className="bg-gray-900 text-white w-64 min-w-[200px] hidden sm:flex flex-col justify-between">
      <div>
        <div className="p-6">
          <h1 className="text-2xl font-bold text-blue-400">DataViz</h1>
          <p className="text-sm text-gray-400 mt-1">Analytics Dashboard</p>
        </div>
        <nav className="mt-8">
          <ul>
            <li className="flex items-center px-6 py-3 bg-gray-800 rounded-l-full font-semibold">
              <span className="material-icons mr-3">dashboard</span>
              Dashboard
            </li>
            <li className="flex items-center px-6 py-3 hover:bg-gray-800 cursor-pointer">
              <span className="material-icons mr-3">cloud</span>
              Weather
            </li>
            <li className="flex items-center px-6 py-3 hover:bg-gray-800 cursor-pointer">
              <span className="material-icons mr-3">article</span>
              News
            </li>
            <li className="flex items-center px-6 py-3 hover:bg-gray-800 cursor-pointer">
              <span className="material-icons mr-3">show_chart</span>
              Finance
            </li>
          </ul>
        </nav>
      </div>
      <div className="p-6">
        <button className="flex items-center text-gray-400 hover:text-white">
          <span className="material-icons mr-2">logout</span>
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;