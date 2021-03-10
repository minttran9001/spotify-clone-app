import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromUrl } from "../api/spotify";
const spotify =  new SpotifyWebApi();
export const getUserFromUrl = (dispatch) => {
    const hash = getTokenFromUrl();
    window.location.hash = ""
    const token = hash.access_token;
    console.log(hash)
    if (token) {
        spotify.setAccessToken(token)
        spotify.getMe().then(user=>{
            dispatch({
                type : 'GET_USER_FROM_URL',
                user,
                token,
            })
        }
        )}
};
