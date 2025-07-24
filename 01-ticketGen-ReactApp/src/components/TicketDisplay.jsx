export default function TicketDisplay( {firstName, lastName, avatarUrl, phoneNumber, githubUserName} ){
    return(
        <div className="border p-2">
            <div>
                <h1>Congrats {`${firstName} ${lastName}`}</h1>
                <p>Ticket Confirm</p>
                <p>Ticket Data</p>
            </div>
            <div>
                <div>
                    <img src={avatarUrl} alt="Photo"/>
                </div>
                <div>
                    <p>Fullname: {`${firstName} ${lastName}`}</p>
                    <br /> <br />
                    <p>Phone Number: {phoneNumber}</p>
                    <br /> <br />
                    <p>Github UserName: @{githubUserName}</p>

                </div>
            </div>
        </div>
    )
}