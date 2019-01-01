import Layout from "../components/Layout.js";

const Page = () => <p>This is Dashboard Screen</p>;
const content = <p>This is the about page</p>;

export default () => (
  <Layout page={Page} content={content}>
    Dashboard Page
  </Layout>
);
