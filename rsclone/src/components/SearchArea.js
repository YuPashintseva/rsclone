// import Option from "./Option";
import React, { useEffect, useState } from "react";
import ReactHTMLDatalist from "react-html-datalist";
import MovieList from './MovieList';
import i18next from "i18next";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class SearchArea extends React.Component{
  constructor(props){
    super(props);
    //this.state={movies:[]}
  }
  render(){
  return (
    <div>
    <form
      className="container-fluid my-2 my-lg-0"
      onSubmit={this.props.handleSubmit}
    >
      <input
        className="form-control mr-sm-2"
        //onChange={this.searchCnangeHandler.bind(this)}
        onChange={this.props.handleChange}
        type="text"
        list="datalistOptions"
        id="exampleDataList"
        placeholder={i18next.t("Search")}
      />
    </form>
    <MovieList movies={this.props.movies}/>
    </div>
  );
  }
};

// class SearchArea extends React.Component {
//   render() {

//   }
// }

export default SearchArea;
