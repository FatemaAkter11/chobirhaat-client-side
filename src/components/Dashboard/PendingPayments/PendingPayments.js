import React, { useEffect, useState } from 'react';

const PendingPayments = () => {
    const [pending, setPending] = useState();
    useEffect(() => {
        fetch(`https://safe-sea-78341.herokuapp.com/imagepending`)
            .then(res => res.json())
            .then(data => setPending(data))
    }, [])
    const handleApprove = (id, approval, trx) => {
        fetch(`https://safe-sea-78341.herokuapp.com/payment/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ trxid: trx, status: approval })
        })
            .then(res => res.json())
            .then(data => { })
    }
    return (
        <div className="m-5 md:w-1/2 sm:w-full lg:w-4/5 mx-auto mt-12">
            {
                pending && pending.length === '0' && <p className="text-xl pb-3 flex items-center">
                    <i className="fas fa-list mr-3"></i> Latest request
                </p>
            }
            {
                pending && pending.length === 0 ? <div className="text-center text-2xl text-green-600 font-semibold">No pending images </div> :
                    <div className="bg-white overflow-auto">
                        <table className="table-auto bg-white space-y-3 border-separate text-center">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                    <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm">Image title</th>
                                    <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm">Seller</th>
                                    <th className=" py-3 px-4 uppercase font-semibold text-sm">Buyer</th>
                                    <th className=" py-3 px-4 uppercase font-semibold text-sm">trxid</th>
                                    <th className=" py-3 px-4 uppercase font-semibold text-sm">price</th>
                                    <th className=" py-3 px-4 uppercase font-semibold text-sm">commission</th>
                                    <th className=" py-3 px-4 uppercase font-semibold text-sm">Approval</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                {
                                    pending && pending.map(image => <tr key={image._id} className="bg-gray-200">
                                        <td className="w-1/3  py-3 px-4">{image.title}</td>
                                        <td className="w-1/3  py-3 px-4">{image.seller}</td>
                                        <td className="py-3 px-4"><p className="hover:text-blue-500">{image.buyer}</p></td>
                                        <td className="py-3 px-4"><p className="hover:text-blue-500">{image.trxid}</p></td>
                                        <td className="py-3 px-4"><p className="hover:text-blue-500">${image.price}</p></td>
                                        <td className="py-3 px-4"><p className="hover:text-blue-500">${(image.price*0.1).toFixed(2)}</p></td>
                                        <td className="py-3 px-4 flex justify-evenly">
                                            <span onClick={() => { handleApprove(image._id, 'sold', image.trxid) }} className="hover:text-green-600 cursor-pointer"><i className="far fa-check-circle"></i></span>
                                            <span onClick={() => { handleApprove(image._id, 'available', '') }} className="hover:text-red-600 cursor-pointer"><i className="far fa-times-circle"></i></span>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    );
};

export default PendingPayments;