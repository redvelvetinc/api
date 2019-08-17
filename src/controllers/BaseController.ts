import { NextFunction, Request, Response } from 'express';
import { Document } from 'mongoose';

import { BaseRepository } from '../respository/base/BaseRepository';
import { IReadController } from './interfaces/ReadController';
import { IWriteController } from './interfaces/WriteController';

interface ResourceParams {
  _id?: string;
}

export class BaseController<T extends Document> implements IReadController, IWriteController {
  private repository: BaseRepository<T>;

  constructor(repository: BaseRepository<T>) {
    this.repository = repository;
  }

  retrieve = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const collection = await this.repository.retrieve();
      res.json({ success: true, data: collection });
    } catch (err) {
      next(err);
    }
  };

  findById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { _id } = req.params as ResourceParams;
      const data = await this.repository.findById(_id as string);
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.repository.create(req.body);
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { _id } = req.params as ResourceParams;
      const data = await this.repository.update(_id as string, req.body);
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { _id } = req.params as ResourceParams;
      await this.repository.delete(_id as string);
      res.status(204).json();
    } catch (err) {
      next(err);
    }
  };
}
