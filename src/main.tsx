import '@/globals.css';

import { createRoot, type Container, type Root } from "react-dom/client";
import MainPage from './pages/MainPage';

const container: Container = (document.body)
const root: Root = createRoot(container);
root.render((<MainPage title="Hello world !" />) as React.ReactNode);
