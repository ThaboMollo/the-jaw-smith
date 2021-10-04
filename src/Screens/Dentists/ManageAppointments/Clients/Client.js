import React from 'react';

import Layout from '../../../../Components/Layout/Layout';

function Client(props) {
    const { state } = props.location;
    return (
        <Layout>
            <div>
                <h3>Full Name: {state.name}</h3>
                <br />
                <h3>Cell Number: {state.number}</h3>
                <br />
                <h3>E-mail: {state.email}</h3>
                <br />
                <h3>Gender: {state.gender}</h3>
                <h4>Adress</h4>
                <h3>Street: {state.street}</h3>
                <br />
                <h3>City: {state.city}</h3>
                <br />
                <h3>Province: {state.prov}</h3>
                <br />
                <h3>Postal Code: {state.p_code}</h3>
            </div>
        </Layout>
    )
}

export default Client;