import firebase from 'firebase/app';
import React, { useContext, useState } from 'react';
import { useAlert } from 'react-alert';
import { Link, useHistory } from 'react-router-dom';
import { ClientContext } from '../../../App';

const DashboardSidebar = () => {
    const [client, setClient] = useContext(ClientContext);
    const alert = useAlert();
    const history = useHistory();
    const [user, setUser] = useState()
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            setUser(user)
            // ...
        } else {
            setUser()
        }
    });

    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
        localStorage.clear();
        setClient()
        alert.success('Logout successful')
        history.push('/')
    }

    return (
        <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl bg-indigo-600 text-center">
            <div className="p-6">
                {user && <Link to="/dashboard/profile" className="text-3xl font-semibold uppercase text-purple-100 hover:text-gray-300"><img src={user.photoURL} className="rounded-full" alt="" /> {user.displayName}</Link>}
                <Link to="/upload">
                    <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-green-600 flex items-center justify-center">
                        <i className="fas fa-plus mr-3"></i>Add new image
                    </button>
                </Link>
            </div>
            <nav className="text-base font-semibold pt-3 text-yellow-100">
                {
                    client && client.role === 'chobirhaatAdmin' && <Link to="/dashboard/pending" className="flex items-center opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                    <i className="fas fa-spinner mr-3"></i>
                    Pending pictures
                </Link>
                }
                {
                    client && client.role === 'chobirhaatAdmin' && <Link to="/dashboard/inbox" className="flex items-center opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                    <i className="fas fa-inbox mr-3"></i>
                    Inbox
                </Link>
                }
                {
                   client && client.role === 'chobirhaatAdmin' && <Link to="/dashboard/addfaq" className="flex items-center opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                    <i className="fas fa-plus-circle mr-3"></i>
                    Add FAQ
                </Link>
                }
                <Link to="/dashboard/profile" className="flex items-center opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                    <i className="fas fa-user mr-3"></i>
                    My profile
                </Link>
                <Link to="/dashboard/uploadedimages" className="flex items-center opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                    <i className="fas fa-images mr-3"></i>
                    Uploaded images
                </Link>
                <div onClick={handleSignOut} className="flex items-center opacity-75 hover:opacity-100 py-4 pl-6 nav-item cursor-pointer">
                    <i className="fas fa-sign-out-alt mr-3"></i>
                    Sign out
                </div>
            </nav>
        </aside>
    );
};

export default DashboardSidebar;