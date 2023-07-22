import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';

export default function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
