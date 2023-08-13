# Custom Test Extension by Piyush Garg

A chrome extension that works on top of any assessment website, starting when the
user opens a test page. Once the user clicks the &quot;end test&quot; button, the chrome
extension should be disabled and the browser should return to its normal state. The
extension should have basic features such as preventing browser navigation, keeping
the browser window in full mode while the user is taking the test, and disabling the user
from manually closing the browser.

### Features

- [x] Extension should work only in selected URLs(test page) during a certain time/trigger.
- [x] The browser should open in full screen mode.
- [x] Pop up should be shown when someone switches between 2 tabs or Application.
- [x] More than one tab can’t be opened.
- [x] If the number of opened tabs are more than one, test must not start.
- [x] Should do requirement check initially when extension is activated:
a. Audio
b. Camera
c. Internet Stability
- [x] Capture the user related information in local storage.(e.g. IP, requirements check)


# Steps to install the extension

1. Clone the repo using "git clone <repo-url>"
2. Go to your browser and open Manage Extensions
3. Enable the developer mode
4. Click on the "Load Unpacked" button and select the cloned folder
5. Enable the extension called "Test Extenion" and Reload the extension once (optional: Pin the extension on the top bar)

# How to use and Working of the extension (w.r.t features mentioned above)

1. The extension only triggers when we visit the home page of elitmus (https://www.elitmus.com/); (Feature 1)
2. After opening the testpage (elitmus home page), give permissions for audio and video capture and also it detects the internet stability in background. (Feature 6)
3. Try clicking on the extension now to start the test and go full screen mode. (Feature 2)
4. If the number of opened tabs is more than 1 or permission of audio and video capture were denied, the test won't start unfortunately. (Extra Feature)
5. After starting the test, the mouseclick triggers the fullscreen mode on the window, if you try to open multiple tabs in the current window ..... ug oh that's not possible. (Feature 4)
6. If you try switching applications, you'll get an alert "You're out of focus" and if you exceed the warnings by 3 then your test will be terminated. (Feature 3)
7. If you want to submit the test, you can just redirect the page or close the current tab.

# Screenshots 

![image](https://user-images.githubusercontent.com/64231526/214858808-ed51e076-bff9-4788-81f9-03de35d0b7dd.png)
(Feature 7)
You can find it in the devTools console.
How to open it? - Click on the "service worker" option as shown in below image:
  ![image](https://user-images.githubusercontent.com/64231526/214859069-4d66cea0-06e9-46f1-ae41-027f00ce1ea3.png)


# Note
Please change the location of the cloned folder if your browser gets stuck due to the extension.

# Technologies & Tools Used
1. VS Code
2. JSON
3. JavaScript
4. Chrome API for extension dev.

# For queries

Mail: piyushgarg092@gmail.com
Linkedin: https://www.linkedin.com/in/piyushgarg092/



