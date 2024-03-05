
import { Button, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <Navbar fluid rounded>
            <Link to="/">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Protected Route</span>
            </Link>
            <div className="flex md:order-2">
                <Link to='login'>
                    <Button>Login</Button>
                </Link>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Link to='/'>
                    Home
                </Link>
                {/* <Link to='secret'>Secret</Link> */}

            </Navbar.Collapse>
        </Navbar>
    );
}
export default Nav