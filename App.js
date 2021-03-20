import React, {Component} from 'react';
import {Container,Row,Col,Card,Fade} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { CardBody, Jumbotron} from 'reactstrap';
class TravelDiary extends Component {
  render() {
    return (
      <body>
            <CardBody>
              <Card style={{width: '18rem' , marginLeft:50}}>
                <Card.Img variant="flush" src="./images/Katora.jpg" />
                <Card.Body>
                  <Card.Title>Katora Lake</Card.Title>
                  <Card.Text>
                    Katora Lake is an alpine glacial lake located in the upper
                    reaches of Jahaz Banda, Kumrat valley in Upper Dir District
                    of Khyber Pakhtunkhwa the Province of Pakistan. The lake is
                    fed by the surrounding melting glacier waters. The word
                    Katora means "bowl" in Pashto. It was named after the lakes
                    resemblance to a bowl shape.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card style={{width: '18rem', marginLeft: 500, marginTop: -515}}>
                <Card.Img variant="middle" src="./images/parachinar.jpg" />
                <Card.Body>
                  <Card.Title>Parachinar</Card.Title>
                  <Card.Text>
                    Parachinar or Pāṛačinār (Pashto: پاړه چنار‎; Urdu: پاڑه
                    چنار‎) is a small town which is the capital of Kurram
                    District in the province of Khyber Pakhtunkhwa, Pakistan.
                    Parachinar is situated on a neck of Pakistani territory west
                    of Peshawar, that juts into the Logar and Nangarhar
                    provinces of Afghanistan. With a distance of 110 kilometres
                    (68 mi) from the Afghan capital Kabul, Parachinar is the
                    closest point in Pakistan to Kabul. It is one of two urban
                    areas in Kurram District, the other one being Sadda, and has
                    shrank considerably in population over the past few decades,
                    becoming the least populous urbanized area in Kohat
                    Division.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{width: '18rem', marginLeft: 900, marginTop: -850}}>
                <Card.Img variant="top" src="./images/pirchinasi.jpg" />
                <Card.Body>
                  <Card.Title>Pirchinasi</Card.Title>
                  <Card.Text>
                    Pir Chinasi (also spelled as Peer Chinasi) is a shrine and a
                    tourist destination located about 30 kilometers (19 mi) east
                    of Muzaffarabad, the capital city of Azad Kashmir
                    administered by Pakistan.It is located on the top of hills
                    at the height of 2,900 metres (9,500 ft). The mountain peak
                    has gained large fame for its ziyarat of a famous saint,
                    Sayed Hussain Shah Bukhari. This place is also visited by
                    tourists, for the view of Muzaffarabad and rural areas
                    around the hidden city. The area is also famous for
                    paragliding and snow cross jeep rallies.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardBody>
      </body>
    );
  }
}

export default TravelDiary;
