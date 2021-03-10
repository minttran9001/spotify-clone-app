import { Credential } from "./credential";

const spotify = Credential();
export const loginUrl = `${spotify.authEndPoint}?client_id=${
  spotify.ClientId
}&redirect_uri=${spotify.RedirectUri}&scope=${spotify.Scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initital, item) => {
      let parts = item.split("=");
      initital[parts[0]] = decodeURIComponent(parts[1]);
      return initital;
    }, {});
};
