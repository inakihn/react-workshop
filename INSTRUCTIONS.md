# mimaflow player

The mimaflow player is a simplified player for Spotify songs. It lets the user search for an artist, track or album using the Spotify API and displays the first 20 results. The user has also the possibility to reproduce a 30 seconds preview of each song by clicking on the play button.

## Appearance

This is the mockup of the application that we are going to build:

![mockup](../assets/mimaflow-player.png)

The following list of exercises will guide you through the development of this application.

Enjoy the ride! :bike:

## Exercises

### 00: Setup

1. Create a folder outside this repo and call it `mimaflow-player`.
2. Use the [create-react-app](https://github.com/facebook/create-react-app) to generate the skeleton and the configuration for the app.
3. Install the extra packages by running:

   If you're using `npm`:

   ```shell
   $ npm i --save bootstrap
   $ npm i --save @fortawesome/fontawesome-svg-core
   $ npm i --save @fortawesome/free-solid-svg-icons
   $ npm i --save @fortawesome/react-fontawesome
   $ npm i --save @fortawesome/free-brands-svg-icons
   ```
   If you're using `yarn`:
   ```shell
   $ yarn add bootstrap
   $ yarn add @fortawesome/fontawesome-svg-core
   $ yarn add @fortawesome/free-solid-svg-icons
   $ yarn add @fortawesome/react-fontawesome
   $ yarn add @fortawesome/free-brands-svg-icons
   ```
4. Add the following content to the `index.css` file:

   ```css
    #root {
        display: flex;
        min-height: 720px;
        flex-direction: column;
        align-items: stretch;
    }
    ```
40. Add the following import to the `index.html` file:
    
    ```js
    import 'bootstrap/dist/css/bootstrap.min.css';
    ```

41. Create the directory `src/components/app`.
5. Move the `App.*` files into the `app` folder.
6. Run:
   `yarn start`
7. Copy the folder `assets` (present in this directory) to your `src` directory.
8. Modify the content of the file `App.js` with the following:

```js
import React from "react";
import "./App.css";

function App() {
  return <h1>mimaflow player</h1>;
}

export default App;
```
9. Modify the content of the file `App.css` with the following:

```css
header {
    background: url('../../assets/img/header.png') no-repeat;
    background-position-x: right;
    background-position-y: bottom;
}

a.banner > .row {
    backgroung: url('../../assets/img/logo.png') no-repeat;
    background-position-x: right;
    background-position-y: bottom;
    margin-right: 10px;
}

a.banner,
a.banner:hover,
a.banner:focus,
a.banner:visited  {
    text-decoration: none;
    color: #142a39c4;

}

```

Check that the content of your app has changed and now it just shows the text "mimaflow player".

Now everything ready to start adding logic to our app!

_Note_: if you got lost here, you can just checkout the branch `feature/mimaflow-player-init`.

### 01: Title component

This is an example of how _props_ work. Component _props_ are readonly, their value can be set only in a parent component but they can never be modified in a child.

:bulb: **Exercise**: Create a `Title` component. First, create a folder `title` inside `components` and then add a `Title.js` file. This component should display the following **HTML**:

```html
<div class="row display-3">
  <div class="col-1">*</div>
  <div class="col">
  <span class="title">mimaflow Player</span></div>
</div>
```

For this to display properly you'll need to add a `Title.css` with the following content:

```css
.row {
  padding: 12px 0;
}

.logo {
  padding: 12px 0 12px 24px;
}
```

:top: Add a music emoji close to the title using a [FontAwesome](https://github.com/FortAwesome/react-fontawesome) icon where now the `*` is displayed. Use the CSS classes `fa-md logo` to display the appropriate style.

Note that required dependencies are already included.

_Note_: if you got lost here, you can just checkout the branch `feature/mimaflow-player-ex01`.

### 02: CurrentDateTime component

This is an example of why there are class components besides functional components. Class components are required when we need to keep a state and we need to interact with the lifecycle of the component: when it is mounted, unmounted, constructed...

#### state

As the opposite of _props_, the _state_ can only be modified by the component itself. It is owned by the component and no other component can modify a component's state but itself. The difference between _props_ and _state_ is that whenever the _state_ changes, the component re-renders itself.

Sometimes _props_ passed to the component end up being part of the _state_ of a component. And sometimes _state_ is passed as _props_ to children components.

##### Get state

The _state_ is a private property of the component, as said. You can access the _state_ in the same way you can access _props_: `this.state.mystateproperty`.

##### Set state

However, you can only set the _state_ **directly** in the constructor (meaning `this.state = {}`). Afterwards, if you want to force the re-render of your component when your _state_ changes, you must use the method `setState`: `this.setState({selected: false})`.

`setState` function may run aynscrhonously, as React may batch multiple calls into one for performance, so if you need to calculate the next state based on the value of `this.state`, you should use the following form:

```javascript
this.setState((state, props) => {
    selected: !state.selected,
    items: props.items
});
```

Last, `setState` only updates the piece of state you pass as an argument, leaving the rest of the state intact. So if you originally have a state defined like:

```
this.state = {
    selected: false,
    items: []
};
```

When you update the `items` with `this.setState({items: ["a","b"]});`, the `selected` will remain as is.

#### lifecycle

Class components have some methods that can be overridden:

- render: method that is called everytime the component is rendered. Here is where we put our JSX code
- constructor: it constructs the component. It only has one argument: _props_. This is where you can define your _state_ for the first time. (Not really a lifecycle method but it is the first time to run, though).
- componentDidMount: it is called when the component is rendered in the page.
- componentWillUnmount: it is called when the component is removed from the page.

:bulb: **Exercise**: Create a `CurrentDateTime` component, following the same convention we used for the Title. This component needs to interact with lifecycle functions, props and state. Its purpose is to show the current date and time as a digital clock, updating the time every second.

Add the following content to the file  `CurrentDateTime.css`:

```css
.current-date-time {
  font-size: 15px;
  font-weight: bold;
  display: flex;
  flex-direction: row-reverse;
  padding: 16px;
  background-color: #899ba524;
  color: #7f868a;
}

```

The **HTML** output of the component should be:

```html
<div class="current-date-time">Sun, 25 Nov 2018 11:29:03 GMT</div>

```

And do not forget to add your component to the `App` component to see it in your app! This is meant to appear int the `<footer></footer>` section of the app. 

_Note_: if you got lost here, you can just checkout the branch `feature/mimaflow-player-ex02`.

### 03: SearchBar component

This is a good example for using event handling together with state and props. All common events can be handled in the same way with React: declaring an `on<Event>` attribute in the JSX element and passing a function. This function will receive an event with its information.

:bulb: **Exercise 3-1**: Create a `SearchBar` components following the previously used conventions. The purpose of this component is to display an input text field inlined with a search button. These are the basic requirements:

- the search button must be disabled unless some text is written in the input.
- the _times_ icon must be hidden unless some text is writte in the input.
- the content of the input text field must be displayed in an alert when clicking on the Search button.

Add the following content to your `SearchBar.css` file:

```css
.btn-search {
    background-color: rgb(231, 76, 60);
    border-color: rgb(231, 76, 60);
    color: white;
}

.btn-search:hover {
    background-color: rgb(231, 76, 60);
    border-color: rgb(231, 76, 60);
}

.btn-search:disabled {
    background-color: darkgray;
    border-color: darkgray;
    cursor: not-allowed;
}

.clear {
    padding: 0 10px;
    background-color: transparent;
    border: none;
    position: absolute;
    right: 0px;
    top: 2px;
    font-size: 200%;
    font-weight: bold;
    color: lightgray;
    display: flex;
    cursor: pointer;
}

.hidden {
    display: none;
}
```

The **HTML** output of this component should look like:

```html
<form novalidate="">
    <div class="form-row align-items-center">
        <div class="col-12">
            <label class="control-label">Search for your favorite music:</label>
            </div>
        <div class="input-group col-10 mb-2">
            <input type="text" class="form-control" id="search-term" name="search-term" placeholder="Search artist, song, album ..." value="">
            <span class="input-group-text clear">*</span>
        </div>
        <div class="col-2">
            <button type="submit" class="btn btn-search mb-2 btn-block" disabled="">Search **</button>
        </div>
    </div>
</form>

```

Do not forget to add this component to your `App` component to display the result. Place it between the `header` and the `footer` in a  `div` with the classes `player container`.

Last but not least, add the following css class to your `App.css` file:

```css
.player {
    flex-grow: 1;
    flex-shrink: 0;
    margin-top: 32px;
}

```

:top: Using `FontAwesomeIcon` replace the `*` with a **times** icon. 
This icon should be displayed only when the input has some text. You can use the css class `hidden` to hid the icon.
When the user clicks on the icon, the content of the input will be deleted.

:bulb: **Exercise 3-2**: Now, integrate the Spotify API. For this step you need a valid free or premium Spotify account. If you don't have one, please contact one of the workshop teachers. This is the endpoint we are going to use:

[https://developer.spotify.com/console/get-search-item/]()

To connect to the API we need an OAuth2 token. This OAuth2 token is needed to perform requests to the Spotify API which needs to be sent as a header, as follows:

`Authorization: Bearer <token>`

Use the application [spotify-login](../spotify-login/README.md) to obtain a token from the Spotify public API. Just follow the instructions in its [README](../spotify-login/README.md) to get the application running and obtain a token.

Once we get the OAuth2 token, this is the query we want to perform from the code:

[https://api.spotify.com/v1/search?q=${searchTerm}&type=track&limit=10]()

where `${searchTerm}` will be replaced with the content of the input text field.

So when the user clicks on the Search button, instead of just showing an alert with the content of the input, we will trigger the request against the Spotify API, using the [Javascript Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). 
The result must be logged to the console output.

:top: Using `FontAwesomeIcon` replace the `**` with the spotify icon. 

_Note_: if you got lost here, you can just checkout the branch `feature/mimaflow-player-ex03`.

### 04: TrackList & Track components

We need to display a list of tracks. For now we forget about the content of the response of the request implemented in the previous exercise, we only focus on the response data structure. We need to build a component that displays some information about the tracks.

:bulb: **Exercise 4-1**: Create the `TrackList` component. We need to display the following attributes of a track:

- name of the track
- name of the album
- name of the artists, as a list one name per line
- thumbnail of the album

Here is a _hardcoded_ list of tracks that you can use to see if the component works as expected:

```js
const tracks = [
    {
        "id": "23344556",
        "name": "Bohemian Rhapsody",
        "album": {
            "name": "A night at the opera",
            "images": [
                {"url": ""},{"url": ""},{"url": "https://i.scdn.co/image/16f066184e92b296f9a202a326633a934607cb88"}
            ]
        },
        "artists": [{
            "id": "1434324324",
            "name": "Queen"
        }],
    },
    {
        "id": "990038833",
        "name": "Don't stop me now",
        "album": {
            "name": "Jazz",
            "images": [
                {"url": ""},{"url": ""},{"url": "https://i.scdn.co/image/9d4932142928310f8e4d00d20e26192100edb216"}
            ]
        },
        "artists": [{
            "id": "1434324324",
            "name": "Queen"
        }],
    },
    {
        "id": "7768888",
        "name": "Another one bites the dust",
        "album": {
            "name": "The game",
            "images": [
                {"url": ""},{"url": ""},{"url": "https://i.scdn.co/image/26b0d4f8f5b866bb81f74ad3091a878d9c1c28b0"}
            ]
        },
        "artists": [{
            "id": "1434324324",
            "name": "Queen"
        }],
    }
];

```

This is the content of the  `TrackList.css` file:

```css
.no-tracks,
.total-tracks {
    font-style: italic;
    color: darkgray;
}


.list-title {
    border: none;
    font-weight: bold;
}

.list-title > div.row {
    padding-left: 32px;
}
```

And here is the **HTML** output of the component:

```html
<div class="total-tracks">N results</div>
<ul class="list-group">
    <li class="list-group-item list-title">
        <div class="row align-items-center">
            <div class="col-1"></div>
            <div class="col">Song</div>
            <div class="col">Album</div>
            <div class="col">Artists</div>
            <div class="col"></div>
        </div>
    </li>
    <!-- one for track -->
    <li class="list-group-item">
        <div class="row align-items-center">
            <div class="col-1">*</div>
            <div class="col">Bohemian Rhapsody</div>
            <div class="col">A night at the opera</div>
            <div class="col">Queen<br></div>
            <div class="col">
                <img alt="album" src="https://i.scdn.co/image/a82b0edffa3aeb4da47765634031820d6ae01e8b" />
            </div>
        </div>
    </li>
</ul>
```

Don't forget to add this component to your `App` in the following `div`:

```html
<div className="player container">
    <SearchBar />
    <!-- TrackList -->
</div>
```
_Note_: if you got lost here, you can just checkout the branch `feature/mimaflow-player-ex04`.

:bulb: **Exercise 4-2**: Let's refactor the `TrackList`. Create a `Track` component and replace the code in `TrackList` so you can use the `Track` component instead.

Here is the content of `Track.css`:

```css
.play {
    color:rgb(231, 76, 60);
    cursor: pointer;
}

.list-group-item {
    margin: 5px 0 0 0;
    border-left: none;
    border-right: none;
    border-bottom: none;
}

.disabled {
    color: gray;
    cursor: not-allowed;
}
```


### 05: Player component

This component is a very good of example of a use case where it is required to **lift the state up**:
The application now shows a hardcoded list of songs, displaying some information about them. Now it's time to replace the hardcoded values with the actual response of the Spotify API but how can we get the response from the `SearchBar` into the `TrackList`? There are no such thing in React as binding properties between sibling components as they data always flow down. So we need to manage the request to the API in a parent component.

:bulb: **Exercise 5-1**: Create a new component `Player` which is a composition of the components `SearchBar` and `TrackList` and update the `App` component with the `Player` component instead of the other two.

:bulb: **Exercise 5-2**: Extract the logic to make the API request from the `SearchBar` to the `Player`.

:bulb: **Exercise 5-3**: Extract the _tracks_ from the response of the API Request and pass it to the `TrackList` component.

:bulb: **Exercise 5-4**: One of the fields of the track info that is part of the response from the API is the `preview_url`. This is a 30 seconds preview of the song that can be reproduced from our player. We need to:

- Replace the `*` with a play-circle icon when the preview_url field has text, otherwise display the icon as _disabled_. _Hint_: you can use the css class `disabled` for that purpose.
- When the user clicks on the play icon, play the song.

_Hint_: to reproduce a song from a url you can use the [HTMLAudioElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement).

:bulb: **Exercise 5-5**: The user can now play songs but they cannot pause it, so improve the player controls by:

- Change the icon with a pause-circle icon when the song starts playing.
- When the user clicks on the pause icon, stop playing the song.

:bulb: **Exercise 5-6**: What happens when the user plays more than one song before pausing the other first? They all play at the same time. This is not very user friendly, adapt the player controls so there is only one song playing at once.

_Hint_: LIF THE STATE UP!

_Note_: if you got lost here, you can just checkout the branch `feature/mimaflow-player-ex05`.

If you want to see the final result of this project, checkout the branch `feature/mimaflow-player-end`.
