import React, { Component, Fragment } from 'react';
import { Menu } from './'
import { CateringMenuWrap, CateringMenu } from '../styled-components/components/cateringmenu';
import { brown, darkblue, pink } from '../styled-components/colors';

import products from '../data/products';
import sizes from '../data/sizes';

class CateringMenuComponent extends Component {
  pricer = (value) => {
    return new Intl.NumberFormat('en-US',
      { style: 'currency', currency: 'USD' }
    ).format(value)
  }
  render(){
    return (
      <CateringMenuWrap>
        <CateringMenu>
          <h2>Prepared Drink Menu</h2>
          <table>
            <tr>
              <th>Sizes</th>
              <th>16<sup>oz</sup></th>
              <th>32<sup>oz</sup></th>
              <th>64<sup>oz</sup></th>
              <th>128<sup>oz</sup></th>
            </tr>
            {
              products.map((a,ia) => {
                if(a.type == "Prepared Drink"){
                  return (
                    <tr key={ia}>
                      <td>{a.name}</td>
                      {
                        sizes[a.sizeOptions].map((b,ib) => {
                          return (
                            <td key={ib}>
                            { this.pricer(a.basePrice * b[1][0]/b[1][1]) }
                            </td>
                          )
                        })
                      }
                    </tr>
                  )
                }
              })
            }
          </table>
          <h2>Baked Goods Menu</h2>
          <table>
            <tr>
              <th>Sizes</th>
              <th>Single</th>
              <th>1/2 Dozen</th>
              <th>Dozen</th>
            </tr>
            {
              products.map((a,ia) => {
                if(a.type == "Baked Goods"){
                  return (
                    <Fragment key={ia}>
                      <tr>
                        <td>{a.name}</td>
                        {
                          sizes[a.sizeOptions].map((c,ic) => {
                            return (
                              <td key={ic}>
                              { this.pricer(a.basePrice * c[1][0]/c[1][1]) }
                              </td>
                            )
                          })
                        }
                      </tr>
                    </Fragment>
                  )
                }
              })
            }
          </table>
          <h2>Retail Menu</h2>
          <table>
            {
              products.map((a,ia) => {
                if(a.type == "Retail"){
                  return (
                    <Fragment key={ia}>
                      <tr>
                        <th>Sizes</th>
                        {
                          sizes[a.sizeOptions].map((b,ib) => {
                            return (
                              <th key={ib}>{ b[0] }</th>
                            )
                          })
                        }
                      </tr>
                      <tr>
                        <td>{a.name}</td>
                        {
                          sizes[a.sizeOptions].map((c,ic) => {
                            return (
                              <td key={ic}>
                              { this.pricer(a.basePrice * c[1][0]/c[1][1]) }
                              </td>
                            )
                          })
                        }
                      </tr>
                    </Fragment>
                  )
                }
              })
            }
          </table>
        </CateringMenu>
      </CateringMenuWrap>
    );
  }
}

export default CateringMenuComponent;
