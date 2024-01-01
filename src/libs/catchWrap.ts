/* eslint-disable implicit-arrow-linebreak */
import { Request, Response, NextFunction } from 'express';
import { validationResult, ValidationError, Result } from 'express-validator';
import _ from 'lodash';

export default (func: any) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const errors: Result<ValidationError> = validationResult(req);
            if (!errors.isEmpty()) {
                const [error] = errors.array();
                throw { message: error.msg };
            }
            return await func.call(this, req, res, next);
        } catch (e: any) {
            let error = { e, status: 404 };
            if (e?.response?.data) error = e?.response?.data;

            return res.status(error.status).send(error);
        }
    };

