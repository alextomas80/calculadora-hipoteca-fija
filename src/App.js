import GlobalStyle from "GlobalStyle";

import Calculator from "components/Calculator";
import Layout from "components/Layout";
import { connect } from "react-redux";

function App({ calculadora }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        {calculadora.map((calculadora, index) => (
          <Calculator key={index} position={index} />
        ))}
      </Layout>
    </>
  );
}
const mapStateToProps = ({ calculadora }) => ({
  calculadora,
});

export default connect(mapStateToProps)(App);
