import React, { useContext, useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Sidebar from '../Sidebar/Sidebar';
import ServiceListTable from '../ServiceListTable/ServiceListTable';
import { UserContext } from '../../../App';
import UserOrderHistory from '../UserOrderHistory/UserOrderHistory';

const ServiceList = () => {

    const [loggedInUser] = useContext(UserContext)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const [isAdmin, setIsAdmin] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/admins')
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])

    const checkAdmin = isAdmin.filter(admin => admin.email === loggedInUser.email)
    const filterOrder = orders.filter(order => order.email === loggedInUser.email)

    // const verifyAdmin = checkAdmin[0]
    // console.log(checkAdmin)

    // console.log(checkAdmin)
    return (
        <section>
            <div className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-10">
                    <SectionTitle title={"Service List"}></SectionTitle>
                    <div>
                        {
                            orders.length > 0 ? <table className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th className="text-secondary text-left" scope="col">No</th>
                                        <th className="text-secondary" scope="col">Name</th>
                                        <th className="text-secondary" scope="col">Email</th>
                                        <th className="text-secondary" scope="col">Service</th>
                                        <th className="text-secondary" scope="col">Project Details</th>
                                        <th className="text-secondary" scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orders.map((order, index) =>

                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{order.name}</td>
                                                <td>{order.email}</td>
                                                <td>{order.serviceName}</td>
                                                <td>{order.details}</td>
                                                <td>{order.status}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                                : <h3>Sorry, no orders available</h3>
                        }
                    </div>
                    {/* {
                        checkAdmin.length > 0 ?  <ServiceListTable orders={orders}></ServiceListTable>  : <UserOrderHistory filteredOrders={filterOrder}></UserOrderHistory>
                        // checkAdmin.map(admin =>  console.log(admin.email === loggedInUser.email))
                        
                    } */}
                </div>


            </div>
        </section>
    );
};

export default ServiceList;