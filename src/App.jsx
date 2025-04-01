import { useState } from 'react'
import Cart from './cart';
// import Navbar from './Components/Navbar';
import './App.css'
import { FaTimes } from "react-icons/fa";
import { IoSearchCircle } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import img1 from './assets/Images/image1.jpg';
import img2 from './assets/Images/image2.jpg';
import img3 from './assets/Images/image3.jpg';
import img4 from './assets/Images/image4.jpg';
import img5 from './assets/Images/image5.jpg';
import img6 from './assets/Images/image6.jpg';
import img7 from './assets/Images/image7.jpg';
import img8 from './assets/Images/image8.jpg';
import img9 from './assets/Images/image9.jpg';
import img10 from './assets/Images/image10.jpg';

function App() {
  const [count, setCount] = useState(0);
  const [bill, setBill] = useState(false);

  const [product, setProduct] = useState([]);
  const [total, setTotal] = useState(0);
  const [num, setNum] = useState(0);

  const [searchTerm, setSearchTerm] = useState("");

  const sendProduct = () => {
    setCount(count + 1);
  }

  const sendBill = () => {
    setBill(!bill);
  }
  const finalProductList = (e) => {
    setProduct([...product, e])
    console.log(e);

    // test for if else
    let currentProduct = product.find((z) => z.proTitle === e.proTitle);
    if (currentProduct) {
      let updatedCart = product.map((y) =>
        y.proTitle === e.proTitle
          ? { ...y, quan: y.quan + 1 } : y
      )
      setProduct(updatedCart);
    } else {
      setProduct([...product, { ...e, quan: 1 }])
    }
    setNum(num + 1);
    setTotal(total + parseInt(e.price));
  }

  const data = [
    { id: 1, image: img1, title: "Lenovo ThinkPad 8th Gen Intel Core i5 Thin & Light HD Laptop", price: "16999" },
    { id: 2, image: img2, title: "Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM", price: "56990" },
    { id: 3, image: img3, title: `Lenovo IdeaPad 1 AMD Athlon Silver 7120U 15.6" HD Thin and Light Laptop`, price: "23700" },
    { id: 4, image: img4, title: "Acer Aspire 3 Laptop Intel Core Celeron N4500 Processor Laptop (8 GB LPDDR4X SDRAM/512 GB", price: "22000" },
    { id: 5, image: img5, title: `Lenovo IdeaPad Slim 3 Intel Core i3 12th Gen 15.6" (39.62cm) FHD Thin & Light Laptop 8GB/512GB SSD/Intel UHD`, price: "31990" },
    { id: 6, image: img6, title: `ASUS Vivobook 16X, 16" FHD+, 144Hz 300nits, Intel Core i5-12500H 2.5 GHz, Creator/Gaming Laptop (16GB RAM/512GB`, price: "59990" },
    { id: 7, image: img7, title: `Dell Inspiron 15 3535 Laptop – 15.6 inch FHD (39.62cm) Display, AMD Ryzen 3`, price: "29990" },
    { id: 8, image: img8, title: `Lenovo IdeaPad Slim 1 AMD Ryzen 5 5500U 15.6" HD Thin and Light Laptop (16GB/512GB SSD/Integrated AMD`, price: "36990" },
    { id: 9, image: img9, title: `Apple 2024 MacBook Air (13-inch, Apple M3 chip with 8‑core CPU and 10‑core GPU`, price: "144000" },
    { id: 10, image: img10, title: "JioBook 11 with Lifetime Office/Android 4G Laptop Mediatek 8788 (JioOS)", price: "12300" },
  ];
  console.log(data);
  return (
    <>
      {/* <Navbar c={count} b={sendBill} /> */}
      <div className="navbar">
        <h3>Shopping Cart</h3>
        <div className="middle">
          <input type="text" id="searchInput" placeholder="Search" onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div>
          <span onClick={sendBill} className="cart-icon"><FaShoppingCart /><sup>{count}</sup></span>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="side">
            {
              data.filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return val;
                }
              }).map((item) => (
                <>
                  <Cart send={sendProduct} cartBill={finalProductList} proTitle={item.title} img={item.image} price={item.price} />
                </>
              ))
            }
          </div>
          {/* Add to cart billing */}
          {/* <div className="side">
            {data.map((item) => (
              <>
                <Cart send={sendProduct} proTitle={item.title} img={item.image} price={item.price} />
              </>
            ))}
          </div> */}
        </div>

      </div>
      <div className={`billing ${bill ? "bill_show" : ""}`}>
        <div className='billcart'>
          <h2>Your cart</h2>
          <span className='times' ><FaTimes onClick={sendBill} /></span>
        </div>
        <table>
          <tr>
            <th>Prod</th>
            <th>Name</th>
            <th className='cen'>Quan</th>
            <th className='cen'>Price</th>
          </tr>
          {
            product.map((item) => (
              <tr>
                <td className='pic'><img src={item.img} className="minipic" /></td>
                <td className='tit'>{item.proTitle}</td>
                <td className='quan'>x{item.quan}</td>
                <td className='amt'>{item.quan * item.price}</td>
              </tr>
            ))
          }
          <tr>
            <td className='final'></td>
            <td className='tit final'>Total</td>
            <td className='quan final'>{num}</td>
            <td className='amt final'>₹{total}</td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default App
