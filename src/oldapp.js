import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Player,ControlBar } from 'video-react';
import disneyLogo from './assets/images/Disney.png'

import {
  Stack,
  Typography,
  Container,
  Button,
  Slide
} from '@mui/material';

import { 
  grey,
  purple,
} from '@mui/material/colors';

import { 
  styled, 
  ThemeProvider
} from '@mui/material/styles';

import theme from './theme.js'

function App() {
  const [videoUrl, setVideoUrl] = useState('./assets/videos/Vid1.mp4');
  const [videoNum, setVideoNum] = useState(0)
  const [loop, setLoop] = useState(false);
  const [lineMenu, setLineMenu] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <div className="App" >
        <header className="App-header">

          <VideoComponent/>

          {/* <Slide direction="up" in={lineMenu} mountOnEnter unmountOnExit> */}
            <FirstBarComponent/>
          {/* </Slide> */}

        </header>
      </div>
    </ThemeProvider>
  );
}

const VideoComponent = (props) => {
  console.log(props)
  const [videoUrl, setVideoUrl] = useState('./assets/videos/Vid1.mp4');
  const [videoNum, setVideoNum] = useState(0)
  const [loop, setLoop] = useState(false);



  useEffect(() => {
    document.getElementById('vid').addEventListener('ended',videoSwitcher,false);
  })

  function videoSwitcher(e) {
    setLineMenu(true)
    if (videoNum == 0){
      //Idle Animation
      setVideoUrl('./assets/videos/Vid3.mp4')
      setLoop(true)
    }else if(videoNum = 1){
      setVideoUrl('./assets/videos/Vid3.mp4')
    }
  }
  
  function Clip({ url }) {
    return (
      <video key={url} id='vid' width='100%' height='auto' autoPlay muted loop={loop}>
        <source src={url} type="video/mp4"/>
      </video>
    );
  }

  return(
    <Clip url={videoUrl}>
    </Clip>
  );
};


const FirstBarComponent = () => {
  const [price, setPrice] = useState([30,40,50,60]);
  const [hiWorld, setHiWorld] = useState('helloworld');
  const [lineMenu, setLineMenu] = useState(true);

  const CustomCntrBtn = styled(Button)(({ theme }) => ({
    width: '19.166vw',
    position: 'absolute',
    bottom: '15px',
    color: theme.palette.getContrastText(grey[50]),
    backgroundColor: grey[50],
    borderRadius: '50px',
    '&:hover': {
      backgroundColor: purple[50],
    },
  }));

  const CustomSmCntr = styled(Container)(({ theme }) => ({
    width: '21.851vw',
    padding: '30px',
    color: theme.palette.getContrastText(grey[50]),
    borderRadius: '25px',
    '&:hover': {
      backgroundColor: grey[300],
    },
  }));

  const CustomBtn = styled(Button)(({ theme }) => ({
    width: '13.259vw',
    color: theme.palette.getContrastText(grey[50]),
    backgroundColor: grey[50],
    borderRadius: '50px',
    '&:hover': {
      backgroundColor: grey[900],
    },
  }));

  const CustomCntr = styled(Container)(({ theme }) => ({
    width: '90.833vw',
    color: theme.palette.getContrastText(grey[50]),
    borderRadius: '25px',
  }));
// *********************************************************************************
  function changeVideo(e){
    let newPrice = [...price];
    if(e.currentTarget.value == 1){
      newPrice = [30,40,50,60];
      setPrice(newPrice);
      // setVideoUrl('./assets/videos/Vid1.mp4')
    }else if(e.currentTarget.value == 2){
      newPrice = [40,50,60,70];
      setPrice(newPrice);
      // setVideoUrl('./assets/videos/Vid2.mp4')
    }else if(e.currentTarget.value == 3){
      newPrice = [50,60,70,80];
      setPrice(newPrice);
      // setVideoUrl('./assets/videos/Vid3.mp4')
    }else if(e.currentTarget.value == 4){
      newPrice = [60,70,80,90];
      setPrice(newPrice);
      // setVideoUrl('./assets/videos/Vid4.mp4')
    }else if(e.currentTarget.value == 5){
      newPrice = [70,80,90,100];
      setPrice(newPrice);
      // setVideoUrl('./assets/videos/Vid5.mp4')
    }
  }

  return(
    <>
    <Slide direction="up" in={lineMenu} mountOnEnter unmountOnExit>
      <CustomCntr className="container" >
        <Typography variant="h2">
          How many lines do you need? {hiWorld}
        </Typography>
        <Stack className="content" spacing={3} direction="row">
          <CustomBtn 
            className="btn" 
            value = {1}
            onClick={changeVideo}
          >
            <Typography variant="h2">
              1
            </Typography>
          </CustomBtn>

          <CustomBtn 
            className="btn" 
            value = {2}
            onClick={changeVideo}
          >
          <Typography variant="h2">
              2
            </Typography>
          </CustomBtn>

          <CustomBtn 
            className="btn" 
            value = {3}
            onClick={changeVideo}
          >
            <Typography variant="h2">
              3
            </Typography>
          </CustomBtn>

          <CustomBtn 
            className="btn" 
            value = {4}
            onClick={changeVideo}
          >
            <Typography variant="h2">
              4
            </Typography>
          </CustomBtn>

          <CustomBtn 
            className="btn" 
            value = {5}
            onClick={changeVideo}
          >
            <Typography variant="h2">
              5
            </Typography>
          </CustomBtn>
        </Stack>
      </CustomCntr>
    </Slide>

    <Slide direction="up" in={lineMenu} mountOnEnter unmountOnExit>
      <Stack className="content" spacing={1.5} direction="row">

      <CustomSmCntr className="smContainer">
        <Typography variant="h1">
          5 GB Plan
        </Typography>
        <Typography variant="h3">
          ${price[0]}/line per month
        </Typography>
        <Typography variant="h5">
          5% off with Auto-Refill
        </Typography>
        <Typography variant="body1">
          Unlimited talk & text<br/>
          5 GB data at high-speed data, then 2G<br/>
          Hotspot enabled up to 5GB ≈<br/>
          Unlimited talk & text to Canada & Mexico<br/>
          Verizon’s 5G network<br/>
          No-contract monthly plan<br/>
        </Typography>
          <CustomCntrBtn 
            className="cntrBtn" 
            value = {1}
            // onClick={changeVideo}
          >
            <Typography variant="h4">
              See plan details
            </Typography>
          </CustomCntrBtn>
      </CustomSmCntr>

      <CustomSmCntr className="smContainer">
        <Typography variant="h1">
          15 GB Plan
        </Typography>
        <Typography variant="h3">
          ${price[1]}/line per month
        </Typography>
        <Typography variant="h5">
          5% off with Auto-Refill
        </Typography>
        <Typography variant="body1">
          Unlimited talk & text<br/>
          15 GB data at high-speed data, then 2G<br/>
          Hotspot enabled up to 15GB ≈<br/>
          Unlimited talk & text to Canada & Mexico<br/>
          Verizon’s 5G network<br/>
          No-contract monthly plan<br/>
        </Typography>
          <CustomCntrBtn 
            className="cntrBtn" 
            value = {1}
            // onClick={changeVideo}
          >
            <Typography variant="h4">
              See plan details
            </Typography>
          </CustomCntrBtn>
      </CustomSmCntr>

      <CustomSmCntr className="smContainer">
        <div className='disneyDiv'>
          <img
              className='disneyLogo'
              src={disneyLogo}
              srcSet={disneyLogo}
              alt={'disney logo'}
              loading="lazy"
          />
          <Typography variant="body2">
            6 months promo
          </Typography>
        </div>
        <Typography variant="h1">
          Unlimited
        </Typography>
        <Typography variant="h3">
          ${price[2]}/line per month
        </Typography>
        <Typography variant="h5">
          5% off with Auto-Refill
        </Typography>
        <Typography variant="body1">
          Unlimited talk, text & data<br/>
          10 GB hotspot ≈<br/>
          Unlimited talk & text to 5 countries of choice<br/>
          Verizon’s 5G network<br/>
          No-contract monthly plan<br/>
          Disney Premium (No Ads) included,<br/>
          first 6 months
        </Typography>
          <CustomCntrBtn 
            className="cntrBtn" 
            value = {1}
            // onClick={changeVideo}
          >
            <Typography variant="h4">
              See plan details
            </Typography>
          </CustomCntrBtn>
      </CustomSmCntr>

      <CustomSmCntr className="smContainer">

      <div className='disneyDiv'>
        <img
            className='disneyLogo'
            src={disneyLogo}
            srcSet={disneyLogo}
            alt={'disney logo'}
            loading="lazy"
          />
        </div>
        <Typography variant="h1">
          Unlimited+
        </Typography>
        <Typography variant="h3">
          ${price[3]}/line per month
        </Typography>
        <Typography variant="h5">
          5% off with Auto-Refill
        </Typography>
        <Typography variant="body1">
          Unlimited talk, text & data<br/>
          20 GB hotspot ≈<br/>
          Unlimited talk & text to 69 countries<br/>
          Verizon’s 5G network<br/>
          5G Ultra Wideband access included<br/>
          No-contract monthly plan<br/>
          Disney Premium (No Ads) Included<br/>
        </Typography>
          <CustomCntrBtn 
            className="cntrBtn" 
            value = {1}
            // onClick={changeVideo}
          >
            <Typography variant="h4">
              See plan details
            </Typography>
          </CustomCntrBtn>
      </CustomSmCntr>

      </Stack>
    </Slide>
    </>
  );
};

export default App;
