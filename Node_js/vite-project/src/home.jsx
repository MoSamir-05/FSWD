import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Contain from './contain.jsx'
import Footer from './footer.jsx'
import Header from './header.jsx'
import Menu from './menu.jsx'
import './main.css'
function Home() {
  return (
    <div className="app">
      <table className="layout">
        <tbody>
          <tr>
            <td colSpan="2" className="headerCell">
              <Header />
            </td>
          </tr>

          <tr className="mainRow">
            <td className="menuCell">
              <Menu />
            </td>
            <td className="contentCell">
              <Contain />
            </td>
          </tr>

          <tr>
            <td colSpan="2" className="footerCell">
              <Footer />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Home