import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import AddFaq from '../AddFaq/AddFaq';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import Inbox from '../Inbox/Inbox';
import PendingPayments from '../PendingPayments/PendingPayments';
import Profile from '../Profile/Profile';
import UploadedImages from '../UploadImage/UploadedImages';

const AdminDashboard = () => {
    return (
        <div className="flex flex-wrap">
            <DashboardSidebar />
            <Switch>
                <PrivateRoute exact path="/dashboard"><Profile /></PrivateRoute>
                <PrivateRoute path="/dashboard/profile"><Profile /></PrivateRoute>
                <PrivateRoute path="/dashboard/pending"><PendingPayments /></PrivateRoute>
                <PrivateRoute path="/dashboard/inbox"><Inbox /></PrivateRoute>
                <PrivateRoute path="/dashboard/addfaq"><AddFaq /></PrivateRoute>
                <PrivateRoute path="/dashboard/uploadedimages"><UploadedImages /></PrivateRoute>
            </Switch>
        </div>
    );
};

export default AdminDashboard;