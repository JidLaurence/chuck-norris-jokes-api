import { Response, Request } from 'express';
import axios from '@axios';
import { randomJokesT } from '@type/jokes';

export default {
    getRandom: async (req: Request, res: Response) => {
        const { category } = req.query;

        let params: string = '';
        if (category) params = `?category=${category}`;

        const randomJokes = await axios.get('/jokes/random' + params);
        const data: randomJokesT | {} = randomJokes.data || {};

        return res.send(data);
    },
    getCategory: async (req: Request, res: Response) => {
        const categories = await axios.get('/jokes/categories');
        const data: string[] | [] = categories?.data || [];

        return res.send(data);
    },
    getFreeText: async (req: Request, res: Response) => {
        const { query } = req.query;
        if (!query) throw { message: 'Input is required' };

        const searchedJokes = await axios.get(`/jokes/search?query=${query}`);
        const data: randomJokesT[] | [] = searchedJokes.data || [];

        return res.send(data);
    },
};

