import { Link } from 'react-router-dom';

function IconSignInHeader() {
    return (
        <>
            <Link to={`/login`}>
                <button className="md:text-xl text-[16px] group relative inline-flex items-center justify-center whitespace-nowrap text-center font-semibold rounded-4 p-1.5 motion-safe:transition-opacity disabled:pointer-events-none disabled:opacity-30 active:opacity-60 focus-visible:ring-3 focus-visible:ring-sky focus-visible:outline-0 hover:opacity-80">
                    Sign in
                </button>
            </Link>
        </>
    );
}

export default IconSignInHeader;
