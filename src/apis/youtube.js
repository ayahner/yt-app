import axios from 'axios';

const KEY = 'AIzaSyDLWvEhFgkH-N_pvu56-304HUckCgOO8g4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    // type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
