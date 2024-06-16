import AddClientModel from '../components/AddClientModel';
import AddProjectModel from '../components/AddProjectModel';
import Projects from '../components/Projects';
import Clients from '../components/Clients';


export default function Home() {
    return (
        <>
            <div className="d-flex gap-3 mb-4">
                <AddClientModel />
                <AddProjectModel />
            </div>
            <Projects />
            <hr />
            <Clients />
        </>
    );
}
