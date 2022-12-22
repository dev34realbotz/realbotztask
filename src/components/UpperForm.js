import React, { useState } from "react";
import moment from "moment";

const UpperForm = ({ userData, setUserData }) => {
  const [filterValue, setFilterValue] = useState();
  const [selectFilterValue, setSelectFilterValue] = useState();
  const [filterDate, setFilterDate] = useState();

  const handleFilter = () => {
    if (filterValue === "" || selectFilterValue === "" || filterDate === "") {
      setUserData(userData);
    } else {
      const filterResult = userData.filter(
        (user) =>
          user.logId === parseInt(filterValue) ||
          user.applicationId === parseInt(filterValue) ||
          user.actionType === selectFilterValue ||
          user.applicationType === selectFilterValue ||
          moment(user.creationTimestamp).format("YYYY-MM-DD") ===
            moment(filterDate).format("YYYY-MM-DD")
      );
      setUserData(filterResult);
    }
    const url = new URL(window.location.href);

    url.searchParams.set("logId", filterValue);

    url.searchParams.set("applicationId", filterValue);

    url.searchParams.set("actionType", selectFilterValue);

    url.searchParams.set("applicationType", selectFilterValue);
    url.searchParams.set("creationTimestamp", filterDate);

    window.history.pushState({}, "", url.toString());
  };
  return (
    <div className="container search-form">
      <form>
        <div className="row">
          <div className="col">
            <label>Employee Name</label>

            <input
              type="text"
              className="form-control"
              onChange={(e) => setFilterValue(e.target.value)}
              placeholder="Employee Name"
            />
          </div>

          <div className="col">
            <label>Action Type</label>

            <select
              name="application"
              id="dog-names"
              className="form-control"
              onChange={(e) => setSelectFilterValue(e.target.value)}
            >
              <option value="">Select</option>
              <option value="DARI_REFRESH_TOKEN">DARI_REFRESH_TOKEN</option>

              <option value="DARI_APP_LOGIN">DARI_APP_LOGIN</option>

              <option value="INITIATE_APPLICATION">INITIATE_APPLICATION</option>

              <option value="SUBMIT_APPLICATION">SUBMIT_APPLICATION</option>

              <option value="SUBMIT_APPLICATION">ADD_EMPLOYEE</option>
            </select>
          </div>

          <div className="col">
            <label>Application Type</label>

            <select
              name="application"
              id="dog-names"
              className="form-control"
              onChange={(e) => setSelectFilterValue(e.target.value)}
            >
              <option value="">Select</option>
              <option value="CERT_TITLE_DEED_PLOT">CERT_TITLE_DEED_PLOT</option>

              <option value="LEASE_REGISTRATION">LEASE_REGISTRATION</option>

              <option value="ADD_POA">ADD_POA</option>

              <option value="LEASE_REGISTRATION">LEASE_REGISTRATION</option>

              <option value="LEASE_REGISTRATION">ADD_COMPANY</option>

              <option value="LEASE_REGISTRATION"> ADD_COMPANY_EMPLOYEE</option>

              <option value="LEASE_REGISTRATION"> CERT_PROP_OWNERSHIP</option>
            </select>
          </div>

          <div className="col">
            <label>Form Date</label>

            <input
              type="date"
              className="form-control"
              onChange={(e) => setFilterDate(e.target.value)}
            />
          </div>

          <div className="col">
            <label>To Date</label>

            <input type="date" className="form-control" />
          </div>

          <div className="col">
            <label>Application Id</label>

            <input
              type="text"
              className="form-control"
              placeholder="e.g. 2898690"
              onChange={(e) => setFilterValue(e.target.value)}
            />
          </div>

          <div className="col">
            <button
              type="button"
              className="btn btn-primary mt-4"
              onClick={() => handleFilter()}
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpperForm;
