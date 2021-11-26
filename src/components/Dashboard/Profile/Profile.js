import firebase from 'firebase/app';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ClientContext } from '../../../App';

const Profile = () => {
    const [client, setClient] = useContext(ClientContext);
    useEffect(() => {
        if (localStorage.getItem('uid')) {
          firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              fetch(`https://safe-sea-78341.herokuapp.com/user/${user.email}`)
                .then((res) => res.json())
                .then((data) => setClient({
                  email: data.email,
                  displayName: data.username,
                  role: data.role,
                  photoURL: data.photoURL
                }));
            }
          });
        }
      }, [setClient])
    return (
        <div className="my-5 mx-auto">
            {
                client && <>
                    <div className="text-7xl flex flex-row">
                        <img src={client.photoURL} className="mr-4" width="100px" alt="" /> {client.displayName}
                    </div>
                    <div className="m-2 text-lg">
                        <span className="font-semibold">Email:</span> {client.email}
                    </div>
                    <div className="m-2 text-lg">
                        <span className="font-semibold">Account Type:</span> {client && client.role}
                    </div>
                    <div className="my-10">
                        Checkout your images: <Link to="/dashboard/uploadedimages" className="bg-purple-600 text-white p-2 rounded-md px-4 hover:bg-purple-500">Uploaded images</Link>
                    </div>
                </>
            }
        </div>
    );
};

export default Profile;