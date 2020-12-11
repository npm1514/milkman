import React, { Component } from 'react';
import { Footer } from '../styled-components/components/footer';

class FooterComponent extends Component {
  render(){
    return (
      <Footer>
        <span>Copyright 2020 Cafe Juniper LLC</span>
        <div>
          <a rel="noopener" name="instagram link" href="https://www.instagram.com/cafejuniperslc/" target="_blank"><i className="fab fa-instagram"></i></a>
          <a rel="noopener" name="facebook link" href="https://www.facebook.com/cafejuniperslc" target="_blank"><i className="fab fa-facebook-square"></i></a>
          <a rel="noopener" name="facebook link" href="https://www.grubhub.com/restaurant/cafe-juniper-29-e-400-s-salt-lake-city/2418846" target="_blank">
            <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
              <g>
                <rect width="40" height="40" fill="none"/>
                <path d="M14.6273,17.9708c0,.703-.3013,3.5149-2.31,4.1174-1.5063.4017-2.2093-.703-2.2093-3.314v-9.44a6.3838,6.3838,0,0,1,.8034-3.314,3.5254,3.5254,0,0,1,2.1089-1.2051c.8034,0,1.6068.703,1.6068,2.2094V8.4305c0,.3013.3013.6026.6025.4017l3.5149-1.4059c.1,0,.3013-.1005.3013-.4017V5.4178c0-3.8162-3.4145-6.1259-7.03-5.2221A8.8677,8.8677,0,0,0,5.3882,8.9326V20.5819c0,4.2178,3.0128,6.3267,5.5234,6.3267,3.7157,0,8.1344-2.9123,8.1344-9.2391v-7.23c0-.4017-.3013-.4017-.6026-.4017l-5.7242,2.0085a.5147.5147,0,0,0-.4017.6025v3.314c0,.3013.3013.4017.6026.4017l1.6068-.6025v2.2093Zm19.3819,21.993c.3013.1.6026,0,.6026-.4017V15.1589c0-.3012-.1005-.4017-.4017-.4017l-3.7157-1.4059c-.3013-.1-.6026,0-.6026.4017v9.6408l-3.7157-1.406V12.2466c0-.3012-.1-.4017-.4017-.4017L22.0587,10.439c-.3013-.1-.6026,0-.6026.4017v24.604c0,.3013.1005.4017.4017.4017l3.7157,1.4059c.3013.1005.6026,0,.6026-.4017V26.7078l3.7157,1.4059V38.2566c0,.3012.1.4017.4017.4017l3.7157,1.3055Z"/>
              </g>
            </svg>
          </a>
          <a rel="noopener" name="facebook link" href="https://www.doordash.com/store/cafe-juniper-salt-lake-city-1279187/en-US" target="_blank">
            <svg width="30" height="30" viewBox="0 0 99.5 56.5">
              <path d="M95.64,13.38A25.24,25.24,0,0,0,73.27,0H2.43A2.44,2.44,0,0,0,.72,4.16L16.15,19.68a7.26,7.26,0,0,0,5.15,2.14H71.24a6.44,6.44,0,1,1,.13,12.88H36.94a2.44,2.44,0,0,0-1.72,4.16L50.66,54.39a7.25,7.25,0,0,0,5.15,2.14H71.38c20.26,0,35.58-21.66,24.26-43.16"></path>
            </svg>
          </a>
        </div>
      </Footer>
    );
  }
}

export default FooterComponent;
