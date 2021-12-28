import React, {useState} from "react";
import '../styles/FormComponent.css';
import DataService from "../services/DataService";

export const FormComponent = (props) => {

    const [fName, setFname] = useState('');
    const [lName, setLname] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [dataId, setDataId] = useState('');

    const saveFormData = (e) => {
        e.preventDefault(); //prevent from refreshing the page on submit etc.
        const newData = {firstName: fName, lastName: lName, emailId: userEmail};
        DataService.createData(newData).then((response) => {
            console.log("/////::OK! createData response: ", response.data);
            props.reFetch();
        }).catch((error) => {
            console.log("/////::Error save form: ", error);
        });
    };

    const getDataWithId = () => {
        DataService.getDataById(dataId).then((response) => {
            console.log('///////////Ok: getWithID: ', response.data);
        }).catch((error) => {
            console.log('///////////Error:GetDataWithId: ', error);
        });
    };

    const updateData = () => {
        const updatedData = {firstName: fName, lastName: lName, emailId: userEmail};
        DataService.updateDataById(dataId, updatedData).then((response) => {
            console.log("/////::OK! update response: ", response.data);
            props.reFetch();
        }).catch((error) => {
            console.log("/////::Error update form: ", error);
        }).then();
    };

    const deleteData = () => {
        DataService.deleteDataById(dataId).then((response) => {
            console.log("/////::OK! delete response: ", response.data);
            props.reFetch();
        }).catch((error) => {
            console.log("/////::Error update form: ", error);
        });
    };


    return (
        <div className="container groupedItems">
            <form id={"inputForm1"} onSubmit={saveFormData}>
                <div className="row">
                    <div className="col-lg-3 my-1">
                        <input
                            type="number"
                            placeholder="Id"
                            className="form-control"
                            value={dataId}
                            onChange={(e) => {
                                setDataId(e.target.value)
                            }}/>
                    </div>
                    <div className="col-lg-3 my-1">
                        <input
                            type="text"
                            placeholder="First name"
                            className="form-control"
                            value={fName}
                            onChange={(e) => {
                                setFname(e.target.value)
                            }}/>
                    </div>
                    <div className="col-lg-3 my-1">
                        <input
                            type="text"
                            placeholder="First name"
                            className="form-control"
                            value={lName}
                            onChange={(e) => {
                                setLname(e.target.value)
                            }}/>
                    </div>
                    <div className="col-lg-3 my-1">
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
                <div className="row">
                    <div className="col-lg-3 mt-3">
                        <button className="btn btn-success" form="inputForm1" type="submit">Submit</button>
                    </div>
                    <div className="col-lg-3 mt-3">
                        <button type={"button"} onClick={updateData} className="btn btn-warning">Update
                        </button>
                    </div>
                    <div className="col-lg-3 mt-3">
                        <button type={"button"} onClick={deleteData} className="btn btn-danger">Delete
                        </button>
                    </div>
                    <div className="col-lg-3 mt-3">
                        <button type={"button"} onClick={getDataWithId} className="btn btn-primary">GetWithID
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};