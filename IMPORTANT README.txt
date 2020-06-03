This is George's Solution to the given skills Assessment

As of the submission of this work, all functionality is working fully.

A few important notes to take into account:
-On server start up, I have experienced extreme latency with loading assest from the server
 If you experience this, please give the Assets time to load and try refreshing the page a few times.

-Patch Request goes through with a Status of OK (Status code: 200), however,
 upon reloading the assets, values reset,
 I have assumed this is normal due to the Result I got back from the Request

-Pagination has been included, however due to Patch Requests not being permanent,
 moving between pages resets assets.

-Upon start up, you'll most likely see a PlaceHolder for server assets, this will be replaced when assets load.

-HTML alerts triggr when;
 -Trying to Submit with empty input boxes
 -Trying to move to the previous page of page 1 or next page of page 75
 -If Entered values are negative.
 -If Vacancies exceed total bed count 

To use use Command Line and:
 -cd into file location
 -npm install
 -npm i axios (I used axios within this solution)
 -npm start to host website locally

Thank you for reading. I hope you find the solution supplied adequate.
If you do experience any major problems please do contact me