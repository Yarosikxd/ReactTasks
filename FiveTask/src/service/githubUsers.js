import axios from 'axios'

const API = `https://api.github.com/users`;

const service = {
    getUser: (username) =>
        axios.get(API + `/${username}`).then(({data}) => data),
};

export default service;