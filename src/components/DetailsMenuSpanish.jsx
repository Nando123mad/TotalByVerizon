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
            Red 5G de<br />
            Verizon
          </Typography>
          <Typography variant="body1" className="circleTxt">
          Aprovecha cada día con<br />
          altas velocidades y gran<br />
          cobertura en nuestra red 5G.<br />
          Terminos completos.
          </Typography>
          <CustomCircBtn
            className="circleBtn"
            value={1}
            onClick={optionSelected}
          >
            <Typography variant="h4">
              Conoce más
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
            Planes ilimitados<br />
            desde $30 al mes.
          </Typography>
          <Typography variant="body1" className="circleTxt">
            Ahorra en los datos que<br />
            tanto deseas y mantente<br />
            connectado.
          </Typography>
          <CustomCircBtn
            className="circleBtn"
            value={1}
            onClick={optionSelected}
          >
            <Typography variant="h4">
              Comprar plan
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
            [Sin Publicidad]
          </Typography>
          <Typography variant="body1" className="circleTxt">
            Los clientes de Total by Verizon<br />
            pueden obtener acceso exclusivo a<br />
            ofertas como Disney+ incluido con planes selectos. Terminos<br />
            completos.
          </Typography>
          <CustomCircBtn
            className="circleBtn"
            value={1}
            onClick={optionSelected}
          >
            <Typography variant="h4">
              Conoce más
            </Typography>
          </CustomCircBtn>
        </CustomCrclCntr>

      </Stack>
    </Fade>
  )
}