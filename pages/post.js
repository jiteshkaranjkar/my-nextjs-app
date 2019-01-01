import { withRouter } from "next/router";
import Layout from "../components/Layout.js";

const post = withRouter(props => (
  <layout>
    <h1> Post Title - {props.router.query.title}</h1>
    <p>This is the Post Content</p>
  </layout>
));

export default post;
