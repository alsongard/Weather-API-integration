function Header(){
    return(
        <header>
            <div className="logo">
                <h1>Weather Integration App</h1>
            </div>
            <ul className="nav-bar">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </header>
    )

}
function UserCapture(){
    return(
        <section className="userCapture">
        <h2>Weather Application</h2>
        <p>The application will display the weather conditions of a place</p>
        <p>Enter the location or postal code of the region you wish to view </p>
        <input type="alphanumeric" placeholder="Enter location...."></input>
        <input type="submit"  onclick="function">Submit</input>
    </section>
    )
}

function Page(){
    return(
        <div>
            <Header/>
            <UserCapture/>
        </div>
    )
}

export default Page;