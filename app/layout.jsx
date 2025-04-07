import { setCookie } from '../utils/cookies';

export default function RootLayout({ children }) {
  // Client-side only
  useEffect(() => {
    setCookie('visited', 'true');
    setCookie('session_id', Math.random().toString(36).substring(2));
  }, []);
  
  return (
    // ... existing code ...
  );
} 