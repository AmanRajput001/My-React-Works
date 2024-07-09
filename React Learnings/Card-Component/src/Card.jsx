import profilepic from './assets/AR_logo.png'

function Card(){
    return(
        <div className="card">
            <img src= {profilepic} alt="Profile-Picture" id="profile-img"/>
            <h2 className="card-title">Learn With AR</h2>
            <p className="card-text">I am a Programmer and Logical thinker.</p>
        </div>
    );
}

export default Card