import Header from '~/Components/Layout/components/Header';

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div>
                <div>{children}</div>
            </div>
        </div>
    );
};
export default DefaultLayout;
