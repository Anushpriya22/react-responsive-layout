import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import './App.css'

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '55px'}}>

      
        </main>
        <div className="container-fluid" id="banner_bg">
            <p className="banner_title">Intrger bibendum sit amet arcu vel egestas</p>
           
               <div className="banner_icon">
               <p className="service_name"><img src={require('./assets/img/1.png')} alt="service name" title="service name" /><span>sample text</span></p>
              <p className="service_name"><img src={require('./assets/img/2.png')} alt="service name" /><span>sample text</span></p>
              <p className="service_name"><img src={require('./assets/img/3.png')} alt="service name" /><span>sample text</span></p>
            </div>

        </div>

        
   <div className="container" id="banner_sec">
         <div className="row">
            <div className="col-sm-6">
               <p className="sec_banner_head">Mauris id bibendum est.Proin dapibus sollicitudin iaculis, Maecenas condimentum maximus laoreet.
               </p>
               <p className="sec_banner_para">In maximus euismod egestas. Fusee tincidunt posuere est non elementum. Vivamus tincidunt eleifend nisl et gravida. Aenean in lorem ultrices, pellente squeaugue eu.mattis est. Praesent sed volutpat nibh. Morbi faucibus tortor sed neque vulputate hendrerit. Sed aliquam mattis purus eleifend consectetur. Nulla mollis non enim non tempus.</p>
            </div>
            <div className="col-sm-6">
             <p className=""><img src={require('./assets/img/map.png')} style={{ width: '100%'}}/></p>
            </div>
         </div>
      </div>

 <div className="container-fluid" id="testimonial_bg">
         <h3 className="testimonial_head">Testimonials</h3>
         <div className="container">
         <div className="row">
         <div className="col-sm-4" id="mob_testi">
           <div className="testi_inner whole_af">
  <p className="test">
  <span className="">
  <img src={require('./assets/img/com.png')} />
  </span> 
  Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                     </p>
                       <div className="shapes">
                        <span className=""></span>
                     </div>
           </div>
            <div className="thum">
                     <div className="avatar">
                        <img src={require('./assets/img/cline.png')} />
                     </div>
                     <div className="info">
                        <span className="">Client Name</span>
                        <b>Position, ORG</b>
                     </div>
                  </div>
          </div>
           <div className="col-sm-4" id="mob_test">
           <div className="testi_inner whole_af">
  <p className="test">
  <span className="">
  <img src={require('./assets/img/com.png')} />
  </span> 
  Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                     </p>
                       <div className="shapes">
                        <span className=""></span>
                     </div>
           </div>
            <div className="thum">
                     <div className="avatar">
                        <img src={require('./assets/img/cline.png')} />
                     </div>
                     <div className="info">
                        <span className="">Client Name</span>
                        <b>Position, ORG</b>
                     </div>
                  </div>
          </div>
          <div className="col-sm-4" id="mob_test">
          <div className="testi_inner whole_af">
  <p className="test">
  <span className="">
  <img src={require('./assets/img/com.png')} />
  </span> 
  Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                     </p>
                       <div className="shapes">
                        <span className=""></span>
                     </div>
           </div>
            <div className="thum">
                     <div className="avatar">
                        <img src={require('./assets/img/cline.png')} />
                     </div>
                     <div className="info">
                        <span className="">Client Name</span>
                        <b>Position, ORG</b>
                     </div>
                  </div>
          </div>
         </div>
         </div>
          
         </div>
     

   <section className="footer">
         <p className="form_head">Convinces To Work With Us</p>
         <p className="form_subcontent">Company has helped agencies keep their promises to clients to since 2005. </p>
         <div className="container-fluid bg_contact">
            <div className="row">
               <div className="col-sm-4">
                  <input type="text" className="form-control" name="name" placeholder="Name" />
               </div>
               <div className="col-sm-4">
                  <input type="text" className="form-control" name="name" placeholder="Email Id" />
               </div>
               <div className="col-sm-4">
                  <input type="text" className="form-control" name="name" placeholder="Phone number" />
               </div>
               <div className="col-md-12 text_ar">
                  <textarea className="form-control" rows="5" name="message" placeholder="Message"></textarea>
               </div>
            </div>
            <div className="sub_btn">
               <a href="">Submit</a>
            </div>
         </div>
      </section>
           <section className="copy_rights">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="left_para">
                 <p>Copyright @ 2017 Company.</p> 
              </div>
            </div>
            <div className="col-md-6">
              <div className="right_icons">
                <ul>
                  <li className="fo">Follow Us on:</li>
                  <li><a href=""><i className="fab fa-facebook-square"></i></a></li>
                  <li><a href=""><i className="fab fa-twitter"></i></a></li>
                  <li><a href=""><i className="fab fa-linkedin"></i></a></li>
                  <li><a href=""><i className="fas fa-envelope"></i></a></li>
                </ul>
                  
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    );
  }
}

export default App;
