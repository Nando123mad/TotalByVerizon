import {
  Typography,
  Container,
  Zoom,
  Grow,
  Fade,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { grey, red } from '@mui/material/colors';

import { IMAGES } from '../media.js';

export default function AssistantMenu(props) {
  const AssistantCntr = styled(Container)(({ theme }) => ({
    // width: '90.833vw',
    // height: '90vh',
    color: theme.palette.getContrastText(grey[50]),
    borderRadius: '25px',
  }));

  function btnClicked(e) {
    if (e == 1) {
      //male
      console.log('Male Chosen')
      props.assistantGender(true);
    } else if (e == 2) {
      //female
      console.log('Female Chosen')
      props.assistantGender(false);
    }
    props.renderPage(1)
    props.assistantSelected(true);

  }

  return (
    //TODO Fix in and out TransitionDelay
    <Zoom in={!props.render} mountOnEnter unmountOnExit style={{ transitionDelay: !props.render ? '500ms' : '500ms' }}>
      <AssistantCntr className="assistCntr" >
        <Typography variant="h1" className="assistTxt">
          Please select an assistant
        </Typography>

        <div className="assistSubCntr">
          <div className="assistSubCntrSm" onClick={() => btnClicked(1)}>
            <div className="assistTxtTDiv">
              <Typography variant="h1" className="assistTxtT">
                Thomas
              </Typography>
              <Typography variant="h1" >
                English
              </Typography>
            </div>
            <Box
              sx={{
                // height: 'auto',
                // width: 'auto',
                maxHeight: { xs: 441.5, md: 441.5 },
                maxWidth: { xs: 319.5, md: 319.5 },
              }}
              component="img"
              alt="Male assistant image"
              src={IMAGES[1].url}
            />
          </div>

          <div className="assistSubCntrSm" onClick={() => btnClicked(2)}>
            <div className="assistTxtSDiv">
              <Typography className="assistTxtS" variant="h1">
                Sophia
              </Typography>
              <Typography variant="h1" >
                Español
              </Typography>
            </div>
            <Box
              component="img"
              sx={{
                // height: 'auto',
                // width: 'auto',
                maxHeight: { xs: 400.5, md: 400.5 },
                maxWidth: { xs: 304, md: 304 },
              }}
              alt="Female assistant image"
              src={IMAGES[0].url}
            />
          </div>
        </div>
      </AssistantCntr>
    </Zoom>
  )

}