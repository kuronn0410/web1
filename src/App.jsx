// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Level1 from './pages/Level1/Level1'
import Level2 from './pages/Level2/Level2'
import Level3 from './pages/Level3/Level3'
import Level4 from './pages/Level4/Level4'
import Level5 from './pages/Level5/Level5'
import Level6 from './pages/Level6/Level6'
import Level7 from './pages/Level7/Level7'

// 必要に応じて他の Level ページもインポート


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Level1 />} />
        <Route path="/sex" element={<Level2 />} />
        <Route path="/sausage" element={<Level3 />} />
        <Route path="/awabi" element={<Level4 />} />
        <Route path="/unko" element={<Level5 />} />
        <Route path="/onani" element={<Level6 />} />
         <Route path="/ntr" element={<Level7 />} />
        {/* 他のルートも必要に応じて追加 */}
      </Routes>
    </BrowserRouter>
  );
}
