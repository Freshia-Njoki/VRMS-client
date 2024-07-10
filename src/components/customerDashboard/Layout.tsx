
import { Outlet } from 'react-router-dom'
import SideNav from './SideNav'
import Card from './Card'

function Layout() {
   
    return (
        <div className='flex min-h-screen bg-neutral-100 text-neutral-200'>
            <div className='min-w-[20%] hidden md:block'>
                <SideNav />
            </div>
            <div className='flex flex-col min-w-[90%]'>
              
                <div className="h-fit">
                    <Card>
                        <div>heey</div>
                    </Card>
                </div>

            </div>
        </div>
    )
}

export default Layout