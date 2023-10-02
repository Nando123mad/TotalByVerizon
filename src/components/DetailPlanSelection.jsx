import {
  Fade,
  Container,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { grey, red } from '@mui/material/colors';

import Unlimited from '../assets/images/Unlimited.png'

export default function DetailPlanSelection(props) {
  const SingleCntr = styled(Container)(({ theme }) => ({
    width: '39.398vw',
    height: '54.244vh',
    color: theme.palette.getContrastText(grey[50]),
    borderRadius: '25px',
  }));

  return (
    <>
      <Fade in={props.render} mountOnEnter unmountOnExit style={{ transitionDelay: props.render ? '2000ms' : '0ms' }}>
        <SingleCntr className="singleCntr">
          <div className='testImg'>
            <img
              className='testImg'
              src={Unlimited}
              srcSet={Unlimited}
              alt={'disney logo'}
              loading="lazy"
            />
          </div>
        </SingleCntr>
      </Fade>
    </>
  );
}