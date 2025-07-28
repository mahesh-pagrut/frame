import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import './VideoRoom.css'; // Import the CSS

const VideoRoom = () => {
  let { roomID } = useParams();

  const myMeeting = async (element) => {
    const appID = 168677554;
    const serverSecret = "863b26eb69e55730df2a98dc11dc79a0";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "mahesh pagrut"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'copy link',
          url: `${window.location.origin}/room/${roomID}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  };

  return (
    <div className="video-room-container">
      <div className="video-call-box" ref={myMeeting} />
    </div>
  );
};

export default VideoRoom;
