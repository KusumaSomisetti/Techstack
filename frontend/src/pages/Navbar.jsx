import { Link, useLocation } from 'react-router-dom';

const topics = [
  'home',         // newly added
  'javascript',
  'react',
  'node',
  'python',
  'css',
  'html',
  'machinelearning',
  'deeplearning'
];

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getDisplayName = (topic) => {
    if (topic === 'home') return 'Home';
    return topic.charAt(0).toUpperCase() + topic.slice(1);
  };

  return (
    <nav style={{
      padding: '10px 0',
      backgroundColor: '#f8f9fa',
      borderBottom: '1px solid #ddd',
      display: 'flex',
      justifyContent: 'center',
      gap: '16px',
      flexWrap: 'wrap'
    }}>
      {topics.map((topic) => {
        const path = topic === 'home' ? '/topic-home' : `/topics/${topic}`;
        const isActive =
          (topic === 'home' && currentPath === '/topics') ||
          currentPath === `/topics/${topic}`;

        return (
          <Link
            key={topic}
            to={path}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: isActive ? 'bold' : 'normal',
              backgroundColor: isActive ? '#007bff' : '#e9ecef',
              color: isActive ? '#fff' : '#333',
              transition: '0.3s'
            }}
          >
            {getDisplayName(topic)}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
