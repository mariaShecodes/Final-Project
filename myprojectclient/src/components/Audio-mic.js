import React, { Component } from 'react'
 
export default class MicRecorder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  startRecording() {
    /* Simple constraints object, for more advanced audio features see

https://addpipe.com/blog/audio-constraints-getusermedia/ */

var constraints = {
    audio: true,
    video: false
} 
/* Disable the record button until we get a success or fail from getUserMedia() */

recordButton.disabled = true;
stopButton.disabled = false;
pauseButton.disabled = false

/* We're using the standard promise based getUserMedia()

https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia */

navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
    console.log("getUserMedia() success, stream created, initializing Recorder.js ..."); 
    /* assign to gumStream for later use */
    gumStream = stream;
    /* use the stream */
    input = audioContext.createMediaStreamSource(stream);
    /* Create the Recorder object and configure to record mono sound (1 channel) Recording 2 channels will double the file size */
    rec = new Recorder(input, {
        numChannels: 1
    }) 
    //start the recording process 
    rec.record()
    console.log("Recording started");
}).catch(function(err) {
    //enable the record button if getUserMedia() fails 
    recordButton.disabled = false;
    stopButton.disabled = true;
    pauseButton.disabled = true
});
}
 
  render() {
    return (
      <div>
        <div id="controls">
            <button id="recordButton" onClick={this.startRecording} >Record</button>
            <button id="pauseButton" disabled>Pause</button>
            <button id="stopButton" disabled>Stop</button>
        </div>
        <h3>Recordings</h3>
        <ol id="recordingsList"></ol>
      </div>
    );
  }
}