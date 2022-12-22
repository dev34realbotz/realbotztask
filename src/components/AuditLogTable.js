import React from "react";
import DataTable from "react-data-table-component";

const AuditLogTable = ({ currentItems }) => {
  const columns = [
    { name: "Log ID", selector: (row) => row.logId, sortable: true },
    {
      name: "Application Type",
      selector: (row) => row.applicationType,
      sortable: true,
    },
    {
      name: "Application ID",
      selector: (row) => row.applicationId,
      sortable: true,
    },
    { name: "Action", selector: (row) => row.actionType, sortable: true },
    { name: "Action Details", selector: (row) => "-/-" },
    {
      name: "Date : Time",
      selector: (row) => row.creationTimestamp,
      sortable: true,
    },
  ];

  return (
    <div className="container">
      <DataTable columns={columns} data={currentItems} />
    </div>
  );
};

export default AuditLogTable;
