import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

const Room = () => {

  const { roomId } = useParams();

  const myMeeting = async(element) => {
    const appID = 1232015303;
      const serverSecret = "99172c256f453265735a1ebb685287bd";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID, 
        serverSecret, 
        roomId,
        Date.now().toString(),
        'HDS')

        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
          container: element,
          sharedLinks: [
            {
              name: 'Copy Link',
              url: `http://localhost:5173/${roomId}`
            }
          ],
          scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall,
          },
          showScreenSharingButton: true,
        });

  }
  return (
   <div style={{ height: '100vh' }}>
    <div ref={myMeeting} style={{ width: '100%', height: '100%' }}></div>

   </div>
  )
}

export default Room