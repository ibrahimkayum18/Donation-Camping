
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import ErrorPage from '../ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Donation from '../Pages/Donation/Donation';
import Statistics from '../Pages/Statistics/Statistics';
import Details from '../Components/Details/Details';

const myRoute = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/donations.json')
            },
            {
                path: '/donation',
                element: <Donation></Donation>,
                loader: () => fetch('/donations.json')
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
                loader: () => fetch('/donations.json')
            },
            {
                path: 'details/:id',
                element: <Details></Details>,
                loader: () => fetch('/donations.json')
            }
        ]
    }
])

export default myRoute;