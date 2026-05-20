import React, {useState, useEffect} from 'react'

export default function ApiCrud() {
    const[user, setUser] = useState([])
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[phone, setPhone] = useState("")
    const[editId, setEditId] = useState(null)

    const handleEdit = (user) => {
        setName(user.name)
        setEmail(user.email)
        setPhone(user.phone)
        setEditId(user.id)
    }

    useEffect (() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then((data) => {
            setUser(data);
        })
    },[])
        console.log(user);

        const addItems = ()=>{
            const trimmedName = name.trim();
            const trimmedEmail = email.trim();
            const trimmedPhone = phone.trim();

            if (trimmedName && trimmedEmail && trimmedPhone) {
                fetch("https://jsonplaceholder.typicode.com/users", {
                    method: "POST",
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        phone: phone
                    }),
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8",
                    },
                })
                .then((res) => res.json())
                .then((data) => {
                    const newUser = {...data, id: user.length + 1};
                    setUser ([...user, newUser]);

                    setName("");
                    setEmail("");
                    setPhone("");
                })
            }
        };

        const handleDelete = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "DELETE",
        })
            .then(() => {
                setUser(user.filter((person) => person.id !== id));
            });
    };

        const updateItem = () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${editId}`, {
                method: "PUT",
                body: JSON.stringify({
                        name: name,
                        email: email,
                        phone: phone
                }),
                headers: {"Content-Type": "application/json; charset=UTF-8",

                },
            })
                .then((res) => res.json())
                .then((data) => {
                    const updatedUsers = user.map((person) =>
                    person.id === editId ? {...person, ...data} : person
                    )
                    setUser(updatedUsers);
                    setEditId(null);
                    setName("");
                    setEmail("");
                    setPhone("");
                })

        }
        
    return (
        <div className='container2'>
            <div className='card-container'>
                {user.map((user) => (
                    <div className='user-card' key={user.id}>
                        <h3>{user.name}</h3>
                        <p><strong>ID:</strong>{user.id}</p>
                        <p><strong>Email:</strong>{user.email}</p>
                        <p><strong>Phone:</strong>{user.phone}</p>

                        <div className='btn-group'>
                            <button onClick={()=> handleEdit(user)}>Update</button>
                            <button onClick={()=> handleDelete(user.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
                <h3>{editId ? "Update User" : "Add User"}</h3>

                <input
                type="text"
                placeholder='Enter Your Name'
                value = {name}
                onChange={(e) => setName(e.target.value)} />

                <input
                type="email"
                placeholder='Enter Your Email'
                value = {email}
                onChange={(e) => setEmail(e.target.value)} />

                <input
                type="text"
                placeholder='Enter Your Phone'
                value = {phone}
                onChange={(e) => setPhone(e.target.value)} />

                <button onClick={editId  ? updateItem  : addItems}>
                    {editId ? "Save" : "Post"}
                </button>
            </div>
    )
}
