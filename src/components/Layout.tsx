import { ReactNode } from 'react';
import Header from './Header';

type LayoutProps = {
    children: ReactNode;
};

function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center container mt-[66px] mx-auto">
                {children}
            </div>
        </>
    );
}

export default Layout;
