// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
// import { BrowserRouter } from 'react-router'
// import { Suspense } from 'react'

// import { CusomLayout } from '../src/components/Layout/CusomLayout'
// import MainPage from '../src/pages/MainPage/MainPage'
// import { Route, Routes } from 'react-router-dom';
// import { GenreList } from './components/GenreList/GenreList'


// function App() {

// 	return (
// 		<BrowserRouter>
// 			<Suspense fallback={<div>Loading...</div>}>
// 				<Routes>
// 					<Route path='/' element={<CustomLayout />}>
// 						<Route index  element={<MainPage />} />
// 						<Route path="/genre" element={<GenreList />} />
// 					</Route>
// 				</Routes>
// 			</Suspense>
// 		</BrowserRouter>
// 	);
// }

// export default App

import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CustomLayout } from '../src/components/Layout/CustomLayout';
import MainPage from '../src/pages/MainPage/MainPage';

import './App.css';
import MoviePage from './pages/MoviePage/MoviePage';

import Profile from './pages/Profile/Profile';
import FavoritePage from './pages/Profile/FavoritePage';
import SettingsPage from './pages/Profile/SettingsPage';
import GenrePage from './pages/GenrePage/GenrePage';
import GenreMoviePage from './pages/GenreMoviePage/GenreMoviePage';


function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<CustomLayout />}>
                        <Route index element={<MainPage />} />
                        <Route path="genres" element={<GenrePage />} />
                        <Route path="movie/:id" element={<MoviePage />} />
                        <Route path="movie" element={<GenreMoviePage />} />
                        <Route path="profile" element={<Profile />}>
                            <Route path="favorite" element={<FavoritePage />} />
                            <Route path="settings" element={<SettingsPage />} />
                        </Route>
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;