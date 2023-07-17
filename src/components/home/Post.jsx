import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function Post(props) {
    const [data, setData] = useState(props.data)

    function HandleLikes(id) {
        setData( prev => {
            return prev.map( checkPrev => {
                return checkPrev.id == id ? {...checkPrev , liked : !checkPrev.liked } : checkPrev
            })
        })
    }
    
    return(
        <div>
            {data.map( item => (
                <div 
                    className="d-flex flex-column"
                    style={{
                        marginTop : 20 
                    }}>
                    {/* {console.log(item.name.textDecoration)} */}
                    <div 
                        className="d-flex flex-row justify-content-between"
                    >
                        <NavLink 
                            to={`${item.name}`} 
                            style={{ textDecoration : "none" }}>
                                <div className="d-flex flex-row">
                                    <img
                                        className="rounded-circle"
                                        style={{
                                            maxWidth : 40,
                                            marginLeft : 15,
                                            marginBottom : 2
                                        }}
                                        src={item.image} 
                                    />
                                    <div 
                                        className="text-white fs-5"
                                        style={{
                                            marginLeft : 10,
                                            marginBottom : 2
                                        }}> {item.name}
                                    </div>
                                </div>
                        </NavLink>

                        <div style={{  width : 10 , marginRight : 40 }}>
                            <svg  viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0.256 8.606c0-0.269 0.106-0.544 0.313-0.75 0.412-0.412 1.087-0.412 1.5 0l14.119 14.119 13.913-13.912c0.413-0.412 1.087-0.412 1.5 0s0.413 1.088 0 1.5l-14.663 14.669c-0.413 0.413-1.088 0.413-1.5 0l-14.869-14.869c-0.213-0.213-0.313-0.481-0.313-0.756z"></path> </g></svg>                        
                        </div>
                   </div>
                    
                    <img 
                        src={item.image} 
                        style={{
                            Width : 380,
                            marginLeft : 6
                        }}
                    />

                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <div 
                            className="d-flex flex-row align-items-center"
                            style={{ paddingTop : 5, paddingBottom : 0 }}>

                            {/* {Like Button} */}
                            <div
                                style={{ width : 34, marginLeft : 10 }}
                                onClick={() => HandleLikes(item.id)}
                                className="text-white"
                            >
                                {item.liked
                                    ?  <svg fill="#ff0000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 225.371 225.371" xml:space="preserve" stroke="#ff0000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M159.933,12.904c-26.386,0-40.36,12.722-47.313,22.892c-6.944-10.17-20.897-22.892-47.228-22.892 C33.897,12.904,0,33.865,0,79.887c0,18.138,3.938,32.532,13.166,48.132c8.983,15.184,28.006,33.897,56.541,55.622 c11.137,8.479,21.396,15.612,28.042,20.103c12.771,8.631,13.271,8.72,14.814,8.721c0.078,0.002,0.153,0.003,0.228,0.003 c1.459,0,2.464-0.465,14.673-8.675c6.65-4.473,16.918-11.579,28.065-20.039c28.57-21.681,47.646-40.433,56.699-55.734 c9.212-15.571,13.143-29.967,13.143-48.132C225.371,33.865,191.45,12.904,159.933,12.904z"></path> </g></svg>
                                    :  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.601 6.16763 11.7961 6.25063 12 6.25063C12.2039 6.25063 12.399 6.16763 12.5404 6.02073L12 5.50063ZM15.0383 18.9109L15.5026 19.4999L15.0383 18.9109ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219Z" fill="#ffffff"></path> </g></svg>}
                            </div>

                            <div style={{ width : 27, marginLeft : 10 }}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="style=linear"> <g id="comment"> <path id="vector" d="M1.98608 11.1034C1.98608 13.3236 2.78607 15.376 4.13153 16.9992C5.93153 19.238 8.78608 20.6746 11.9861 20.6746C11.9861 20.6746 15.5028 21.9659 17.8427 22.4553C18.6528 22.6248 19.5517 22.0692 19.5517 21.3173C19.5517 20.4026 17.9861 18.753 17.9861 18.753C19.1009 17.959 20.033 16.9462 20.7162 15.7808C21.526 14.3994 21.9861 12.8036 21.9861 11.1034C21.9861 9.39876 21.5255 7.7997 20.7162 6.41587C19.9666 5.13402 18.9178 4.03683 17.6588 3.21143C16.0406 2.12931 14.0952 1.51367 11.9861 1.51367C6.45881 1.51367 1.98608 5.80475 1.98608 11.1034Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g> </g></svg>
                            </div>

                            <div style={{ width : 32, marginLeft : 10 }}>
                                <svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.33045 8.38999C0.250452 11.82 9.42048 14.9 9.42048 14.9C9.42048 14.9 12.5005 24.07 15.9305 21.99C19.5705 19.77 23.9305 6.13 21.0505 3.27C18.1705 0.409998 4.55045 4.74999 2.33045 8.38999Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15.1999 9.12L9.41992 14.9" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </div>
                        </div>

                        <div style={{ width : 27, marginRight : 30 }}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g opacity="0.4"> <path d="M14.5 10.6504H9.5" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 8.20996V13.21" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g> <path d="M16.8203 2H7.18031C5.05031 2 3.32031 3.74 3.32031 5.86V19.95C3.32031 21.75 4.61031 22.51 6.19031 21.64L11.0703 18.93C11.5903 18.64 12.4303 18.64 12.9403 18.93L17.8203 21.64C19.4003 22.52 20.6903 21.76 20.6903 19.95V5.86C20.6803 3.74 18.9503 2 16.8203 2Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </div>
                    </div>

                    <div 
                        className="text-white-50"
                        style={{ marginLeft : 15 }}>
                        {`${item.likes} Likes`}
                    </div>

                    <div
                        className="text-white"
                        style={{ marginLeft : 15 }}>
                        {item.comment}
                    </div>
                </div>
                
            ))}
        </div>
    )
}