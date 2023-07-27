import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './layout/Layout';
import Home from './pages/Home';
import Tutor from './pages/Tutor';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,

        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'tutor',
                element: <Tutor />,
            },
            {
                path: 'blog',
                element: <Blog />,
            },
            {
                path: 'blog/:postId',
                element: <BlogPost />,
            },
        ],
    },
    { path: '*', element: <NotFound /> },
]);

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
