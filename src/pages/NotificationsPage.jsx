import { NavLink } from "react-router-dom"

export default function Notifications() {
    return (
        <div>
            <div className="d-flex flex-row justify-content-between">
                <div 
                    className="text-white fs-1"
                    style={{
                        marginTop : 30,
                        marginLeft : 50
                    }}
                >Notifications</div>

                <NavLink
                    to={".."}
                    className="align-self-center" 
                    style={{
                        margin : 30,
                        width : 50,
                        height : 50
                    }}
                >
                    <svg viewBox="-3 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" transform="rotate(90)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path d="M0 16c0 7.243 5.871 13.113 13.113 13.113s13.113-5.87 13.113-13.113c0-7.242-5.871-13.113-13.113-13.113s-13.113 5.871-13.113 13.113zM25.177 16c0 6.652-5.412 12.064-12.064 12.064s-12.064-5.412-12.064-12.064c0-6.652 5.411-12.064 12.064-12.064s12.064 5.412 12.064 12.064z" fill="#ffffff"> </path> <path d="M7.475 16.796l-0.742 0.742 6.379 6.379 6.378-6.379-0.742-0.742-5.112 5.112v-12.727h-1.049v12.727z" fill="#ffffff"> </path> </g></svg>
                    {/* <svg viewBox="-3.2 -3.2 38.40 38.40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)"><rect x="-3.2" y="-3.2" width="38.40" height="38.40" rx="19.2" fill="#636363" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path d="M14.389 7.956v4.374l1.056 0.010c7.335 0.071 11.466 3.333 12.543 9.944-4.029-4.661-8.675-4.663-12.532-4.664h-1.067v4.337l-9.884-7.001 9.884-7zM15.456 5.893l-12.795 9.063 12.795 9.063v-5.332c5.121 0.002 9.869 0.26 13.884 7.42 0-4.547-0.751-14.706-13.884-14.833v-5.381z" fill="#c2c2c2"> </path> </g></svg> */}
                </NavLink>
            </div>
            <div    
                className="text-white fs-3 d-flex justify-content-center align-self-center"
                style={{
                    marginTop : 230
                }}
            >Notifications are empty</div>
        </div>
    )
}