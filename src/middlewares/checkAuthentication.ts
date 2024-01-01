import { Request, Response, NextFunction } from 'express';
import config from '@config';
export default (req: Request, res: Response, next: NextFunction) => {
    const allowPath = ['/', '/favicon.ico'];
    if (allowPath.includes(req.path)) return next();

    try {
        const authorization: string = String(req.headers.authorization);
        if (authorization !== config.ACCESS_TOKEN_SECRET) {
            throw { message: 'Unauthorized', status: 401 };
        }

        return next();
    } catch (error: any) {
        return res.status(error).send(error);
    }
};

