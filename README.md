Unit Testing in Spotify
========
Simple base for starting to use unit tests inside spotify

### Setup
1. Create the spotify app directory (if you don't have it already)
	* Windows: `My Documents\Spotify`
	* MacOS: `~/Spotify`
	* Linux: `~/Spotify/`

2. Symlink the project directory into the Spotify app directory (The app directory should be all lower case)
	* Windows: `mklink /D My Documents\Spotify\$APPNAME <targetDirectory>`
	* MacOS: `ln -s <targetDirectory> ~/Spotify/$APPNAME`
	* Linux: `ln -s <targetDirectory> ~/Spotify/$APPNAME`

3. Restart Spotify and type in "spotify:app:$APPNAME" in the search field.


### Libraries used
 * [expect.js](https://github.com/LearnBoost/expect.js)
 * [mocha](https://github.com/visionmedia/mocha)

