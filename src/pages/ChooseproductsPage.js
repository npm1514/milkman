import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ChooseproductsWrapper, ChooseproductsContent, ProductWrapper, ProductBox, FlagWrapper, Flag, Button } from '../styled-components/pages/chooseproducts';
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
      quantitySelected: 1,
      frequencySelected: "",
      startDateSelected: "",
      timeSelected: "",
      selectedPrice: "",
      priceMessage: "",
      pricePerMonth: "",
      reelPosition: ""
    };
  }
  selectProduct = (product) => {
    let flavor = product.name == "Cold Brew" ? ["House", 1] : "";
    let size = product.name == "Amour Jam" ? ["9 oz", 1] : "";
    this.setState({
      productSelected: product,
      flavorSelected: flavor,
      sizeSelected: size,
      selectedPrice: product.basePrice,
      reelPosition: "showReel"
    })
    setTimeout(() => {
      var element = document.getElementById("step2");
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200)

  }
  selectFlavor = (flavor) => {
    const { productSelected: {name, basePrice}, sizeSelected } = this.state;
    let size = name == "Amour Jam" ? ["9 oz", 1] : sizeSelected;
    let sizePrice = sizeSelected ? sizeSelected[1] : 1;
    let price = Math.round(basePrice * flavor[1] * sizePrice*100)/100;
    this.setState({
      flavorSelected: flavor,
      sizeSelected: size,
      selectedPrice: price
    })
    setTimeout(() => {
      var element = document.getElementById("step3");
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200)
  }
  selectSize = (size) => {
    const { productSelected: { basePrice }, flavorSelected } = this.state;
    let price = Math.round(basePrice * flavorSelected[1] * size[1]*100)/100;
    this.setState({
      sizeSelected: size,
      selectedPrice: price
    })
    setTimeout(() => {
      var element = document.getElementById("step4");
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200)
  }
  selectFrequency = (frequency) => {
    const { productSelected: { basePrice }, flavorSelected, sizeSelected, quantitySelected } = this.state;
    let price = Math.round(quantitySelected * basePrice * flavorSelected[1] * sizeSelected[1]*100)/100;
    let ppm = price;
    switch(frequency.name){
      case "Daily":
        ppm *= 30;
        break;
      case "Work Days":
        ppm *= 20;
        break;
      case "Weekend":
        ppm *= 8;
        break;
      case "Weekly":
        ppm *= 4;
        break;
      case "Bi-Weekly":
        ppm *= 2;
        break;
    }
    this.setState({
      frequencySelected: frequency,
      selectedPrice: price,
      pricePerMonth: ppm
    })
    setTimeout(() => {
      var element = document.getElementById("step5");
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200)
  }
  selectQuantity = (event) => {
    let val = event.currentTarget.value < 1 ? 1 : event.currentTarget.value;
    const { productSelected: { basePrice }, flavorSelected, sizeSelected } = this.state;
    let price = Math.round(val * basePrice * flavorSelected[1] * sizeSelected[1]*100)/100;
    this.setState({
      quantitySelected: val,
      selectedPrice: price
    })
  }
  selectStartDate = (event) => {
    console.log(event.currentTarget.value);
    this.setState({
      startDateSelected: event.currentTarget.value
    })
  }
  selectTime = (event) => {
    console.log(event.currentTarget.value);
    this.setState({
      timeSelected: event.currentTarget.value
    })
  }
  manageReel = () => {
    let position = this.state.reelPosition == "showReel" ? "hideReel" : "showReel"
    this.setState({
      reelPosition: position
    })
  }
  render(){
    const { productSelected, flavorSelected, sizeSelected, selectedPrice, frequencySelected, quantitySelected, pricePerMonth, startDateSelected, timeSelected, reelPosition } = this.state;
    let sizeoptions = ""
    if(productSelected){
      sizeoptions = flavorSelected[0] == "rotating single origin" ? "singleoriginsizes" : productSelected.sizeOptions
    }
    return (
        <ChooseproductsWrapper>
            <Header/>
            <ChooseproductsContent>
              <FlagWrapper className={reelPosition} onClick={this.manageReel}>
                {
                  selectedPrice &&
                  <h2 style={{color: "#fff", zIndex: 100}}>${selectedPrice}/Day</h2>
                }
                {
                  frequencySelected &&
                  <h2 style={{color: "#fff", zIndex: 100}}>${pricePerMonth}/Month</h2>
                }
                <Flag>
                  <path fill={lightblue} d="M 1 1 L 149 1 L 149 99 L 139 93 L 129 99 L 119 93 L 109 99 L 99 93 L 89 99 L 79 93 L 69 99 L 59 93 L 49 99 L 39 93 L 29 99 L 19 93 L 9 99 L 1 93 L 1 1 " stroke={darkblue} strokeWidth="2"/>
                </Flag>
              </FlagWrapper>
              <h2 id="step1">Step 1: Select Product</h2>
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
                  <h2 id="step2">Step 2: Select Flavor</h2>
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
                  <h2 id="step3">Step 3: Select Size</h2>
                  <ProductWrapper>
                    {
                      sizes[sizeoptions].map((size, i) => {
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
                  <h2 id="step4">Step 4: Select Frequency and Quantity</h2>
                  <ProductBox
                    style={{margin: "auto"}}
                    className={quantitySelected ? "productSelected" : ""}
                  >
                    <input
                      style={{width: "62px", textAlign: "center"}}
                      placeholder="Quantity"
                      type="number"
                      value={quantitySelected}
                      onChange={this.selectQuantity}
                    />
                  </ProductBox>
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
                </Fragment>
              }
              {
                productSelected && flavorSelected && sizeSelected && frequencySelected &&
                <Fragment>
                  <h2 id="step5">Step 5: Select Start Date and Preferred Time of Delivery</h2>
                  <ProductBox
                    style={{margin: "auto"}}
                    className={startDateSelected ? "productSelected" : ""}
                  >
                    <input
                      placeholder="Select Start Date"
                      type="date"
                      value={startDateSelected}
                      onChange={this.selectStartDate}
                    />
                  </ProductBox>
                  <ProductBox
                    style={{margin: "auto"}}
                    className={timeSelected ? "productSelected" : ""}
                  >
                    <input
                      placeholder="Select Preferred Delivery Time"
                      type="time"
                      value={timeSelected}
                      onChange={this.selectTime}
                    />
                  </ProductBox>
                </Fragment>
              }
              {
                productSelected && flavorSelected && sizeSelected && frequencySelected && startDateSelected && timeSelected &&
                <Button>Add To Cart</Button>
              }
            </ChooseproductsContent>
            <Footer/>
        </ChooseproductsWrapper>
    );
  }
}

export default Chooseproducts;
