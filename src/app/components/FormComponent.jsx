import React, {useEffect, useState} from "react";
import '../styles/FormComponent.css';
import DataService from "../services/DataService";

export const FormComponent = () => {

    const [fName, setFname] = useState('');
    const [lName, setLname] = useState('');
    const [userEmail, setUserEmail] = useState('');


    const saveFormData = (e) => {
        e.preventDefault(); //prevent from refreshing the page on submit etc.
        const newData = {firstName: fName, lastName: lName, emailId: userEmail};
        DataService.createData(newData).then((response) => {
            console.log("/////::OK! createData response: ", response.data);
        }).catch((error) => {
            console.log("/////::Error save form: ", error);
        });
    };

    return (
        <div className="container">
            <form id={"inputForm1"} onSubmit={saveFormData}>
                <div className="row">
                    <div className="col-lg-4 my-1">
                        <input
                            type="text"
                            placeholder="First name"
                            className="form-control"
                            value={fName}
                            onChange={(e) => {
                                setFname(e.target.value)
                            }}/>
                    </div>
                    <div className="col-lg-4 my-1">
                        <input
                            type="text"
                            placeholder="First name"
                            className="form-control"
                            value={lName}
                            onChange={(e) => {
                                setLname(e.target.value)
                            }}/>
                    </div>
                    <div className="col-lg-4 my-1">
                        <input
                            type="email"
                            placeholder="Email"
                            className="form-control"
                            value={userEmail}
                            onChange={(e) => {
                                setUserEmail(e.target.value)
                            }}/>
                    </div>
                </div>
            </form>
            <button className="btn btn-primary" form="inputForm1" type="submit">Submit</button>
        </div>
    );
};