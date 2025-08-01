import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [view, setView] = useState('none');
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const renderComponent = () => {
    switch (view) {
      case 'book':
        return <BookDetails />;
      case 'blog':
        return <BlogDetails />;
      case 'course':
        return <CourseDetails />;
      default:
        return <p>Please select a view</p>;
    }
  };

  return (
      <div className="App">
        <h1>Welcome to BloggerApp</h1>

        {/* Ternary conditional rendering */}
        {isLoggedIn ? (
            <p>✅ You are logged in</p>
        ) : (
            <p>❌ Please log in to see the content</p>
        )}

        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>

        {/* Logical && operator */}
        {isLoggedIn && (
            <div>
              <button onClick={() => setView('book')}>Show Book Details</button>
              <button onClick={() => setView('blog')}>Show Blog Details</button>
              <button onClick={() => setView('course')}>Show Course Details</button>
            </div>
        )}

        <hr />
        {isLoggedIn && renderComponent()}
      </div>
  );
}

export default App;
