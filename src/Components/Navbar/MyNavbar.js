import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar , Container , Nav, Form, FormControl, Button} from 'react-bootstrap';
import Logo from '../../Img/logo-light.png';
import './MyNavbar.css'
const MyNavbar = () => {
      return (
            <>
                  {/* Desktop Navbar */}
                  <Container  className='navbar__links'>
                        <Navbar>
                              <Navbar.Brand href="#home">
                                    <img
                                          src={Logo}
                                          width="100"
                                          height="50"
                                          className="d-inline-block align-top"
                                          alt="logo"
                                    />
                              </Navbar.Brand>
                              <Nav className="me-auto">
                                    <Nav.Link href="#">
                                          <span className='lang'>EN</span>
                                    </Nav.Link>
                                    <Nav.Link href="#" className='navbar__search-bar'>
                                          <Form className="d-flex">
                                                <FormControl
                                                      type="search"
                                                      placeholder="بـحـث..."
                                                      className="navbar__search-inp me-2"
                                                      aria-label="Search"
                                                />
                                                <Button className='navbar__search-btn'>
                                                      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="6.5" cy="6.5" r="5.5" stroke="white" stroke-width="1.5"/>
                                                            <path d="M10.171 10.1281L14.6841 13.9558" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                                                      </svg>
                                                </Button>
                                                <div className='navbar__calender'>
                                                      <svg width="22" height="22" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <ellipse cx="20.7879" cy="11.3906" rx="1.27273" ry="1.26562" fill="#51BFAD"/>
                                                <path d="M22.9091 2.10938H21.5303V1.05469C21.5303 0.472184 21.0555 0 20.4697 0C19.8839 0 19.4091 0.472184 19.4091 1.05469V2.10938H14.5833V1.05469C14.5833 0.472184 14.1085 0 13.5227 0C12.937 0 12.4621 0.472184 12.4621 1.05469V2.10938H7.68939V1.05469C7.68939 0.472184 7.21456 0 6.62879 0C6.04302 0 5.56818 0.472184 5.56818 1.05469V2.10938H4.24242C1.90315 2.10938 0 4.00191 0 6.32812V22.7812C0 25.1075 1.90315 27 4.24242 27H12.3561C12.9418 27 13.4167 26.5278 13.4167 25.9453C13.4167 25.3628 12.9418 24.8906 12.3561 24.8906H4.24242C3.07279 24.8906 2.12121 23.9444 2.12121 22.7812V6.32812C2.12121 5.16502 3.07279 4.21875 4.24242 4.21875H5.56818V5.27344C5.56818 5.85594 6.04302 6.32812 6.62879 6.32812C7.21456 6.32812 7.68939 5.85594 7.68939 5.27344V4.21875H12.4621V5.27344C12.4621 5.85594 12.937 6.32812 13.5227 6.32812C14.1085 6.32812 14.5833 5.85594 14.5833 5.27344V4.21875H19.4091V5.27344C19.4091 5.85594 19.8839 6.32812 20.4697 6.32812C21.0555 6.32812 21.5303 5.85594 21.5303 5.27344V4.21875H22.9091C24.0787 4.21875 25.0303 5.16502 25.0303 6.32812V12.3398C25.0303 12.9223 25.5051 13.3945 26.0909 13.3945C26.6767 13.3945 27.1515 12.9223 27.1515 12.3398V6.32812C27.1515 4.00191 25.2484 2.10938 22.9091 2.10938Z" fill="#51BFAD"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2727 20.6719C15.2727 17.1825 18.1274 14.3438 21.6363 14.3438C25.1453 14.3438 28 17.1825 28 20.6719C28 24.1612 25.1453 27 21.6363 27C18.1274 27 15.2727 24.1612 15.2727 20.6719ZM17.3764 20.6719C17.3764 23.0077 19.2874 24.9081 21.6363 24.9081C23.9853 24.9081 25.8963 23.0077 25.8963 20.6719C25.8963 18.336 23.9853 16.4357 21.6363 16.4357C19.2874 16.4357 17.3764 18.336 17.3764 20.6719Z" fill="#51BFAD"/>
                                                <path d="M22.7738 19.8542H22.3311V18.7604C22.3311 18.1851 21.8907 17.7188 21.3474 17.7188C20.8041 17.7188 20.3636 18.1851 20.3636 18.7604V20.8958C20.3636 21.4711 20.8041 21.9375 21.3474 21.9375H22.7738C23.3172 21.9375 23.7576 21.4711 23.7576 20.8958C23.7576 20.3205 23.3172 19.8542 22.7738 19.8542Z" fill="#51BFAD"/>
                                                <ellipse cx="16.5454" cy="11.3906" rx="1.27273" ry="1.26562" fill="#51BFAD"/>
                                                <ellipse cx="11.4546" cy="15.6094" rx="1.27273" ry="1.26562" fill="#51BFAD"/>
                                                <ellipse cx="6.36361" cy="11.3906" rx="1.27273" ry="1.26562" fill="#51BFAD"/>
                                                <ellipse cx="6.36361" cy="15.6094" rx="1.27273" ry="1.26562" fill="#51BFAD"/>
                                                <ellipse cx="6.36361" cy="19.8281" rx="1.27273" ry="1.26562" fill="#51BFAD"/>
                                                      <ellipse cx="11.4546" cy="19.8281" rx="1.27273" ry="1.26562" fill="#51BFAD"/><ellipse cx="11.4546" cy="11.3906" rx="1.27273" ry="1.26562" fill="#51BFAD"/></svg>
                                                      <span>الأجنده</span>
                                                </div>
                                          </Form>

                                    </Nav.Link>
                                    <Nav.Link href="#">
                                          <span  className='navbar__account'>
                                                <svg width="27" height="27" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M23.8035 18.8063C26.313 19.6723 28.6131 21.1028 30.5455 23.0352C33.8964 26.3862 35.7419 30.8416 35.7419 35.5806H32.9697C32.9697 27.3263 26.2544 20.6109 18 20.6109C9.74563 20.6109 3.03023 27.3263 3.03023 35.5806H0.258057C0.258057 30.8416 2.10356 26.3862 5.45457 23.0352C7.38699 21.1028 9.68706 19.6723 12.1966 18.8063C9.50874 16.9551 7.74294 13.857 7.74294 10.3538C7.74294 4.6981 12.3443 0.0967712 18 0.0967712C23.6557 0.0967712 28.257 4.6981 28.257 10.3538C28.257 13.857 26.4912 16.9551 23.8035 18.8063ZM9.93548 10.1774C9.93548 14.4019 13.3723 17.8387 17.5968 17.8387C21.8212 17.8387 25.2581 14.4019 25.2581 10.1774C25.2581 5.95292 21.8212 2.51613 17.5968 2.51613C13.3723 2.51613 9.93548 5.95292 9.93548 10.1774Z" fill="white"/>
                                                </svg>
                                          </span>
                                    </Nav.Link>
                              </Nav>
                        </Navbar>
                        <Navbar>
                              <Nav className="nav-links">
                                    <Nav.Link href="#" className='active-link'>الرئيسيه</Nav.Link>
                                    <Nav.Link href="#">من نحن</Nav.Link>
                                    <Nav.Link href="#">الخدمات</Nav.Link>
                                    <Nav.Link href="#">الفعاليات</Nav.Link>
                                    <Nav.Link href="#">الكورسات</Nav.Link>
                                    <Nav.Link href="#">الندوات</Nav.Link>
                                    <Nav.Link href="#">الورشات</Nav.Link>
                                    <Nav.Link href="#">الأخبار</Nav.Link>
                                    <Nav.Link href="#">الأبحاث</Nav.Link>
                                    <Nav.Link href="#">فريق العمل</Nav.Link>
                                    <Nav.Link href="#">العضويه</Nav.Link>
                                    <Nav.Link href="#">اتصل بنا</Nav.Link>
                              </Nav>
                        </Navbar>
                  </Container>
                  
                  {/* Responsive Navbar */}
                  <Container className="navbar__link-res">
                        <Navbar collapseOnSelect expand="lg">
                              <Navbar.Brand href="#home">
                                    <img src={Logo} alt=''/>
                              </Navbar.Brand>
                              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                              <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="me-auto nav-links-res">
                                          <Nav.Link href="#" className='active-link'>الرئيسيه</Nav.Link>
                                          <Nav.Link href="#">من نحن</Nav.Link>
                                          <Nav.Link href="#">الخدمات</Nav.Link>
                                          <Nav.Link href="#">الفعاليات</Nav.Link>
                                          <Nav.Link href="#">الكورسات</Nav.Link>
                                          <Nav.Link href="#">الندوات</Nav.Link>
                                          <Nav.Link href="#">الورشات</Nav.Link>
                                          <Nav.Link href="#">الأخبار</Nav.Link>
                                          <Nav.Link href="#">الأبحاث</Nav.Link>
                                          <Nav.Link href="#">فريق العمل</Nav.Link>
                                          <Nav.Link href="#">العضويه</Nav.Link>
                                          <Nav.Link href="#">اتصل بنا</Nav.Link>
                                    </Nav>
                              </Navbar.Collapse>
                        </Navbar>
                  </Container>
            </>
      )
}

export default MyNavbar;