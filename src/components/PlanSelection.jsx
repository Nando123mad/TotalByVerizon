
import React, { useState } from 'react';

import {
  styled,
} from '@mui/material/styles';

import {
  Stack,
  Typography,
  Container,
  Button,
  ButtonGroup,
  Fade,
  Box,
  Divider,
} from '@mui/material';

import {
  grey,
  red,
} from '@mui/material/colors';

import disneyLogo from '../assets/images/Disney.png'
import QR from '../assets/images/QR.png'

export default function PlanSelection(props) {
  const [price, setPrice] = useState([30, 40, 50, 60]);
  const [hiWorld, setHiWorld] = useState('helloworld');
  const [lineMenu, setLineMenu] = useState(true);
  const [highlightedPlan, setHiglightedPlan] = useState(false);
  const [btnSelected, setBtnSelected] = useState(1);

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
    // width: '90.833vw',
    color: theme.palette.getContrastText(grey[50]),
    borderRadius: '25px',
  }));

  const SingleCntr = styled(Container)(({ theme }) => ({
    width: '39.398vw',
    height: '54.244vh',
    color: theme.palette.getContrastText(grey[50]),
    borderRadius: '25px',
  }));

  function planSelected() {
    setHiglightedPlan(true);
    props.renderPage(3)
  };

  // *********************************************************************************
  function changePrice(e) {
    let newPrice = [...price];
    if (e.currentTarget.value == 1) {
      setBtnSelected(1);
      newPrice = [30, 40, 50, 60];
      setPrice(newPrice);
      // setVideoUrl('./assets/videos/Vid1.mp4')
    } else if (e.currentTarget.value == 2) {
      setBtnSelected(2);
      newPrice = [30, 37.50, 42.50, 47.50];
      setPrice(newPrice);
      // setVideoUrl('./assets/videos/Vid2.mp4')
    } else if (e.currentTarget.value == 3) {
      setBtnSelected(3);
      newPrice = [30, 36.67, 40, 43.33];
      setPrice(newPrice);
      // setVideoUrl('./assets/videos/Vid3.mp4')
    } else if (e.currentTarget.value == 4) {
      setBtnSelected(4);
      newPrice = [30, 36.25, 37.50, 41.25];
      setPrice(newPrice);
      // setVideoUrl('./assets/videos/Vid4.mp4')
    } else if (e.currentTarget.value == 5) {
      setBtnSelected(5);
      newPrice = [30, 36, 37, 40];
      setPrice(newPrice);
      // setVideoUrl('./assets/videos/Vid5.mp4')
    };
  }

  return (
    <>
      {
        highlightedPlan ?
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
                      value={1}
                      onClick={changePrice}
                    // color={btnSelected === 1 ? "secondary" : "primary"} 
                    >
                      <Typography variant="h2" className={btnSelected == 1 ? "btnTxtClkd" : null}>
                        1
                      </Typography>
                    </CustomBtn>

                    <CustomBtn
                      className={btnSelected == 2 ? "btnSmClkd" : "btnSm"}
                      value={2}
                      onClick={changePrice}
                    // color={btnSelected == 2 ? "secondary" : "secondary"} 
                    >
                      <Typography variant="h2" className={btnSelected == 2 ? "btnTxtClkd" : null}>
                        2
                      </Typography>
                    </CustomBtn>

                    <CustomBtn
                      className={btnSelected == 3 ? "btnSmClkd" : "btnSm"}
                      value={3}
                      onClick={changePrice}
                    >
                      <Typography variant="h2" className={btnSelected == 3 ? "btnTxtClkd" : null} >
                        3
                      </Typography>
                    </CustomBtn>

                    <CustomBtn
                      className={btnSelected == 4 ? "btnSmClkd" : "btnSm"}
                      value={4}
                      onClick={changePrice}
                    >
                      <Typography variant="h2" className={btnSelected == 4 ? "btnTxtClkd" : null}>
                        4
                      </Typography>
                    </CustomBtn>

                    <CustomBtn
                      className={btnSelected == 5 ? "btnSmClkd" : "btnSm"}
                      value={5}
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
                    Total for {btnSelected} line{btnSelected == 1 ? null : "s"}
                  </Typography>
                  <Typography variant="h3">
                    ${price[3] * btnSelected}/mo
                  </Typography>
                  <Typography variant="h5">
                    5% off with Auto-Refill
                  </Typography>
                </div>
                <Divider variant="middle" component="div" role="presentation" />
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
                      maxWidth: { xs: 319.5, md: 319.5 },
                    }}
                    component="img"
                    alt="QR Code"
                    src={QR}
                  />
                </div>
                {/* Picture of QR code */}
                <Divider variant="middle" />
                <div>
                  <Typography variant="body1">
                    Unlimited talk, text & data<br />
                    20 GB hotspot ≈<br />
                    Unlimited talk & text to 69 countries<br />
                    Verizon’s 5G network<br />
                    5G Ultra Wideband access included<br />
                    No-contract monthly plan<br />
                    Disney Premium (No Ads) Included<br />
                  </Typography>

                  <Typography variant="body1">
                    Please read Disney+ Offer Terms
                  </Typography>

                  <Typography variant="body1">
                    See additional details
                  </Typography>

                  <Typography variant="body1">
                    International Roaming is available for customers who purchase 2+ lines <br />
                    with the $40, $50, and $60 plans. Benefits does not include Multiline <br />
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
                    value={1}
                    onClick={changePrice}
                  >
                    <Typography variant="h2" className={btnSelected == 1 ? "btnTxtClkd" : null}>
                      1
                    </Typography>
                  </CustomBtn>

                  <CustomBtn
                    className={btnSelected == 2 ? "btnClkd" : "btn"}
                    value={2}
                    onClick={changePrice}
                  >
                    <Typography variant="h2" className={btnSelected == 2 ? "btnTxtClkd" : null}>
                      2
                    </Typography>
                  </CustomBtn>

                  <CustomBtn
                    className={btnSelected == 3 ? "btnClkd" : "btn"}
                    value={3}
                    onClick={changePrice}
                  >
                    <Typography variant="h2" className={btnSelected == 3 ? "btnTxtClkd" : null}>
                      3
                    </Typography>
                  </CustomBtn>

                  <CustomBtn
                    className={btnSelected == 4 ? "btnClkd" : "btn"}
                    value={4}
                    onClick={changePrice}
                  >
                    <Typography variant="h2" className={btnSelected == 4 ? "btnTxtClkd" : null}>
                      4
                    </Typography>
                  </CustomBtn>

                  <CustomBtn
                    className={btnSelected == 5 ? "btnClkd" : "btn"}
                    value={5}
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
                    Unlimited talk & text<br />
                    5 GB data at high-speed data, then 2G<br />
                    Hotspot enabled up to 5GB ≈<br />
                    Unlimited talk & text to Canada & Mexico<br />
                    Verizon’s 5G network<br />
                    No-contract monthly plan<br />
                  </Typography>
                  <CustomCntrBtn
                    className="cntrBtn"
                    value={1}
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
                    Unlimited talk & text<br />
                    15 GB data at high-speed data, then 2G<br />
                    Hotspot enabled up to 15GB ≈<br />
                    Unlimited talk & text to Canada & Mexico<br />
                    Verizon’s 5G network<br />
                    No-contract monthly plan<br />
                  </Typography>
                  <CustomCntrBtn
                    className="cntrBtn"
                    value={1}
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
                    Unlimited talk, text & data<br />
                    10 GB hotspot ≈<br />
                    Unlimited talk & text to 5 countries of choice<br />
                    Verizon’s 5G network<br />
                    No-contract monthly plan<br />
                    Disney Premium (No Ads) included,<br />
                    first 6 months
                  </Typography>
                  <CustomCntrBtn
                    className="cntrBtn"
                    value={1}
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
                    Unlimited talk, text & data<br />
                    20 GB hotspot ≈<br />
                    Unlimited talk & text to 69 countries<br />
                    Verizon’s 5G network<br />
                    5G Ultra Wideband access included<br />
                    No-contract monthly plan<br />
                    Disney Premium (No Ads) Included<br />
                  </Typography>
                  <CustomCntrBtn
                    className="cntrBtn"
                    value={1}
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

}