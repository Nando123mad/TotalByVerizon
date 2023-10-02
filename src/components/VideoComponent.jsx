
import React, { useEffect, useState } from 'react';
import { VIDEOS } from '../media.js'

export default function VideoComponent(props) {
  // const [videoUrlMale, setVideoUrlMale] = useState(
  //   () => {
  //     if(props.assistantGender){
  //       return VIDEOS[2].MaleURL;
  //     }
  //     VIDEOS[2].FemaleURL;
  //   }
  // );
  const [videoUrlMale, setVideoUrlMale] = useState(props.assistantGender ? VIDEOS[2].MaleURL : VIDEOS[2].FemaleURL);
  const [skip1, setSkip1] = useState(1);
  const [skip2, setSkip2] = useState(false);
  const [skip3, setSkip3] = useState(1);
  const [loop, setLoop] = useState(false);

  useEffect(() => {
    document.getElementById('vid').addEventListener('ended', videoSwitcher, false);
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
    if (props.renderPageNum == 1) {
      //Idle Animation
      console.log('switched to idle anim')
      setVideoUrlMale(props.assistantGender ? VIDEOS[0].MaleURL : VIDEOS[0].FemaleURL)
    } else if (props.renderPageNum == 2) {
      console.log('switched to idle anim for second anim')
      setVideoUrlMale(props.assistantGender ? VIDEOS[0].MaleURL : VIDEOS[0].FemaleURL)
      //skip future placement of the same video......
      setSkip2(true);
    } else if (props.renderPageNum == 3) {
      console.log('switched to idle anim for third anim')
      setVideoUrlMale(props.assistantGender ? VIDEOS[1].MaleURL : VIDEOS[1].FemaleURL)
    }
    setLoop(true)
  }

  if (props.renderPageNum == 2 && loop && !skip2) {
    console.log('final video')
    setLoop(false)
    setVideoUrlMale(props.assistantGender ? VIDEOS[3].MaleURL : VIDEOS[3].FemaleURL)
  } else if (props.renderPageNum == 2 && props.planSelected && skip1 == 2) {
    setVideoUrlMale(props.assistantGender ? VIDEOS[3].MaleURL : VIDEOS[3].FemaleURL)
    setSkip1(3)
  } else if (props.renderPageNum == 1 && !props.planSelected && skip1 < 2) {
    console.log('set skip1 to 2')
    setSkip1(2);
  } else if (props.renderPageNum == 3 && skip3 < 2) {
    setSkip3(2);
    setVideoUrlMale(props.assistantGender ? VIDEOS[4].MaleURL : VIDEOS[4].FemaleURL)
    setLoop(false)
  }


  function Clip({ url }) {
    return (
      <video key={url} id='vid' width='100%' height='auto' preload="auto" autoPlay loop={loop}>
        <source src={url} type="video/mp4" />
      </video>
    );
  }

  return (
    <Clip url={videoUrlMale}>
    </Clip>
  );

}