import { IReadController } from "./interfaces/ReadController";
import { IWriteController } from "./interfaces/WriteController";
import { Request, Response, NextFunction } from "express";
import { Document } from "mongoose";
import { BaseRepository } from "../respository/base/BaseRepository";

export class BaseController<T extends Document>
  implements IReadController, IWriteController {
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
      const { _id } = req.params;
      const data = await this.repository.findById(_id);
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
      const { _id } = req.params;
      const data = await this.repository.update(_id, req.body);
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { _id } = req.params;
      await this.repository.delete(_id);
      res.status(204).json();
    } catch (err) {
      next(err);
    }
  };
}
