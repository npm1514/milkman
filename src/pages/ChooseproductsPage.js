import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ChooseproductsWrapper, ChooseproductsContent, ProductWrapper, ProductBox, FlagWrapper, Flag } from '../styled-components/pages/chooseproducts';
import sizes from '../data/sizes';
import flavors from '../data/flavors';
import frequencies from '../data/frequencies';
import products from '../data/products';
import { darkblue, pink, lightblue, green } from '../styled-components/colors';

class Chooseproducts extends Component {
  constructor(props){
    super(props)
    this.state = {
      productSelected: "",
      flavorSelected: "",
      sizeSelected: "",
      quantitySelected: "",
      frequencySelected: "",
      startDateSelected: "",
      timeSelected: "",
      selectedPrice: "",
      priceMessage: ""
    };
  }
  selectProduct = (product) => {
    let flavor = product.name == "Cold Brew" ? ["House", 1] : "";
    let size = product.name == "Amour Jam" ? ["9oz", 1] : "";
    this.setState({
      productSelected: product,
      flavorSelected: flavor,
      sizeSelected: size,
      selectedPrice: product.basePrice
    })
  }
  selectFlavor = (flavor) => {
    const { productSelected: {name, basePrice}, sizeSelected } = this.state;
    let size = name == "Amour Jam" ? ["9oz", 1] : sizeSelected;
    let sizePrice = sizeSelected ? sizeSelected[1] : 1;
    let price = Math.round(basePrice * flavor[1] * sizePrice*100)/100;
    this.setState({
      flavorSelected: flavor,
      sizeSelected: size,
      selectedPrice: price
    })
  }
  selectSize = (size) => {
    const { productSelected: { basePrice }, flavorSelected } = this.state;
    let price = Math.round(basePrice * flavorSelected[1] * size[1]*100)/100;
    this.setState({
      sizeSelected: size,
      selectedPrice: price
    })
  }
  selectFrequency = (frequency) => {
    // const { productSelected: { basePrice }, flavorSelected } = this.state;
    // let price = Math.round(basePrice * flavorSelected[1] * size[1]*100)/100;
    this.setState({
      frequencySelected: frequency
    })
  }
  selectQuantity = (event) => {
    // const { productSelected: { basePrice }, flavorSelected } = this.state;
    // let price = Math.round(basePrice * flavorSelected[1] * size[1]*100)/100;
    this.setState({
      quantitySelected: event.currentTarget.value
    })
  }
  render(){
    const { productSelected, flavorSelected, sizeSelected, selectedPrice, frequencySelected, quantitySelected } = this.state;
    return (
        <ChooseproductsWrapper>
            <Header/>
            <ChooseproductsContent>
              <FlagWrapper className={selectedPrice ? "showReel" : ""}>
                {
                  selectedPrice &&
                  <h2 style={{color: "#fff", zIndex: 100}}>${selectedPrice}</h2>
                }
                {
                  frequencySelected &&
                  <h2 style={{color: "#fff", zIndex: 100}}>{frequencySelected.name}</h2>
                }
                <Flag>
                  <path fill={lightblue} d="M 1 1 L 149 1 L 149 99 L 139 93 L 129 99 L 119 93 L 109 99 L 99 93 L 89 99 L 79 93 L 69 99 L 59 93 L 49 99 L 39 93 L 29 99 L 19 93 L 9 99 L 1 93 L 1 1 " stroke={darkblue} strokeWidth="2"/>
                </Flag>
              </FlagWrapper>
              <h2>Step 1: Select Product</h2>
              <ProductWrapper>
                {
                  products.map((product, i) => {
                    return (
                      <ProductBox
                        key={i}
                        onClick={() => this.selectProduct(product)}
                        className={productSelected == product ? "productSelected" : ""}
                      >
                        <img src={product.img}/>
                        <p>{product.name}</p>
                      </ProductBox>
                    )
                  })
                }
              </ProductWrapper>
              {
                productSelected &&
                <Fragment>
                  <h2>Step 2: Select Flavor</h2>
                  <ProductWrapper>
                    {
                      flavors[productSelected.flavorOptions].map((flavor, i) => {
                        return (
                          <ProductBox
                            key={i}
                            onClick={() => this.selectFlavor(flavor)}
                            className={flavor[0] == flavorSelected[0] ? "productSelected" : ""}
                          >
                            <p>{flavor[0]}</p>
                          </ProductBox>
                        )
                      })
                    }
                  </ProductWrapper>
                </Fragment>
              }
              {
                productSelected && flavorSelected &&
                <Fragment>
                  <h2>Step 3: Select Size</h2>
                  <ProductWrapper>
                    {
                      sizes[productSelected.sizeOptions].map((size, i) => {
                        return (
                          <ProductBox
                            key={i}
                            onClick={() => this.selectSize(size)}
                            className={size[0] == sizeSelected[0] ? "productSelected" : ""}
                          >
                            <p>{size[0]}</p>
                          </ProductBox>
                        )
                      })
                    }
                  </ProductWrapper>
                </Fragment>
              }
              {
                productSelected && flavorSelected && sizeSelected &&
                <Fragment>
                  <h2>Step 4: Select Frequency and Quantity</h2>
                  <ProductWrapper>

                    {
                      frequencies.map((frequency, i) => {
                        return (
                          <ProductBox
                            key={i}
                            onClick={() => this.selectFrequency(frequency)}
                            className={frequency == frequencySelected ? "productSelected" : ""}
                          >
                            <p title={frequency.label}>{frequency.name}</p>
                          </ProductBox>
                        )
                      })
                    }

                  </ProductWrapper>
                  <ProductBox className={quantitySelected ? "productSelected" : ""}>
                    <input placeholder="Quantity" value={quantitySelected} onChange={this.selectQuantity}/>
                  </ProductBox>
                </Fragment>
              }

            </ChooseproductsContent>
            <Footer/>
        </ChooseproductsWrapper>
    );
  }
}

export default Chooseproducts;
