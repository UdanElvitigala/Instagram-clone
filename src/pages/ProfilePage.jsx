import { useParams, NavLink } from "react-router-dom"
import PostData from "../data/posts.json"

export default function ProfilePage() {
    const name = useParams().name
    let selectedProfile

    for(let x=0; x < PostData.length; x++ ) {
        if (PostData[x].name == name) {
            selectedProfile = PostData[x]
        }
    }
    return (
        <div className="d-flex flex-column text-white" style={{ margin : 20, marginTop : 50  }}>
            
            <NavLink to={`..`}>
                <div style={{
                         marginRight : 10,
                         maxWidth : 50
                     }}
                >
                    <svg viewBox="-3 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" transform="rotate(90)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path d="M0 16c0 7.243 5.871 13.113 13.113 13.113s13.113-5.87 13.113-13.113c0-7.242-5.871-13.113-13.113-13.113s-13.113 5.871-13.113 13.113zM25.177 16c0 6.652-5.412 12.064-12.064 12.064s-12.064-5.412-12.064-12.064c0-6.652 5.411-12.064 12.064-12.064s12.064 5.412 12.064 12.064z" fill="#ffffff"> </path> <path d="M7.475 16.796l-0.742 0.742 6.379 6.379 6.378-6.379-0.742-0.742-5.112 5.112v-12.727h-1.049v12.727z" fill="#ffffff"> </path> </g></svg>
                </div>    
            </NavLink>

            <img className="align-self-center rounded-circle border border-3" src={selectedProfile.image} style={{ maxWidth : "60%" }} />
            

            <h2  style={{ margin : 20 }}>{selectedProfile.name}</h2>
            <div  style={{ marginTop : 10, marginLeft : 40 }}>{selectedProfile.comment}</div>

        </div>
    )
}