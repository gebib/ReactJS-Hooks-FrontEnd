import React, {useEffect, useState} from "react";
import '../styles/ListDataComponentStyle.scss';
import DataService from "../services/DataService";

export const ListDataComponent = () => {

    const [listDataFromDb, setListDataFromDb] = useState([
        {
            id: 0,
            firstName: 'User1',
            lastName: 'User1',
            eMail: 'user1@u.com'
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
            <table className="table table-success table-striped">
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
                            <td>{aData.eMail}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};