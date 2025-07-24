import { useState } from 'react'
function TicketForm({ onGenerate }) {
    const [avatar, setAvatar] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState('');
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [githubUserName, setgitHubUserName] = useState('');


    function handleAvatarChange(event) {
        const file = event.target.files[0];
        setAvatar(file);
        setAvatarUrl(URL.createObjectURL(file))
    }

    function handleSubmit(event) {
        event.preventDefault();
        onGenerate({
            avatar,
            avatarUrl,
            firstName,
            lastName,
            email,
            phoneNumber,
            githubUserName
        })

    }

    return (
        <form onSubmit={handleSubmit} className="border p-2">
            {/* Avatar */}
            <div>
                <label>Avatar: </label>
                <input type="file" accept="image/png ,image/jpeg"
                    onChange={handleAvatarChange} className="border h-10 mx-1"
                    required
                />
            </div>

            {/* First Name */}
            <div>
                <label>FirstName: </label>
                <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)}
                    placeholder="Enter First Name" className="border m-3" required />
            </div>

            {/* Last Name */}
            <div>
                <label>LastName: </label>
                <input type="text"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    placeholder="Enter Last Name" className="border m-3" required />
            </div>

            {/* email address */}
            <div>
                <label>Email Address: </label>
                <input type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter Email" className="border m-3" required />
            </div>

            {/* Phone Number */}
            <div>
                <label>Phone Number: </label>
                <input type="number"
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    placeholder="Enter Phone Number" className="border m-3" required />
            </div>

            {/* github username */}
            <div>
                <label>Githube Username: </label>
                <input type="text"
                    value={githubUserName}
                    onChange={(event) => setgitHubUserName(event.target.value)}
                    placeholder="Enter Github userName" className="border m-3" required />
            </div>
            <hr />
            <button type='submit' className="border m-2 p-3 cursor-pointer rounded-t-2xl rounded-r-2xl ">Generate My Ticket</button>
        </form>
    )
}

export default TicketForm;