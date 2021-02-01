import React, { Component } from 'react';
import './Presentation.css';
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Code,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Quote,
  Slide,
  S,
  Text
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import AzimAlt from './azimalt';
import SunCalc from './suncalc';
import coordinate_map_distances from './coordinate_map_distances';

export default class extends Component {
  render() {
    const blackText = {color: "#000"};
    const fillStyle = {
        backgroundColor: "#e1e1e1",
        padding: "0px"
    };
    const questionFillStyle = {
      backgroundColor: "#908030",
      padding: "50px",
      margin: "0 30px 0 0",
      boxShadow: "rgb(125, 125, 125) -30px -30px 40px",
      color: "#fff"
    };
    const travelFillStyle = {
      backgroundColor: "#8fbcbb",
      padding: "50px",
      margin: "0 30px 0 0",
      boxShadow: "rgb(50, 50, 50) -30px -30px 40px",
      color: "#fff"
    };
    const boxShadowStyle = {
      padding: "50px",
      boxShadow: "rgb(125, 125, 125) -30px -30px 40px",
      color: "#fff"
    };
    const boldFillStyle = {
        fontWeight: 800,
        padding: "20px"
    };
    const theme = createTheme(
      {
        primary: '#FF1F23',
        secondary: '#003758'
      },
      {
        primary: 'Helvetica',
        secondary: {
          name: 'Droid Serif',
          googleFont: true,
          styles: ['400', '700i']
        }
      }
    );
    const images = {
      "fp1": require('./images/horizontal-coordinate-system.png'),
      "fp2": require('./images/horizontal-coordinate-system.png'),
      "wr1": require('./images/wr1.png'),
      "wr2": require('./images/wr2.png'),
      "eiffel": require('./images/eiffel.jpg'),
      "dice": require('./images/gaussian.png')
    };
    return (
      <Deck theme={theme}>
        <Slide className="game-title">
          <Heading size={1}>World Transit</Heading>
          <Text fit className="game-strapline mt-6 mb-20">A game that is extra-ordinary for the youth and teenagers for exploring their predictive skills.</Text>
        </Slide>
        <Slide>
          <Heading size={1}>Game Versions:</Heading>
          <Appear>
            <Fill className="game-versions mt-6">
              <Text className="game-version game-description mb-20">Board Game Version</Text> 
            </Fill>
          </Appear>
          <Appear>
            <Fill className="game-versions mt-6">
              <Text className="game-version game-description mb-20">Web Version</Text>
            </Fill>
          </Appear>
        </Slide>
        <Slide className="game-categories">
          <Appear>
            <Text>
                <Heading size={3}>Game Categories</Heading>
                <Text className="game-description mt-6 mb-20">
                    The board game is a turn-based game that provides the user tokens for every wins. The wins are decided based on solutions provided by the game.
                    If the player has lost all the tokens or he has been isolated, the player cannot play that game anymore.
                    The following are the applications of the game:
                </Text>
                <List className="game-app-list mt-6 mb-20">
                    <ListItem className="game-app-list-item">General Board Games (Educational)</ListItem>
                    <ListItem className="game-app-list-item">Party Games (Educational)</ListItem>
                </List>
            </Text>
          </Appear>
        </Slide>
        <Slide>
            <Heading size={3}>Board Game Events</Heading>
            <Appear>
              <Text>
                <Text fit classname="mt-20 mb-20 game-description">These are some exciting events that happen over the year</Text>
                <Heading size={3} classname="mt-6">Events</Heading>
                <List className="game-locations">
                    <ListItem className="game-location-item mt-4">
                        <Heading size={4}>UK (Board Games)</Heading>
                        <List className="game-event-loc-1">
                            <ListItem><Text className="game-event-left">https://www.ukgamesexpo.co.uk/beginers_guide.php</Text>&nbsp;|&nbsp;<Text className="game-event-right">May/June</Text></ListItem>
                            <ListItem><Text className="game-event-left">http://www.geek-play.com/</Text>&nbsp;|&nbsp;<Text className="game-event-right">On Request</Text></ListItem>
                        </List>
                    </ListItem>
                    <ListItem className="game-location-item mt-4">
                        <Heading size={4}>Canada (Board Games)</Heading>
                        <List className="game-event-loc-2">
                            <ListItem><Text className="game-event-left">https://www.fallcon.com/</Text>&nbsp;|&nbsp;<Text className="game-event-right">September</Text></ListItem>
                            <ListItem><Text className="game-event-left">https://www.calgaryexpo.com/en/attractions/gaming.html</Text>&nbsp;|&nbsp;<Text className="game-event-right">April</Text></ListItem>
                        </List>
                    </ListItem>
                </List>
              </Text>
            </Appear>
        </Slide>
        <Slide className="manufacturing-options">
            <Heading size={3}>Some manufacturing options</Heading>
            {/* <Appear>
              <Text className="game-description game-link">http://www.plasticsforgames.co.uk/</Text>
            </Appear> */}
            <Appear>
              <Text>
                <Text className="game-description">One of the manufacturing option is to buy all the necessary game components including bespoke items manufactured.</Text>
                <Text className="game-description">Packaging and storage is a problem that has to be considered for the multi-vendor market.</Text>
                <Text className="game-description">Another option is to manufacture from a single vendor and cost would be around:</Text>
                <Text className="game-description">In the range of thousand pounds</Text>
              </Text>
            </Appear>
            <Appear>
              <Text>
                <Text className="game-description">This is an excerpt from </Text>
                <Text className="game-description game-link">https://pixygamesuk.blogspot.com/2016/12/board-game-manufacturing-production_4.html</Text>
                <Text className="game-description"><Fill style={fillStyle}><Fill style={boldFillStyle}>Game Art Work (if not doing this yourself)</Fill>
                This can be pricey if you are getting someone to do the artwork for you and all the designs, it can costs anywhere from £5,000-£10,000 for someone to design you a board game. Negotiate hard but understand this is usually their full time job. This could be 20%-30% of your budget.
                </Fill></Text>
              </Text>
            </Appear>
        </Slide>
        <Slide>
          <Heading size={3}>DESIGN CARDS</Heading>
          <Appear>
            <Text>A design card consists of the azimuth-altitude representation and the wind rose diagram of the location</Text>
          </Appear>
        </Slide>
        <Slide>
          <Fill className="blueprints">
            <Fill style={fillStyle}>
              <Appear>
                <Fill style={boxShadowStyle} className="box-shadow-tile">
                  <div className="box-shadow-items">
                    <Image src={images.fp1} />
                  </div>
                  <div className="box-shadow-items">
                      <Image src={images.wr1} />
                  </div>
                </Fill>
              </Appear>
            </Fill>
            <Fill style={fillStyle}>
              <Appear>
                <Fill style={boxShadowStyle} className="box-shadow-tile">
                  <div className="box-shadow-items">
                    <Image src={images.fp2} />
                  </div>
                  <div className="box-shadow-items">
                    <Image src={images.wr2} />
                  </div>
                </Fill>
              </Appear>
            </Fill>
          </Fill>
        </Slide>
        <Slide>
          <Text>From the design cards, the goal is to identify the location</Text>
        </Slide>
        <Slide>
          <Fill style={fillStyle} className="blueprints">
            <Fill style={boxShadowStyle} className="box-shadow-tile">
              <div className="box-shadow-items">
                <Image src={images.fp1} />
              </div>
              <div className="box-shadow-items">
                  <Image src={images.wr1} />
              </div>
            </Fill>
            <Heading size={4} className="mt-4 heading-black">Identify the Location...</Heading>
          </Fill>
        </Slide>
        <Slide>
          <Heading size={3}>QUESTION CARDS</Heading>
          <Appear>
            <Text>A question card asks the player certain questions for which the wins are recorded based on tokens received</Text>
          </Appear>
        </Slide>
        <Slide>
          <Fill className="blueprints">
            <Fill style={questionFillStyle}>
              <Appear>
                <Heading size={5}>100 - 150 Q n A cards (Question Cards)</Heading>
              </Appear>
              <Appear>
                <Fill>
                  <Text className="game-blueprints-text">
                    <S type="bold">Q 20.</S> <br />
                    Identify this building 
                    <Image src={images.eiffel} />
                  </Text>
                </Fill>
              </Appear>
            </Fill>
            <Fill style={questionFillStyle}>
              <Appear>
                <Heading size={5}>100 - 150 Q n A cards (Solution Cards)</Heading>
              </Appear>
              <Appear>
                <Fill>
                  <Text className="game-blueprints-text">
                    <S type="bold">S 20.</S> <br />
                    <S type="bold">The building is Eiffel Tower in Paris, France</S>
                    <Image src={images.eiffel} />
                  </Text>
                </Fill>
              </Appear>
            </Fill>
          </Fill>
        </Slide>
        <Slide>
          <Heading size={3}>TRAVEL CARDS</Heading>
          <Appear>
            <Text>A travel token received by the player will be asked the question of player's choice.</Text>
          </Appear>
        </Slide>
        <Slide className="results">
          <Heading size={3}>RESULTS DRIVEN</Heading>
          <Text>The rolling of a pair of dice is divided among the three cards / tokens as given below:</Text>
          <Image src={images.dice}></Image>
        </Slide>
        <Slide className="results">
          <Heading size={3}>TOKENS</Heading>
          <Text>The points received by the player for each token type are:</Text>
          <List>
            <ListItem>Design Token:    receive reward tokens for every correct answer</ListItem>
            <ListItem>Question Token:  receive reward tokens for every correct answer</ListItem>
            <ListItem>Travel Token:    multiply the tokens which have been spent for travelling for every successive correct answer</ListItem>
          </List>
        </Slide>
        <Slide className="results">
          <Heading size={2}>OPEN FOR DISCUSSION ??</Heading>
        </Slide>
        <Text className="slide_canvas">
          <button onClick={this.Canvas}>Click me!</button>
          <img src="http://localhost:3000/assets/svg/sun.svg" className="img_svg" id="svg" width="30" height="30" />
        </Text>
      </Deck>
    );
  }

  Canvas() {
    let slide = document.querySelector(".slide_canvas");
    let dataURL = {};
    for(var i = 1; i <= 20; i++) {
      let row = coordinate_map_distances['data'][i-1][0];
      let canvas = document.createElement('canvas');
      canvas.width = 300;
      canvas.height = 300;
      canvas.id = "canvas" + i.toString();
      if (canvas != null) {
        let ctx = canvas.getContext("2d");
        let date = new Date();
        AzimAlt.drawDesignTile(ctx,row.Latitude,row.Longitude, date.getTime());
      }
      slide.appendChild(canvas);
      dataURL[i.toString()] = canvas.toDataURL();
    }
    fetch('http://127.0.0.1:5000/azimuth_altitude_write', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'omit', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(dataURL) // body data type must match "Content-Type" header
      }).then(res => res.json())
        .then(
          (result) => {
            console.log(result);
          },
          (error) => {
            console.log(error.toString());
          }
      )
  }
}