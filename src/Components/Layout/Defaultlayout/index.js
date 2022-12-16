import Header from '~/Components/Layout/components/Header';
import Sidebar from './Sidebar';

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div>
                <Sidebar />
                <div>{children}</div>
            </div>
        </div>
    );
};
export default DefaultLayout;
