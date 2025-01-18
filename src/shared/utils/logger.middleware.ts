
import { Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
    Logger.log(`Request to: ${req.baseUrl}`, 'LoggerMiddleware');
  next();
};

