import './App.css';
import React, { useState } from 'react';

import {
  ThemeProvider
} from '@mui/material/styles';
import theme from './theme.js'

import VideoComponent from './components/VideoComponent'
import ReloadButton from './components/ReloadButton'
import AssistantMenu from './components/AssistantMenu'
import DetailsMenu from './components/DetailsMenu'
import PlanSelection from './components/PlanSelection'
import DetailPlanSelection from './components/DetailPlanSelection'

import DetailsMenuSpanish from './components/DetailsMenuSpanish'
import PlanSelectionSpanish from './components/PlanSelectionSpanish'
import DetailPlanSelectionSpanish from './components/DetailPlanSelectionSpanish'


function App() {
  const [renderMenu, setRenderMenu] = useState(false);
  const [assistantGender, setAssistantGender] = useState(false);
  const [renderVideo, setRenderVideo] = useState(0);
  const [PlanSel, setPlanSel] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <div className="App" >
        <header className="App-header">
          {renderMenu ? <VideoComponent renderVid={renderMenu} assistantGender={assistantGender} renderPage={(video) => { setRenderVideo(video) }} planSelected={PlanSel} renderPageNum={renderVideo} videoChange={(menu) => { setRenderMenu(menu) }} /> : null}
          {renderVideo == 0 && <AssistantMenu render={renderMenu} assistantGender={(gender) => { setAssistantGender(gender) }} renderPage={(video) => { setRenderVideo(video) }} assistantSelected={(render) => { setRenderMenu(render) }} />}
          
          {assistantGender ? 
          <div>
            {renderVideo == 1 && <DetailsMenu renderPage={(video) => { setRenderVideo(video) }} renderPageNum={renderVideo} planSelected={(selected) => { setPlanSel(selected) }} />}
            {renderVideo == 2 && <PlanSelection renderPage={(video) => { setRenderVideo(video) }} render={renderMenu} />}
            {renderVideo == 3 && <DetailPlanSelection renderPage={(video) => { setRenderVideo(video) }} render={renderMenu} />}
          </div>
          : 
          <div>
            {renderVideo == 1 && <DetailsMenuSpanish renderPage={(video) => { setRenderVideo(video) }} renderPageNum={renderVideo} planSelected={(selected) => { setPlanSel(selected) }} />}
            {renderVideo == 2 && <PlanSelectionSpanish renderPage={(video) => { setRenderVideo(video) }} render={renderMenu} />}
            {renderVideo == 3 && <DetailPlanSelectionSpanish renderPage={(video) => { setRenderVideo(video) }} render={renderMenu} />}
          </div>
          }

          <ReloadButton />
        </header>
      </div>
    </ThemeProvider>
  );
};

export default App;
