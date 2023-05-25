import { Header, Sidebar, Footer } from '../index';
import AppAdmins from '@services/AppAdmins';
import Loading from '@src/libs/Loading';

import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

function DefaultLayout({ children }) {
    let navigate = useNavigate();
    const [toggleSide, setToggleSideBar] = useState(true);
    const [open, setOpen] = useState(isMobile ? false : true);
    const toggleSideBar = () => {
        setToggleSideBar(!toggleSide);
    };

    useEffect(() => {
        if (isMobile && open) setOpen(!open);
        (async () => {
            let data = await AppAdmins.Status();
            if (data.status != 1) {
                message.error(data.message);
                localStorage.removeItem('token');
                setTimeout(() => {
                    Loading(false);
                    navigate('/auth/login');
                }, 1000);
            }
        })();
    }, [children.props.link]);

    const toggleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="App">
            <Sidebar open={open} toggleOpen={toggleOpen} toggleSideBar={toggleSideBar} />
            <div
                className={`w-full px-2 md:px-6 pt-4 bg-[#0b1437] duration-300 min-h-screen ${
                    toggleSide ? 'sm:w-[calc(100%-16rem)]' : 'sm:w-[calc(100%-5rem)]'
                } float-right`}
            >
                <Header open={open} toggleOpen={toggleOpen} toggleSide={toggleSide} />
                {children}
                <Footer />
            </div>
        </div>
    );
}

export default DefaultLayout;
