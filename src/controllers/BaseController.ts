import { IReadController } from "./interfaces/ReadController";
import { IWriteController } from "./interfaces/WriteController";
import { Request, Response, NextFunction } from 'express';
import { Model, Document } from "mongoose";


export class BaseController<T extends Document> implements IReadController, IWriteController {
  private model: Model<Document>;

  constructor(model: Model<Document>) {
    this.model = model;
    this.retrieve =this.retrieve.bind(this);
    this.findById =this.findById.bind(this);
    this.create =this.create.bind(this);
  }

  async retrieve(req: Request, res: Response, next: NextFunction) {
    try {
      const collection = await this.model.find({});
      res.json({ success: true, data: collection });
    } catch (err) {
      next(err);
    }
  }

  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const { _id: id } = req.params;
      const result = await this.model.findById(id);
      res.json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const object = await this.model.create(req.body);
      res.status(201).json({ success: true, data: object });
    } catch (err) {
      next(err);
    }
  }

  update(req: Request, res: Response, next: NextFunction) {
    throw new Error("Method not implemented.");
  }

  delete(req: Request, res: Response, next: NextFunction) {
    throw new Error("Method not implemented.");
  }
}