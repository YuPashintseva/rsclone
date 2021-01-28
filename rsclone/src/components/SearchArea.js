// import Option from "./Option";
import React, { useEffect, useState } from "react";
import ReactHTMLDatalist from "react-html-datalist";

import i18next from "i18next";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const SearchArea = (props) => {
  return (
    <form
      className="container-fluid my-2 my-lg-0"
      onSubmit={props.handleSubmit}
    >
      <input
        className="form-control mr-sm-2"
        //onChange={this.searchCnangeHandler.bind(this)}
        onChange={props.handleChange}
        type="text"
        list="datalistOptions"
        id="exampleDataList"
        placeholder={i18next.t("Search")}
      />
    </form>
  );
};

// class SearchArea extends React.Component {
//   render() {

//   }
// }

export default SearchArea;
