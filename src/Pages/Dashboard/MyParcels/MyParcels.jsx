import React from 'react';
import { useQuery } from '@tanstack/react-query'

import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';

const MyParcels = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: parcels = [] } = useQuery({
        queryKey: ['myParcels', user?.email ],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email || user?.providerData?.[0]?.email}`);
            return res.data;
        }
    })

    return (
        <div>
            <h2>All of my parcels : {parcels.length}</h2>
            json
        </div>
    );
};

export default MyParcels;