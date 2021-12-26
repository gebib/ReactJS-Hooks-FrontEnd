import React, {useEffect, useState} from "react";
import '../styles/ListDataComponentStyle.css';
import DataService from "../services/DataService";
import {FormComponent} from "./FormComponent";


export const TableComponent = () => {

    const [listDataFromDb, setListDataFromDb] = useState([
        {
            id: 0,
            firstName: '',
            lastName: '',
            emailId: ''
        }
    ]);

    useEffect(() => {
            DataService.getallData().then((result) => {
                setListDataFromDb(result.data);
            }).catch((error) => {
                console.log("ERROR: ", error);
            });
        }, []
    );

    return (
        <div className={"container"}>
            <h2>List of Data</h2>
            <FormComponent/>
            <table className="table  table-striped">
                {/*Table header*/}
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">E-mail</th>
                </tr>
                </thead>

                {/*table body*/}
                <tbody>
                {listDataFromDb.map((aData) => {
                    return (
                        <tr key={aData.id}>
                            <td>{aData.id}</td>
                            <td>{aData.firstName}</td>
                            <td>{aData.lastName}</td>
                            <td>{aData.emailId}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};