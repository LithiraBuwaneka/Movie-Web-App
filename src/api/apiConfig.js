const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "ceb5dd31a098ffc1fa7a255133601a35",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
