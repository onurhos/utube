import axios from 'axios';

const KEY = 'AIzaSyCxP96hdcFooxfNBnVf8174g5nOClwhSso';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});