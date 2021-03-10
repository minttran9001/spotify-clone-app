const Credential = () => {
  return {
    authEndPoint : "https://accounts.spotify.com/authorize",
    ClientId: "e4cb4b85fb0c4decbb27bce0b1493ab3",
    ClientSecret: "92d21f0556e04edfb70bfff80c628ad3",
    RedirectUri : 'http://localhost:3000/',
    Scopes : [
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-state",
      "user-top-read",
      "user-modify-playback-state"
    ]
  };
};

export { Credential };
