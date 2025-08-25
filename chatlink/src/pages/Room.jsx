import React, { useEffect, useRef } from "react";
// Import Zego UIKit Prebuilt for video conferencing
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

// Functional component for the video conference room
const Room = () => {
  // Reference to the DOM element where Zego video UI will be mounted
  const meetingRef = useRef(null);

  useEffect(() => {
    // Read ZegoCloud App ID & Server Secret from environment variables
    const appID = Number(import.meta.env.VITE_ZEGO_APP_ID);
    const serverSecret = import.meta.env.VITE_ZEGO_SERVER_SECRET;

    // If credentials are missing, log an error and stop execution
    if (!appID || !serverSecret) {
      console.error("❌ Missing ZegoCloud credentials. Check your .env file.");
      return;
    }

    // ========== ZEGOCLOUD SETUP ==========

    // Room ID - could be dynamic based on URL or user input
    const roomID = "my-room-id";
    // Random user ID
    const userID = String(Math.floor(Math.random() * 10000));
    // Display name for the user
    const userName = "user_" + userID;

    // Generate a temporary Kit Token for testing
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,         // Your App ID
      serverSecret,  // Your Server Secret
      roomID,        // Room ID
      userID,        // User ID
      userName       // User Name
    );

    // Create a Zego instance using the kit token
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    // Join the video conference room
    zp.joinRoom({
      container: meetingRef.current, // Mount UI inside this DOM node
      sharedLinks: [
        {
          name: "Copy Link", // Label for the link
          url: `${window.location.origin}/room/${roomID}`, // Shareable room URL
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference, // Set mode to video conference
      },
    });
  }, []); // Empty dependency array = run only once on mount

  // Container for Zego UIKit - full height and width
  return <div ref={meetingRef} style={{ width: "100%", height: "100vh" }} />;
};

// Export component
export default Room;
