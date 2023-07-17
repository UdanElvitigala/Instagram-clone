
export default function ChatCard(props) {
    const data = props.data
    return (
        <div 
            className="d-flex flex-row justify-content-between border border-white rounded"
            style={{
                margin : 10,
                marginTop : 5,
                marginBottom : 10,
                height : 80,
                padding : 10
            }}
        >
            <div className="d-flex flex-row">
                <img 
                    className="rounded-circle"
                    style={{
                        maxWidth : 75,
                        maxHeight : 75
                    }}
                    src={data.image}
                />

                <div className="align-self-center" style={{ marginLeft : 30 }}>
                    <div className="text-white fs-3">{data.name}</div>
                    <div 
                        className="text-white"
                        style={{ marginLeft : 40 }}>{data.message}</div>
                </div>
            </div>

            { data.unread  &&   
                <div
                    className="d-flex rounded-circle bg-primary align-self-center justify-content-center align-items-center"
                    style={{
                        marginRight : 10,
                        width : 25,
                        height : 25
                    }}    
                >
                    <div className="text-white">{data.unread}</div>
                </div>
            }
        </div>
    )
}