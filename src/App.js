import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Slider from 'react-slick';
import Product from'./Product/Product';
import Loading from'./components/Loading/Loading';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: [],
      loading: true
    }
  }


  componentDidMount() {
    const zevioo = document.getElementById('zevioo-widget_products')
    const USR = zevioo.getAttribute('data-usr');
    const PSW = zevioo.getAttribute('data-psw');
    const EAN = zevioo.getAttribute('data-ean');

    // Append Style 
    var style_tag = document.createElement('link');
    style_tag.setAttribute("rel","stylesheet");
    style_tag.setAttribute("href",
        "zevioo-reviews.css");

    axios.post('getcnvproducts', {
      USR: USR,
      PSW: PSW,
      EAN: EAN,
      RT: 1
    })
         .then(response => {
            const products = response.data.PL
            const updatedproducts = [...products]
            this.setState({
              products: updatedproducts,
              loading: false
                })

         })
         }
        

  render() {
    const settings = {
      dots: false,
      infinite: false,
      draggable: true,
      touchMove: true,
      speed: 500,
      slidesToScroll: 1,
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 3,
            infinite: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 2,
            infinite: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 2,
            infinite: false
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    }


    return (
      <div>
        <div className="zevioo-products__container">
        <div className="zevioo-products__header">
            <div className="zevioo-header__title">
             <span>Best Sellers & Top Rated</span>
             <span>
              <a className="zevioo-header__copyrights" href="https://www.zevioo.com/" target="_blank" rel="noopener noreferrer">powered by 
                <img src="https://zevioo.com/images/mininewogo.png" alt="zevioo Logo"/>
              </a>
             </span>
            </div>
        </div>
        </div>
        <div className="zevioo-products__grid">
        {this.state.loading? <Loading /> : null }
          <Slider className="zevioo-products__grid-wrapper zevioo" ref={c => this.slider = c } {...settings}>
          {this.state.products.map((product, slide) => {
          return (
            <div key={slide} className="test">
              <Product className="zevioo" 
                name={product.NM} 
                price={product.PRC}
                tag={product.TAG}
                img={product.IMG}
                rating={product.OR}
                rc={product.RC}
                link={product.SLK}
                key={slide}
              />
            </div>
        )
          })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default App;
