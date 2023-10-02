import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Player,ControlBar } from 'video-react';
import disneyLogo from './assets/images/Disney.png'
import Unlimited from './assets/images/Unlimited.png'
import connectLogo from './assets/images/connect.png'
import tagLogo from './assets/images/tag.png'
import filmLogo from './assets/images/film.png'
import Edison from './assets/images/edison.webp'
import QR from './assets/images/QR.png'
import ReplayIcon from '@mui/icons-material/Replay';
import {
  Stack,
  Typography,
  Container,
  Button,
  ButtonGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Zoom,
  Grow,
  Fade,
  Box,
  Divider,
} from '@mui/material';
import { 
  grey,
  red,
} from '@mui/material/colors';
import { 
  styled, 
  ThemeProvider
} from '@mui/material/styles';
import theme from './theme.js'
import {VIDEOS} from './media.js'
import { IMAGES } from './media.js';

import VideoComponent from './components/VideoComponent'
import ReloadButton from './components/ReloadButton'
import AssistantMenu from './components/AssistantMenu'
import DetailsMenu from './components/DetailsMenu'
import PlanSelection from './components/PlanSelection'
import DetailPlanSelection from './components/DetailPlanSelection'


function App() {
  const [ renderMenu, setRenderMenu] = useState(false);
  const [ renderVideo, setRenderVideo] = useState(0)
  const [PlanSel, setPlanSel] = useState(false)

  // useEffect(() => {
  //   const loadImage = image => {
  //     return new Promise((resolve, reject) => {
  //       const loadImg = document.createElement('video')
  //       console.log(loadImage)
  //       loadImg.src = image.url
  //       // wait 2 seconds to simulate loading time
  //       loadImg.onload = () =>
  //         setTimeout(() => {
  //           resolve(image.url)
  //         }, 1000)

  //       loadImg.onerror = err => reject(err)
  //     })
  //   }

  //   Promise.all(VIDEOS.map(image => loadImage(image)))
  //     .then(() => setImgsLoaded(true))
  //     .catch(err => console.log("Failed to load images", err))
  // }, [])

  return (
    <ThemeProvider theme={theme}>
      <div className="App" >
        <header className="App-header">
          {renderMenu ? <VideoComponent renderVid={renderMenu} renderPage={(video)=>{setRenderVideo(video)}}  planSelected={PlanSel} renderPageNum={renderVideo} videoChange={(menu)=>{setRenderMenu(menu)}}/> : null}
          {renderVideo == 0 && <AssistantMenu render={renderMenu} renderPage={(video)=>{setRenderVideo(video)}} assistantSelected={(render)=>{setRenderMenu(render)}} /> }
          {renderVideo == 1 && <DetailsMenu renderPage={(video)=>{setRenderVideo(video)}} renderPageNum={renderVideo} planSelected={(selected)=>{setPlanSel(selected)}}/> }
          {renderVideo == 2  && <PlanSelection renderPage={(video)=>{setRenderVideo(video)}} render={renderMenu}/> }
          {renderVideo == 3  && <DetailPlanSelection renderPage={(video)=>{setRenderVideo(video)}} render={renderMenu}/> }
          <ReloadButton/>
        </header>
      </div>
    </ThemeProvider>
  );
};

const AssistantMenu = (props) =>{
  const AssistantCntr = styled(Container)(({ theme }) => ({
    // width: '90.833vw',
    // height: '90vh',
    color: theme.palette.getContrastText(grey[50]),
    borderRadius: '25px',
  }));

  function btnClicked() {
    props.renderPage(1)
    props.assistantSelected(true);
  }

  return(
    //TODO Fix in and out TransitionDelay
    <Zoom in={!props.render} mountOnEnter unmountOnExit style={{transitionDelay: !props.render ? '500ms' : '500ms' }}>
      <AssistantCntr className="assistCntr" >
        <Typography variant="h1"  className="assistTxt">
          Please select an assistant
        </Typography>

        <div className="assistSubCntr">
          <div className="assistSubCntrSm" onClick={btnClicked}>
            <Typography className="assistTxtT" variant="h1" >
              Thomas
            </Typography>
            <Box
              sx={{
                // height: 'auto',
                // width: 'auto',
                maxHeight: { xs: 441.5, md: 441.5 },
                maxWidth: { xs: 319.5, md: 319.5},
              }}
              component="img"
              alt="Male assistant image"
              src= {IMAGES[1].url}
            />
          </div>

          <div className="assistSubCntrSm" onClick={btnClicked}>
            <Typography className="assistTxtS" variant="h1">
              Sophia
            </Typography>
            <Box
              component="img"
              sx={{
                // height: 'auto',
                // width: 'auto',
                maxHeight: { xs: 400.5, md:400.5 },
                maxWidth: { xs: 304, md: 304 },
              }}
              alt="Female assistant image"
              src= {IMAGES[0].url}
            />
          </div>
        </div>
      </AssistantCntr>
    </Zoom>
    
  )
};

const VideoComponent = (props) => {
  const [videoUrl, setVideoUrl] = useState(VIDEOS[2].url);
  const [skip1, setSkip1] = useState(1)
  const [skip2, setSkip2] = useState(false)
  const [skip3, setSkip3] = useState(1)
  const [loop, setLoop] = useState(false);

  useEffect(() => {
    document.getElementById('vid').addEventListener('ended',videoSwitcher,false);
  })
  console.log(props.renderPageNum)
  // setTimeout(() => {
  //   props.videoChange(true)
  //   console.log('running every 5 secs')
  // }, 1000);
  function videoSwitcher(e) {
    //Only happens if video has reached an end. 
    console.log("Video ended. Switching to idle animation.")
    props.videoChange(true)
    if (props.renderPageNum == 1){
      //Idle Animation
      console.log('switched to idle anim')
      setVideoUrl(VIDEOS[0].url)
    }else if(props.renderPageNum == 2){
      console.log('switched to idle anim for second anim')
      setVideoUrl(VIDEOS[0].url)
      //skip future placement of the same video......
      setSkip2(true);
    }else if(props.renderPageNum == 3){
      console.log('switched to idle anim for third anim')
      setVideoUrl(VIDEOS[1].url)
    }
    setLoop(true)
  }

  if (props.renderPageNum==2 && loop && !skip2){
    console.log('final video')
    setLoop(false)
    setVideoUrl(VIDEOS[3].url)
  }else if(props.renderPageNum==2 && props.planSelected && skip1==2){
    setVideoUrl(VIDEOS[3].url)
    setSkip1(3)
  }else if (props.renderPageNum==1 && !props.planSelected && skip1 < 2){
    console.log('set skip1 to 2')
    setSkip1(2);
  }else if (props.renderPageNum==3 && skip3 < 2){
    setSkip3(2);
    setVideoUrl(VIDEOS[4].url)
    setLoop(false)
  }


  function Clip({ url }) {
    return (
      <video key={url} id='vid' width='100%' height='auto' preload="auto" autoPlay loop={loop}>
        <source src={url} type="video/mp4"/>
      </video>
    );
  }

  return(
    <Clip url={videoUrl}>
    </Clip>
  );
};

const DetailsMenu = (props) => {

  const CustomCircBtn = styled(Button)(({ theme }) => ({
    width: '11.48vw',
    height: '1.51vh',
    // position: 'relative',
    color: theme.palette.getContrastText(grey[50]),
    backgroundColor: grey[50],
    borderRadius: '50px',
    '&:hover': {
      backgroundColor: red[500],
    },
  }));

  const CustomCrclCntr = styled(Container)(({ theme }) => ({
    width: '25.41vw',
    height: '25.41vw',
    padding: '30px',
    color: theme.palette.getContrastText(grey[50]),
    borderRadius: '100%',
    '&:hover': {
      backgroundColor: grey[300],
    },
  }));

  function optionSelected(){
    props.planSelected(true)
    props.renderPage(2)
  };

  return(
    <Fade in={props.renderPageNum==1} mountOnEnter unmountOnExit style={{ transitionDelay: props.renderPageNum==1 ? '4000ms' : '0ms' }} >
      <Stack className="contentOptions" spacing={5} direction="row">

      <CustomCrclCntr className="circleContainer">
        <img
            className='detailsLogo'
            src={connectLogo}
            srcSet={connectLogo}
            alt={'film logo'}
            loading="lazy"
        />
        <Typography variant="h1" className="circleBldTxt">
          Verizon’s 5G<br/>
          network
        </Typography>
        <Typography variant="body1" className="circleTxt">
          Seize every day with high<br/>
          speeds and great coverage<br/>
          on our 5G network.<br/>
          UFull terms<br/>
        </Typography>
          <CustomCircBtn 
            className="circleBtn" 
            value = {1}
            onClick={optionSelected}
          >
            <Typography variant="h4">
              Learn more
            </Typography>
          </CustomCircBtn>
      </CustomCrclCntr>

      <CustomCrclCntr className="circleContainer">
        <img
            className='detailsLogo'
            src={tagLogo}
            srcSet={tagLogo}
            alt={'film logo'}
            loading="lazy"
        />
        <Typography variant="h1" className="circleBldTxt">
          No contract <br/>
          plans starting at <br/>
          just $30 a month
        </Typography>
        <Typography variant="body1" className="circleTxt">
          Save on the data you crave<br/>
          and stay connected.<br/>
        </Typography>
          <CustomCircBtn 
            className="circleBtn" 
            value = {1}
            onClick={optionSelected}
          >
            <Typography variant="h4">
              Shop plans
            </Typography>
          </CustomCircBtn>
      </CustomCrclCntr>

      <CustomCrclCntr className="circleContainer">
        <img
            className='detailsLogo'
            src={filmLogo}
            srcSet={filmLogo}
            alt={'film logo'}
            loading="lazy"
        />
        <Typography variant="h1" className="circleBldTxt">
          Disney + Premium <br/>
          [No Ads]
        </Typography>
        <Typography variant="body1" className="circleTxt">
          Total by Verizon customers<br/>
          can get exclusive access to<br/>
          offers like Disney+ included<br/>
          with select plans. Full terms.
        </Typography>
        <CustomCircBtn 
          className="circleBtn" 
          value = {1}
          onClick={optionSelected}
        >
          <Typography variant="h4">
            Learn More
          </Typography>
        </CustomCircBtn>
      </CustomCrclCntr>

      </Stack>
    </Fade>
  )
};

//Menu for selecting plan and getting QR code
const PlanSelection = (props) => {
  const [price, setPrice] = useState([30,40,50,60]);
  const [hiWorld, setHiWorld] = useState('helloworld');
  const [lineMenu, setLineMenu] = useState(true);
  const [highlightedPlan, setHiglightedPlan] = useState(false);
  const [ btnSelected, setBtnSelected ] = useState(1);

  const CustomCntrBtn = styled(Button)(({ theme }) => ({
    width: '19.166vw',
    position: 'absolute',
    bottom: '15px',
    color: theme.palette.getContrastText(grey[50]),
    backgroundColor: grey[50],
    borderRadius: '50px',
    '&:hover': {
      backgroundColor: red[500],
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
    // color: theme.palette.getContrastText(grey[50]),
    backgroundColor: grey[50],
    variant: 'outlined',
    borderRadius: '50px',
    // '&:hover': {
    //   backgroundColor: grey[900],
    // },
    // "&:active": {
    //   backgroundColor: "black"
    // },
  }));

  const CustomCntr = styled(Container)(({ theme }) => ({
    width: '90.833vw',
    color: theme.palette.getContrastText(grey[50]),
    borderRadius: '25px',
  }));

  const SingleCntr = styled(Container)(({ theme }) => ({
    width: '39.398vw',
    height: '54.244vh',
    color: theme.palette.getContrastText(grey[50]),
    borderRadius: '25px',
  }));

  function planSelected(){
    setHiglightedPlan(true);
    props.renderPage(3)
  };

// *********************************************************************************
  function changePrice(e){
    let newPrice = [...price];
    if(e.currentTarget.value == 1){
      setBtnSelected(1);
      newPrice = [30,40,50,60];
      setPrice(newPrice);
      // setVideoUrl('./assets/videos/Vid1.mp4')
    }else if(e.currentTarget.value == 2){
      setBtnSelected(2);
      newPrice = [30,37.50,42.50,47.50];
      setPrice(newPrice);
      // setVideoUrl('./assets/videos/Vid2.mp4')
    }else if(e.currentTarget.value == 3){
      setBtnSelected(3);
      newPrice = [30,36.67,40,43.33];
      setPrice(newPrice);
      // setVideoUrl('./assets/videos/Vid3.mp4')
    }else if(e.currentTarget.value == 4){
      setBtnSelected(4);
      newPrice = [30,36.25,37.50,41.25];
      setPrice(newPrice);
      // setVideoUrl('./assets/videos/Vid4.mp4')
    }else if(e.currentTarget.value == 5){
      setBtnSelected(5);
      newPrice = [30,36,37,40];
      setPrice(newPrice);
      // setVideoUrl('./assets/videos/Vid5.mp4')
    };
  }

  return(
    <>
    {
      highlightedPlan? 
        <>
        <Fade in={props.render} mountOnEnter unmountOnExit style={{ transitionDelay: props.render ? '1500ms' : '0ms' }}>
          <SingleCntr className="singleCntr">
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

            <Typography variant="h2">
              How many lines do you need?
            </Typography>
            <Stack className="BtnCntrDtls" spacing={1} direction="row">

            <ButtonGroup aria-label="outlined primary button group">
                <CustomBtn 
                  className={btnSelected == 1 ? "btnSmClkd" : "btnSm"} 
                  value = {1}
                  onClick={changePrice}
                  // color={btnSelected === 1 ? "secondary" : "primary"} 
                >
                  <Typography variant="h2"  className={btnSelected == 1 ? "btnTxtClkd" : null}>
                    1
                  </Typography>
                </CustomBtn>

                <CustomBtn 
                  className={btnSelected == 2 ? "btnSmClkd" : "btnSm"} 
                  value = {2}
                  onClick={changePrice}
                  // color={btnSelected == 2 ? "secondary" : "secondary"} 
                >
                <Typography variant="h2" className={btnSelected == 2 ? "btnTxtClkd" : null}>
                    2
                  </Typography>
                </CustomBtn>

                <CustomBtn 
                  className={btnSelected == 3 ? "btnSmClkd" : "btnSm"} 
                  value = {3}
                  onClick={changePrice}
                >
                  <Typography variant="h2" className={btnSelected == 3 ? "btnTxtClkd" : null} >
                    3
                  </Typography>
                </CustomBtn>

                <CustomBtn 
                  className={btnSelected == 4 ? "btnSmClkd" : "btnSm"} 
                  value = {4}
                  onClick={changePrice}
                >
                  <Typography variant="h2" className={btnSelected == 4 ? "btnTxtClkd" : null}>
                    4
                  </Typography>
                </CustomBtn>

                <CustomBtn 
                  className={btnSelected == 5 ? "btnSmClkd" : "btnSm"} 
                  value = {5}
                  onClick={changePrice}
                >
                  <Typography variant="h2" className={btnSelected == 5 ? "btnTxtClkd" : null}>
                    5
                  </Typography>
                </CustomBtn>
              </ButtonGroup>
            </Stack>
            <div>
              <Typography variant="h3">
                Total for {btnSelected} line{btnSelected == 1?null:"s"}
              </Typography>
              <Typography variant="h3">
                ${price[3]*btnSelected}/mo
              </Typography>
              <Typography variant="h5">
                5% off with Auto-Refill
              </Typography>
            </div>
            <Divider variant="middle" component="div" role="presentation"/>
            <Typography variant="h3">
              Price Breakdown (per month)
            </Typography>
            <div>
                <Typography variant="body1">
                  line 1
                </Typography>

                <Typography variant="body1">
                  $60
                </Typography>
            </div>
            <div>
              <Typography variant="body1">
                line 2
              </Typography>

              <Typography variant="body1">
                +$35
              </Typography>

              <Typography variant="body1">
                save $25
              </Typography>
              <Box
                sx={{
                  // height: 'auto',
                  // width: 'auto',
                  maxHeight: { xs: 441.5, md: 441.5 },
                  maxWidth: { xs: 319.5, md: 319.5},
                }}
                component="img"
                alt="QR Code"
                src= {QR}
              />
            </div>
            {/* Picture of QR code */}
            <Divider variant="middle" />
            <div>
              <Typography variant="body1">
                Unlimited talk, text & data<br/>
                20 GB hotspot ≈<br/>
                Unlimited talk & text to 69 countries<br/>
                Verizon’s 5G network<br/>
                5G Ultra Wideband access included<br/>
                No-contract monthly plan<br/>
                Disney Premium (No Ads) Included<br/>
              </Typography>

              <Typography variant="body1">
                Please read Disney+ Offer Terms
              </Typography>

              <Typography variant="body1">
                See additional details
              </Typography>

              <Typography variant="body1">
                International Roaming is available for customers who purchase 2+ lines <br/>
                with the $40, $50, and $60 plans. Benefits does not include Multiline <br/>
                Purchase of the $30 plans.
              </Typography>
            </div>
          </SingleCntr>
        </Fade>
        </>
      :
        <>
        <Fade in={props.render} mountOnEnter unmountOnExit style={{ transitionDelay: props.render ? '3000ms' : '0ms' }} >
          <CustomCntr className="container">
            <Typography variant="h2">
              How many lines do you need?
            </Typography>
            <Stack className="content" spacing={3} direction="row">
              <CustomBtn 
                className={btnSelected == 1 ? "btnClkd" : "btn"}
                value = {1}
                onClick={changePrice}
              >
                <Typography variant="h2" className={btnSelected == 1 ? "btnTxtClkd" : null}>
                  1
                </Typography>
              </CustomBtn>

              <CustomBtn 
                className={btnSelected == 2 ? "btnClkd" : "btn"}
                value = {2}
                onClick={changePrice}
              >
              <Typography variant="h2" className={btnSelected == 2 ? "btnTxtClkd" : null}>
                  2
                </Typography>
              </CustomBtn>

              <CustomBtn 
                className={btnSelected == 3 ? "btnClkd" : "btn"}
                value = {3}
                onClick={changePrice}
              >
                <Typography variant="h2" className={btnSelected == 3 ? "btnTxtClkd" : null}>
                  3
                </Typography>
              </CustomBtn>

              <CustomBtn 
                className={btnSelected == 4 ? "btnClkd" : "btn"}
                value = {4}
                onClick={changePrice}
              >
                <Typography variant="h2" className={btnSelected == 4 ? "btnTxtClkd" : null}>
                  4
                </Typography>
              </CustomBtn>

              <CustomBtn 
                className={btnSelected == 5 ? "btnClkd" : "btn"}
                value = {5}
                onClick={changePrice}
              >
                <Typography variant="h2" className={btnSelected == 5 ? "btnTxtClkd" : null}>
                  5
                </Typography>
              </CustomBtn>
            </Stack>
          </CustomCntr>
        </Fade>

        <Fade in={props.render} mountOnEnter unmountOnExit style={{ transitionDelay: props.render ? '3000ms' : '0ms' }} >
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
                onClick={planSelected}
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
                onClick={planSelected}
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
                onClick={planSelected}
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
                onClick={planSelected}
              >
                <Typography variant="h4">
                  See plan details
                </Typography>
              </CustomCntrBtn>
          </CustomSmCntr>

          </Stack>
        </Fade>
        </>
    }
    </>
  );
};

// //Menu for selecting plan and getting QR code
// const DetailPlanSelection = (props) => {

//   const SingleCntr = styled(Container)(({ theme }) => ({
//     width: '39.398vw',
//     height: '54.244vh',
//     color: theme.palette.getContrastText(grey[50]),
//     borderRadius: '25px',
//   }));

//   return(
//     <>
//       <Fade in={props.render} mountOnEnter unmountOnExit style={{ transitionDelay: props.render ? '2000ms' : '0ms' }}>
//         <SingleCntr className="singleCntr">
//           <div className='testImg'>
//           <img
//               className='testImg'
//               src={Unlimited}
//               srcSet={Unlimited}
//               alt={'disney logo'}
//               loading="lazy"
//             />
//           </div>
//         </SingleCntr>
//       </Fade>
//     </>
//   );
// };


export default App;
