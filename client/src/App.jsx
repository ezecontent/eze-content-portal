import React, { useState } from 'react';
import logo from './logo.png'; // Add your EZE logo here (save the image in src/)

const PortalPrototype = () => {
  const [activeTab, setActiveTab] = useState('Creation');

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-dark-blue text-gold p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="EZE Logo" className="h-8 mr-2" />
          <h1 className="text-xl font-bold">EZE Portal</h1>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded bg-white text-gray-800 focus:outline-none"
        />
        <div className="w-8 h-8 bg-gold rounded-full"></div> {/* Profile */}
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <nav className="bg-dark-blue text-gold w-48 p-4">
          <ul className="space-y-4">
            <li onClick={() => setActiveTab('Creation')} className="cursor-pointer hover:underline">Creation Hub</li>
            <li onClick={() => setActiveTab('Editing')} className="cursor-pointer hover:underline">Editing Hub</li>
            <li onClick={() => setActiveTab('Publishing')} className="cursor-pointer hover:underline">Publishing Hub</li>
            <li onClick={() => setActiveTab('Training')} className="cursor-pointer hover:underline">Training Library</li>
            <li onClick={() => setActiveTab('Analytics')} className="cursor-pointer hover:underline">Analytics</li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="p-6 flex-1">
          {/* Progress Bar */}
          <div className="bg-gray-200 h-5 rounded mb-4">
            <div className="bg-gold h-full w-1/2 rounded"></div>
          </div>
          <p className="mb-4">Progress: Creation &gt; Editing &gt; Publishing</p>

          {/* Tabbed Sections */}
          <div className="border-2 border-gold p-4 mb-6 rounded">
            <h2 className="text-lg font-bold mb-2">{activeTab} Hub</h2>
            {activeTab === 'Creation' && (
              <p>Tools for generating content: AI prompts, templates, and automation triggers.</p>
            )}
            {activeTab === 'Editing' && (
              <p>Apps for optimization: Grammar checks, SEO tools, and change logs.</p>
            )}
            {activeTab === 'Publishing' && (
              <p>Schedule posts across platforms and track immediate results.</p>
            )}
            {activeTab === 'Training' && (
              <ul className="list-disc pl-6">
                <li>Video tutorials on content creation.</li>
                <li>PDF guides for editing best practices.</li>
                <li>Interactive quizzes on publishing strategies.</li>
              </ul>
            )}
            {activeTab === 'Analytics' && (
              <p>View engagement metrics, trends, and reports from integrated platforms.</p>
            )}
          </div>

          {/* Unified Tracker Table */}
          <h3 className="text-lg font-bold mb-2">Unified Tracker</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-dark-blue text-gold">
                <th className="p-2">Task</th>
                <th className="p-2">Status</th>
                <th className="p-2">Results</th>
                <th className="p-2">Platforms</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">Post Draft</td>
                <td className="p-2">In Progress</td>
                <td className="p-2">85% Engagement</td>
                <td className="p-2">X, Instagram</td>
              </tr>
              {/* Add more rows dynamically later */}
            </tbody>
          </table>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-dark-blue text-gold p-4 text-center">
        App Links | Automation Logs
      </footer>
    </div>
  );
};

export default PortalPrototype;
