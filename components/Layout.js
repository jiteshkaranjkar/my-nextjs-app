import Header from "./Header";

const layoutStyle = {
  margin: 20,
  fontStyle: 15,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);
export default Layout;
