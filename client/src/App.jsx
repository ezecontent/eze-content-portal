import React, { useState } from 'react';
import logo from './logo.png'; // Your EZE logo (save one of the attached gold key designs here)

const PortalPrototype = () => {
  const [activeTab, setActiveTab] = useState('Creation');
  const [tasks, setTasks] = useState([
    { id: 1, task: 'Post Draft', status: 'In Progress', results: '85% Engagement', platforms: 'X, Instagram' },
    { id: 2, task: 'Video Edit', status: 'Completed', results: '92% Views', platforms: 'TikTok, YouTube' },
    { id: 3, task: 'Schedule Thread', status: 'Pending', results: 'N/A', platforms: 'X, LinkedIn' },
  ]);

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      task: 'New Content Item',
      status: 'Pending',
      results: 'N/A',
      platforms: 'All Platforms',
    };
    setTasks([...tasks, newTask]);
  };

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
        <div className="w-8 h-8 bg-gold rounded-full"></div>
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
              <div>
                <h3 className="text-md font-semibold mb-4">Training Resources</h3>
                {/* Accordion for Videos */}
                <details className="mb-4">
                  <summary className="cursor-pointer text-gold hover:underline">Video Tutorials</summary>
                  <div className="pl-4 mt-2">
                    <p>Content Creation Basics:</p>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/example-video-id" // Replace with real YouTube ID
                      title="Creation Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="my-2"
                    ></iframe>
                    <p>Editing Pro Tips:</p>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/another-video-id" // Replace
                      title="Editing Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="my-2"
                    ></iframe>
                  </div>
                </details>

                {/* Accordion for PDFs/Guides */}
                <details className="mb-4">
                  <summary className="cursor-pointer text-gold hover:underline">PDF Guides & Instructions</summary>
                  <div className="pl-4 mt-2">
                    <a href="/pattern-eze4u.pdf" download className="text-blue hover:underline">Download Pattern - EZE4U.pdf</a> {/* Upload PDF to public folder */}
                    <p className="mt-2">Publishing Best Practices Guide (link to automated download).</p>
                  </div>
                </details>

                {/* Accordion for Quizzes */}
                <details>
                  <summary className="cursor-pointer text-gold hover:underline">Interactive Quizzes</summary>
                  <div className="pl-4 mt-2">
                    <p>Quiz on Social Media Automation: Coming soon (integrate via embedded form or Zapier).</p>
                  </div>
                </details>
              </div>
            )}
            {activeTab === 'Analytics' && (
              <p>View engagement metrics, trends, and reports from integrated platforms.</p>
            )}
          </div>

          {/* Unified Tracker Table */}
          <h3 className="text-lg font-bold mb-2">Unified Tracker</h3>
          <button onClick={addTask} className="mb-4 px-4 py-2 bg-gold text-dark-blue rounded hover:bg-opacity-80">Add New Task (Automate)</button>
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
              {tasks.map((task) => (
                <tr key={task.id} className="border-b">
                  <td className="p-2">{task.task}</td>
                  <td className="p-2">{task.status}</td>
                  <td className="p-2">{task.results}</td>
                  <td className="p-2">{task.platforms}</td>
                </tr>
              ))}
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