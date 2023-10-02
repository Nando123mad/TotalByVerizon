import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { grey, red } from '@mui/material/colors';

import ReplayIcon from '@mui/icons-material/Replay';

export default function ReloadButton(props) {
  const CustomBtn = styled(Button)(({ theme }) => ({
    position: 'absolute',
    top: '50px',
    right: '50px',
    minWidth: 'auto',
    padding: '10px',
    width: 'auto',
    color: theme.palette.getContrastText(grey[50]),
    backgroundColor: grey[50],
    borderRadius: '50px',
    '&:hover': {
      backgroundColor: red[500],
    },
  }));

  function Reload() {
    window.location.reload();
  }

  return (
    <CustomBtn
      className="reloadBtn"
      onClick={() => { Reload() }}
    >
      <ReplayIcon />
    </CustomBtn>

  )
}