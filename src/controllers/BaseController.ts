import { IReadController } from "./interfaces/ReadController";
import { IWriteController } from "./interfaces/WriteController";
import { Request, Response, NextFunction } from 'express';
import { Model, Document, Types } from "mongoose";


export class BaseController<T extends Document> implements IReadController, IWriteController {
  private model: Model<Document>;

  constructor(model: Model<Document>) {
    this.model = model;
  }

  retrieve = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const collection = await this.model.find({});
      res.json({ success: true, data: collection });
    } catch (err) {
      next(err);
    }
  }

  findById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { _id } = req.params;
      const data = await this.model.findById(_id);
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.model.create(req.body);
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  }

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { _id } = req.params;
      const data = await this.model.update({ _id }, req.body);
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { _id } = req.params;
      await this.model.remove({ _id: this.toObjectId(_id) });
      res.status(204).json();
    } catch (err) {
      next(err);
    }
  }

  private toObjectId(_id: string): Types.ObjectId {
    return Types.ObjectId.createFromHexString(_id);
  }
}
