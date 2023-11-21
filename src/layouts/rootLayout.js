import { React, Outlet } from 'react'
import Navbar from '../components/navbar/navbar'

export default function RootLayout() {
    return (
        <div className="rootLayout">
            <Navbar />


            <main>
                <Outlet />
            </main>

        </div>
    )
}