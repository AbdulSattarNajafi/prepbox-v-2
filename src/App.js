import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './layout/Layout';
import Loader from './components/elements/loader';
import NotFound from './pages/NotFound';

const HomePage = React.lazy(() => import('./pages/Home'));
const HomePageJon = React.lazy(() => import('./pages/Home_Jon'));
const TutorPage = React.lazy(() => import('./pages/Tutor'));
const BlogPage = React.lazy(() => import('./pages/Blog'));
const BlogPostPage = React.lazy(() => import('./pages/BlogPost'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,

        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<Loader />}>
                        <HomePage />
                    </Suspense>
                ),
            },
            {
                path: 'tutor',
                element: (
                    <Suspense fallback={<Loader />}>
                        <TutorPage />
                    </Suspense>
                ),
            },
            {
                path: 'blog',
                element: (
                    <Suspense fallback={<Loader />}>
                        <BlogPage />
                    </Suspense>
                ),
            },
            {
                path: 'blog/:postId',
                element: (
                    <Suspense fallback={<Loader />}>
                        <BlogPostPage />
                    </Suspense>
                ),
            },
            {
                path: 'signups',
                element: (
                    <Suspense fallback={<Loader />}>
                        <HomePageJon />
                    </Suspense>
                ),
            },
        ],
    },
    { path: '*', element: <NotFound /> },
]);

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
