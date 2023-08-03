import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
        <div className="logo">
            <h1>DataPulse.</h1>
        </div>
        <div className="brandname">
            <p>E-Commerce Brand</p>
        </div>
        <div className="links">
            <div className="linksvg"><Link><img src="/assets/home.svg" alt="Home" /><p>Home</p></Link></div>
            <div className="linksvg"><Link><img src="/assets/sales.svg" alt="Sales" /><p>Sales</p></Link></div>
            <div className="linksvg"><Link><img src="/assets/marketing.svg" alt="Marketing" /><p>Marketing</p></Link></div>
            <div className="linksvg"><Link><img src="/assets/inventory.svg" alt="Inventory" /><p>Inventory</p></Link></div>
        </div>
    </div>
  )
}

export default Header