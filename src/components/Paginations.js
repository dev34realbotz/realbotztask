import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "../App.css";
import AuditLogTable from "./AuditLogTable";
import UpperForm from "./UpperForm";
import { useDispatch } from "react-redux";
import { UserDetailsFetch } from "../Redux/actions/action";

const Paginations = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        setUserData(await dispatch(UserDetailsFetch()));
      } catch (error) {
        console.log("error raised", error);
      }
    })();
  }, []);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = userData && userData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(userData.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % userData.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="">
      <UpperForm setUserData={setUserData} userData={userData} />
      <AuditLogTable currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        marginPagesDisplayed={2}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Paginations;
