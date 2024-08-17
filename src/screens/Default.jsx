import Logo from '../components/Logo';
import Description from "../components/Description";
import Content from "../components/Content";
import GitHub from "../components/GitHub";
import Contador from '../components/Contador';

const Default = () => {
    return (
        <>
            <header className="App-header">
                <Contador />
                <Logo />
                <Description />
                
                <Content />
                <GitHub />
            </header>
        </>
    );
};

export default Default;