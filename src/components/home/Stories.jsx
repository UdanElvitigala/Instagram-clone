
export default function HomeStories(props) {
    return(
        <div 
            className="d-flex flex-row"
            style={{
                marginTop : 5,
                marginLeft : 5
            }}
        >
            {props.data.map( item => (
                <div
                    style={{ margin : 5 }}>
                    <img 
                        src={item.image} 
                        className="rounded-circle border border-3"
                        style={{
                        maxWidth : 80,
                        maxHeight : 80
                    }}
                    />
                    <div 
                        className="text-white"
                        style={{ marginLeft : 17 }}
                    >
                        {item.name}
                    </div>
                </div>
                
            ))}
        </div>
    )
}