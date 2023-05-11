const SearchSol = () => {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flexBasis: '50%', padding: '20px' }}>
                <div className="row search-container flex justify-center items-center h-auto m-20">
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </div>
                <div className="row search-container flex justify-center items-center h-auto m-20">
                    <ul className="menu menu-compact lg:menu-normal bg-base-100 w-56 p-2 rounded-box">
                        <li><a href="/searchsol">Back Pain</a></li>
                        <li><a>Nauseas</a></li>
                        <li><a>Diarrhea</a></li>
                        <li><a>+ Others</a></li>
                    </ul>
                </div>
            </div>
            <div style={{ flexBasis: '50%', padding: '20px' }}>
            <div className="row search-container flex justify-center items-center h-auto m-20">
                    <ul className="menu bg-base-100 w-56">
                        <li><a >Paracetamol</a></li>
                        <li><a className="bordered">Ibuprofeno</a></li>
                        <li><a>Aspirina</a></li>
                        <li><a>Expectorants</a></li>
                        <li><a>Antacids</a></li>
                        <li><a>Acetaminophen</a></li>
                    </ul>
                </div>
            </div>
        </div>        
    );
}

export default SearchSol;