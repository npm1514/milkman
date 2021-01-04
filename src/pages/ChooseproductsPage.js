import React, { Component, Fragment } from 'react';
import { Header, Footer } from '../components';
import { ChooseproductsContent, ProductWrapper, FlagWrapper, Flag } from '../styled-components/pages/chooseproducts';
import { PageWrapper, ContentWrapper, Button, ProductBox } from '../styled-components/global';
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
      startDateSelected: setMinDate(),
      timeSelected: "09:00",
      notes: "",
      selectedPrice: "",
      paymentFrequency: "Month",
      pricePerPayPeriod: "",
      reelPosition: "",
      validTime: true,
      user: {
        _id: ""
      },
      subscription: {}
    };
  }
  selectProduct = (product) => {
    this.setState({
      productSelected: product,
      flavorSelected: "",
      sizeSelected: "",
      reelPosition: "showReel",
      quantitySelected: 1,
      frequencySelected: ""
    }, () => {
      this.slider("step2");
      this.checkPrice();
    })

  }
  selectFlavor = (flavor) => {
    this.setState({
      flavorSelected: flavor
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
    }, 100)
  }
  checkPrice = () => {
    let { productSelected: { basePrice }, flavorSelected, sizeSelected, quantitySelected, frequencySelected } = this.state;
    let flavor = flavorSelected.length ? flavorSelected[1] : [1,1];
    let size = sizeSelected.length ? sizeSelected[1] : [1,1];
    let price = Math.round(quantitySelected * basePrice * flavor[0] * (1/flavor[1]) * size[0] * (1/size[1])*100)/100;
    let pppp = "";
    let payFreq = "Monthly";
    if(frequencySelected){
      pppp = price;
      switch(frequencySelected.name){
        case "Daily":
          pppp *= 7;
          payFreq = "Weekly";
          break;
        case "Work Days":
          pppp *= 5;
          payFreq = "Weekly";
          break;
        case "Weekend":
          pppp *= 2;
          payFreq = "Weekly";
          break;
        case "Weekly":
          payFreq = "Weekly";
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
  createSubscription = (e) => {
    if(this.state.validTime){
      const { productSelected, flavorSelected, sizeSelected, quantitySelected, frequencySelected, startDateSelected, timeSelected, selectedPrice, paymentFrequency, pricePerPayPeriod, user, notes } = this.state;
      const { subscriptionID } = this.props.data;
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
          notes, user: user._id
        })
      })
      .then((res) => {
        if(res.status !== 200) throw Error(res.statusText);
        return res.json()
      })
      .then((data) => {
        if(user._id){
          this.addSubscriptionToUser(data._id)
        } else {
          window.location.href = "/signup/" + data._id
        }
      })
    } else {
      alert("Please select a valid delivery time.")
    }

  }
  addSubscriptionToUser = (subscriptionID) => {
    let { user, user: { subscriptions, _id } } = this.state;
    // subscriptions.push(subscriptionID);
    // subscriptions = [...new Set(subscriptions)]
    // console.log("add subscription", user);
    user.firstName = "Bob"
    fetch('/api/users/' + _id, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user })
    })
    .then((res) => {
      if(res.status !== 200) throw Error(res.statusText);
      return res.json();
    })
    .then((response) => {
      console.log(response);
      window.location.href = '/cart';
    })
  }
  changeNotes = (e) => {
    this.setState({notes: e.currentTarget.value});
  }
  componentDidUpdate() {
    let time_select = document.getElementById('time_select')
    if(time_select && this.state.validTime){
      time_select.style.backgroundColor = '#bfa';
    }
  }
  componentDidMount(){
    fetch("/api/getMe")
      .then((response) => {
          if(response.status !== 200) throw Error(response.statusText);
          return response.json();
      }).then((user) => {
          this.setState({ user })
      }).catch(err => console.log(err))
    const { subscriptionID } = this.props;
    if(subscriptionID){
      fetch('/api/subscriptions/' + subscriptionID)
      .then((res) => res.json())
      .then((subscription) => {
        this.setState({subscription})
      })
    }
  }

  render(){
    const { productSelected, flavorSelected, sizeSelected, selectedPrice, frequencySelected, quantitySelected, pricePerPayPeriod, startDateSelected, timeSelected, reelPosition, paymentFrequency, notes, user } = this.state;
    let sizeoptions = ""
    if(productSelected){
      sizeoptions = flavorSelected[0] == "rotating single origin" ? "singleoriginsizes" : productSelected.sizeOptions;
    }
    console.log(flavors[productSelected.flavorOptions]);
    return (
        <PageWrapper>
            <Header user={user}/>
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
                    <p>Hover for better description</p>
                    <ProductWrapper>
                      {
                        flavors[productSelected.flavorOptions].map((flavor, i) => {
                          return (
                            <ProductBox
                              key={i}
                              title={flavor[2]}
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
                      style={{margin: "8px auto"}}
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
                      style={{margin: "8px auto"}}
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
                  <Fragment>
                    <h2 id="step5">Step 6: Select Start Date and Preferred Time of Delivery</h2>
                    <ProductBox
                      style={{margin: "8px auto"}}
                      className={notes ? "productSelected" : ""}
                    >
                      <textarea
                        style={{width: "230px", textAlign: "center"}}
                        placeholder="Did we miss anything? If there are any other details about your subscription that you would like, please let us know here."
                        type="number"
                        value={notes}
                        onChange={this.changeNotes}
                      />
                    </ProductBox>
                  </Fragment>
                }

                {
                  productSelected && flavorSelected && sizeSelected && frequencySelected && startDateSelected && timeSelected &&
                  <Button onClick={this.createSubscription}>Add To Cart</Button>
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
