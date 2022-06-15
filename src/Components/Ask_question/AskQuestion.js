import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './AskQuestion.css';
import Student from '../../Img/front-student.png';
import StudentPatern from '../../Img/Object.png';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const AskQuestion = () => {
      useEffect(() => {
            Aos.init({duration : 1000})
      } , []);
      return (
            <div className='ask__question'>
                  <Container>
                        <Row>
                              <Col xs={12} md={6} data-aos="fade-left">
                                    <div className='ask__question-img'>
                                          <div className='ask__question-img-layout'>
                                                <img 
                                                      src={Student}
                                                      alt="student"
                                                      className='student-img'
                                                />
                                                <img 
                                                      src={StudentPatern}
                                                      alt="student"
                                                      className='student-pattern'
                                                />
                                          </div>
                                    </div>
                              </Col>
                              <Col xs={12} md={6} data-aos="fade-right" className="d-flex align-items-center">
                                    <div className='ask__question-content'>
                                          <div className='d-flex'>
                                                <svg width="34" height="55" viewBox="0 0 34 61" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.4576 48C11.8889 48 9 50.9545 9 54.4997C9 57.9611 11.8039 61 15.4576 61C19.1113 61 22 57.9611 22 54.4997C22 50.9545 19.0261 48 15.4576 48Z" fill="#51BFAD"/><path d="M16.3368 0C5.14142 0 0 6.53725 0 10.9496C0 14.1364 2.73658 15.6073 4.97555 15.6073C9.45374 15.6073 7.62944 9.3152 16.088 9.3152C20.2342 9.3152 23.5515 11.113 23.5515 14.8718C23.5515 19.2842 18.9075 21.8172 16.1709 24.1051C13.7658 26.1475 10.6148 29.498 10.6148 36.5253C10.6148 40.7742 11.7759 42 15.1757 42C19.239 42 20.0683 40.2024 20.0683 38.6495C20.0683 34.4007 20.1512 31.9493 24.7124 28.4357C26.9513 26.7198 34 21.1632 34 13.4824C34 5.80154 26.9513 0 16.3368 0Z" fill="#51BFAD"/></svg>
                                                <div className='ask__question-content-title'>
                                                      <h3>أرسل سؤالك للمحاذ</h3>
                                                      <span>يجب عليك التسجيل و حضور الندوة</span>
                                                </div>
                                          </div>
                                          <div class="formfield mt-50" id="firstnamefield">
                                                <input type="text" name="firstname" id="firstname" placeholder="إتـرك سـؤالك" />
                                                <label alt="Ask" for="firstname" >الـسـؤال</label>
                                          </div>
                                          <h6>لابد من حجز الندوة  اولا حتي تتمكن من ترك سؤالك</h6>
                                          <Button className='send-question'>إرســل</Button>
                                    </div>
                              </Col>
                        </Row>
                  </Container>
                  
            </div>
      )
}

export default AskQuestion;