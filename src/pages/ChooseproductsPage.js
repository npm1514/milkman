import React, { Component, Fragment } from 'react';
import { Header, Footer } from '../components';
import { ChooseproductsContent, ProductWrapper, ProductBox, FlagWrapper, Flag } from '../styled-components/pages/chooseproducts';
import { PageWrapper, ContentWrapper, Button } from '../styled-components/global';
import sizes from '../data/sizes';
import flavors from '../data/flavors';
import frequencies from '../data/frequencies';
import products from '../data/products';
import { darkblue, pink, lightblue, green } from '../styled-components/colors';

class Chooseproducts extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: {},
      productSelected: "",
      flavorSelected: "",
      sizeSelected: "",
      quantitySelected: 1,
      frequencySelected: "",
      startDateSelected: setMinDate(),
      timeSelected: "09:00",
      selectedPrice: "",
      paymentFrequency: "Month",
      pricePerPayPeriod: "",
      reelPosition: "",
      validTime: true
    };
  }
  selectProduct = (product) => {
    let flavor = product.name == "Cold Brew" ? ["House", [1,1]] : "";
    let size = product.name == "Amour Jam" ? ["9 oz", [1,1]] : "";
    this.setState({
      productSelected: product,
      flavorSelected: flavor,
      sizeSelected: size,
      reelPosition: "showReel",
      quantitySelected: 1,
      frequencySelected: ""
    }, () => {
      this.slider("step2");
      this.checkPrice();
    })

  }
  selectFlavor = (flavor) => {
    const { productSelected: { name }, sizeSelected } = this.state;
    let size = name == "Amour Jam" ? ["9 oz", [1,1]] : sizeSelected;
    if(sizeSelected && name == "Prebrewed Drip Coffee"){
      let option = flavor[0] == "rotating single origin" ? "singleoriginsizes" : "coffeeteasizes"
      size = sizes[option].find(a => a[0] == sizeSelected[0])
    }
    this.setState({
      flavorSelected: flavor,
      sizeSelected: size
    }, () => {
      this.slider("step3");
      this.checkPrice();
    })

  }
  selectSize = (size) => {
    this.setState({ sizeSelected: size }, () => {
      this.slider("step4");
      this.checkPrice();
    })
  }
  selectFrequency = (frequency) => {
    this.setState({ frequencySelected: frequency }, () => {
      this.slider("step5")
      this.checkPrice();
    })
  }
  selectQuantity = (event) => {
    const { value } = event.currentTarget;
    let val = value < 1 ? 1 : value;
    this.setState({ quantitySelected: val }, () => {
      this.checkPrice()
    })
  }
  selectStartDate = (event) => {
    this.setState({ startDateSelected: event.currentTarget.value })
  }
  selectTime = (event) => {
    const { value } = event.currentTarget;
    let time_select = document.getElementById('time_select')
    let hour = parseInt(value.split(":")[0])
    let isValid = false;
    if (hour > 6 && hour < 13) {
      time_select.style.backgroundColor = '#bfa';
      isValid = true;
    } else {
      time_select.style.backgroundColor = '#fba';
    }
    this.setState({
      timeSelected: value,
      validTime: isValid
    })

  }
  manageReel = () => {
    let position = this.state.reelPosition == "showReel" ? "hideReel" : "showReel"
    this.setState({ reelPosition: position })
  }
  slider = (id) => {
    setTimeout(() => {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200)
  }
  checkPrice = () => {
    let { productSelected: { basePrice }, flavorSelected, sizeSelected, quantitySelected, frequencySelected } = this.state;
    let flavor = flavorSelected.length ? flavorSelected[1] : [1,1];
    let size = sizeSelected.length ? sizeSelected[1] : [1,1];
    let price = Math.round(quantitySelected * basePrice * flavor[0] * (1/flavor[1]) * size[0] * (1/size[1])*100)/100;
    let pppp = "";
    let payFreq = "Month";
    if(frequencySelected){
      pppp = price;
      switch(frequencySelected.name){
        case "Daily":
          pppp *= 7;
          payFreq = "Week";
          break;
        case "Work Days":
          pppp *= 5;
          payFreq = "Week";
          break;
        case "Weekend":
          pppp *= 2;
          payFreq = "Week";
          break;
        case "Weekly":
          payFreq = "Week";
          break;
        case "Bi-Weekly":
          payFreq = "Bi-Weekly";
          break;
      }
    }
    this.setState({
      selectedPrice: price,
      pricePerPayPeriod: pppp,
      paymentFrequency: payFreq
    })
  }
  submitProduct = (e) => {
    if(this.state.validTime){
      const { productSelected, flavorSelected, sizeSelected, quantitySelected, frequencySelected, startDateSelected, timeSelected, selectedPrice, paymentFrequency, pricePerPayPeriod, user
      } = this.state;
      fetch('/api/subscriptions', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          product: productSelected.name,
          flavor: flavorSelected[0],
          size: sizeSelected[0],
          quantity: quantitySelected,
          deliveryFrequency: frequencySelected.name,
          startDate: startDateSelected,
          timeOfDelivery: timeSelected,
          pricePerDelivery: selectedPrice,
          pricePerPayPeriod: pricePerPayPeriod,
          payPeriodFrequency: paymentFrequency,
          recurringPayment: true,
          user: user && user._id || ""
        })
      })
      .then((res) => res.json())
      .then((data) => {this.submitOrder(data)})
    } else {
      alert("Please select a valid delivery time.")
    }

  }
  submitOrder = (data) => {
    console.log(data);
    // fetch('/api/subscriptions', {
    //   method: "POST",
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     user: {type: mongoose.Schema.Types.ObjectId, ref: "users"},
    //     subscriptions: [{type: mongoose.Schema.Types.ObjectId, ref: "subscriptions"}],
    //     quantity: {type: Number, required: true},
    //     date: {type: String, required: true},
    //     invoiceNum: {type: Number, required: true}
    //   })
    // })
    // .then((res) => res.json())
    // .then((data) => {
    //   if(user && user._id){
    //     //add subscription to user
    //     window.location.href = `/myaccount/${user._id}`;
    //   } else {
    //     window.location.href = `/signup/${data._id}`;
    //   }
    // })
  }
  switchPage = (user) => {
    if(user && user._id){
      //add subscription to user
      window.location.href = `/myaccount/${user._id}`;
    } else {
      window.location.href = `/signup/${data._id}`;
    }
  }
  componentDidUpdate() {
    let time_select = document.getElementById('time_select')
    if(time_select && this.state.validTime){
      time_select.style.backgroundColor = '#bfa';
    }
  }
  componentDidMount(){
    fetch('/getMe')
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
    })
  }
  render(){
    const { productSelected, flavorSelected, sizeSelected, selectedPrice, frequencySelected, quantitySelected, pricePerPayPeriod, startDateSelected, timeSelected, reelPosition, paymentFrequency } = this.state;
    let sizeoptions = ""
    if(productSelected){
      sizeoptions = flavorSelected[0] == "rotating single origin" ? "singleoriginsizes" : productSelected.sizeOptions;
    }
    return (
        <PageWrapper>
            <Header/>
            <ContentWrapper>
              <ChooseproductsContent>
                <FlagWrapper className={reelPosition} onClick={this.manageReel}>
                  {
                    selectedPrice &&
                    <h2 style={{color: "#fff", zIndex: 100}}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(selectedPrice)}/Delivery</h2>
                  }
                  {
                    pricePerPayPeriod &&
                    <h2 style={{color: "#fff", zIndex: 100}}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(pricePerPayPeriod)}/{paymentFrequency}</h2>
                  }
                  <Flag>
                    <path fill={lightblue} d={`
                      M 1 1
                      L 249 1
                      L 249 129
                      L 239 123
                      L 229 129
                      L 219 123
                      L 209 129
                      L 199 123
                      L 189 129
                      L 179 123
                      L 169 129
                      L 159 123
                      L 149 129
                      L 139 123
                      L 129 129
                      L 119 123
                      L 109 129
                      L 99 123
                      L 89 129
                      L 79 123
                      L 69 129
                      L 59 123
                      L 49 129
                      L 39 123
                      L 29 129
                      L 19 123
                      L 9 129
                      L 1 123
                      L 1 1`} stroke={darkblue} strokeWidth="2"/>
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
                        required
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
                    <p>We deliver between the hours of 7AM and 12PM. If you have a deliver requirement outside of this range, please call us.</p>
                    <ProductBox
                      style={{margin: "auto"}}
                      className={startDateSelected ? "productSelected" : ""}
                    >
                      <input
                        placeholder="Select Start Date"
                        type="date"
                        required
                        value={startDateSelected}
                        onChange={this.selectStartDate}
                        min={setMinDate()}
                        max={setMaxDate()}
                      />
                    </ProductBox>
                    <ProductBox
                      style={{margin: "auto"}}
                      className={timeSelected ? "productSelected" : ""}
                    >
                      <input
                        placeholder="Select Preferred Delivery Time"
                        type="time"
                        id="time_select"
                        required
                        value={timeSelected}
                        onChange={this.selectTime}
                        min="07:00"
                        max="12:00"
                      />
                    </ProductBox>
                  </Fragment>
                }
                {
                  productSelected && flavorSelected && sizeSelected && frequencySelected && startDateSelected && timeSelected &&
                  <Button onClick={this.submitProduct}>Add To Cart</Button>
                }
              </ChooseproductsContent>
            </ContentWrapper>
            <Footer/>
        </PageWrapper>
    );
  }
}

export default Chooseproducts;

function setMinDate () {
  let minDate = new Date();
  minDate.setDate(minDate.getDate() + 1)
  return minDate.toISOString().split('T')[0]
}
function setMaxDate () {
  let maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 31)
  return maxDate.toISOString().split('T')[0]
}
