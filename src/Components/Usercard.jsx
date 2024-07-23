import PropTypes from "prop-types";


const userData = [
    {
        name:"kishore Madhavan",
        city: "chennai",
        des: "Front-end Developer",
        online: false,
        skills: ["java", "HTML", "Astro"],
        profile: "/img.jpg",
        

        
    },
    {
        name:" Pavan",
        city: "salem",
        des: "Front-end Developer",
        online: true,
        skills: ["java", "HTML", "Astro"],
        profile: "/img.jpg",
        
    },
    {
        name:"Madhavan",
        city: "chennai",
        des: "Front-end Developer",
        skills: ["java", "HTML", "Astro"],
        online: false,
        profile: "/img.jpg",
    }
];

function User(props) {
    return (
    <div className="card-container">
        <span className={props.online ? "pro online" : "pro offline"}>{props.online ? "ACTIVE" : "OFFLINE"}</span>
        <img src={props.profile} className="img" alt="user" />
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.des}</p>
        <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outlined">Following</button>
        </div>
        <div className="skills">
            <h5>Skills</h5>
            <ul>
                {props.skills.map((skill,index) =>(
                    <li key={index}>{skill}</li>
                    ) 
                )}
            </ul>
        </div>
    </div>  
    );
    
    
}

export const UserCard = () => {
  return (
    <>
    {userData.map((user,index) => (
        <User key={index}
        name={user.name}
        city={user.city}
        des={user.des}
        online={user.online}
        skills={user.skills}
        profile={user.profile}
        />
    ))}
    </>
  )
  
}


{/* <User name="Kishore Madhavan" place="Chennai" des="Front-end Developer" skills={["HTML","CSS","React", "Astro"]} online={true} /> */}

User.propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    des: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    online: PropTypes.bool.isRequired,
    profile: PropTypes.string.isRequired,
};