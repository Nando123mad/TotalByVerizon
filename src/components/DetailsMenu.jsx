import {
  styled,
} from '@mui/material/styles';

import {
  Stack,
  Typography,
  Container,
  Button,
  Fade,
} from '@mui/material';

import {
  grey,
  red,
} from '@mui/material/colors';

import connectLogo from '../assets/images/connect.png'
import tagLogo from '../assets/images/tag.png'
import filmLogo from '../assets/images/film.png'


export default function DetailsMenu(props) {

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

  function optionSelected() {
    props.planSelected(true)
    props.renderPage(2)
  };

  return (
    <Fade in={props.renderPageNum == 1} mountOnEnter unmountOnExit style={{ transitionDelay: props.renderPageNum == 1 ? '4000ms' : '0ms' }} >
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
            Verizon’s 5G<br />
            network
          </Typography>
          <Typography variant="body1" className="circleTxt">
            Seize every day with high<br />
            speeds and great coverage<br />
            on our 5G network.<br />
            UFull terms<br />
          </Typography>
          <CustomCircBtn
            className="circleBtn"
            value={1}
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
            No contract <br />
            plans starting at <br />
            just $30 a month
          </Typography>
          <Typography variant="body1" className="circleTxt">
            Save on the data you crave<br />
            and stay connected.<br />
          </Typography>
          <CustomCircBtn
            className="circleBtn"
            value={1}
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
            Disney + Premium <br />
            [No Ads]
          </Typography>
          <Typography variant="body1" className="circleTxt">
            Total by Verizon customers<br />
            can get exclusive access to<br />
            offers like Disney+ included<br />
            with select plans. Full terms.
          </Typography>
          <CustomCircBtn
            className="circleBtn"
            value={1}
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
}