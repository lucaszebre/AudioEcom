import  { ReactNode, FC } from 'react';
import Nav from './nav';
import Footer from './footer';
// import Modal from './modal';
import ModalCheck from './modalCheck';
import { useShopStore } from '../stores';

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {

    const { ModalChecked } = useShopStore();
    return (
        <>
            <Nav 
            color='black'
            />
            {/* <Modal/>  */}
            {ModalChecked &&  <ModalCheck /> }
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;
