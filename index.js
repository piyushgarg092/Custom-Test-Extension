var audioA = false;

// Check for internet stability
let internetStable = navigator.onLine;
// Check for audio
navigator.mediaDevices.getUserMedia({ audio: true})
     .then(function(stream) {
    let tracks = stream.getTracks();
    if (tracks.length === 0) {
        audioA = false
    } else {
        audioA = true;
        
    }
  })
    .catch(function (error) {
        if (error.name == "NotFoundError") {
            console.log("Audio and Video not found")
        }
        else if (error.name === "NotReadableError" || error.name === "TrackStartError") {
            console.log("Audio or Camera is already in use.")
        } 
        else if (error.name === "SecurityError" || error.name === "PermissionDeniedError") {
            console.log("Permission for Audio or Camera was denied.")
        } 
        else {
            console.log("Error: " + error.name);
        }
    })
// Check for camera
navigator.mediaDevices.getUserMedia({ video: true})
     .then(function(stream) {
    let tracks = stream.getTracks();
    if (tracks.length === 0) {
        chrome.runtime.sendMessage({
            video: false,
            internet: internetStable
        });
    } else {
        chrome.runtime.sendMessage({
            video: true,
            audio:audioA,
            internet: internetStable
        });
        
    }
  })
    .catch(function (error) {
        if (error.name == "NotFoundError") {
            console.log("Audio and Video not found")
        }
        else if (error.name === "NotReadableError" || error.name === "TrackStartError") {
            console.log("Audio or Camera is already in use.")
        } 
        else if (error.name === "SecurityError" || error.name === "PermissionDeniedError") {
            console.log("Permission for Audio or Camera was denied.")
        } 
        else {
            console.log("Error: " + error.name);
        }
    })


