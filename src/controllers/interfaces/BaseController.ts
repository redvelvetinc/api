import { IWriteController } from "./WriteController";
import { IReadController } from "./ReadController";

export interface IBaseController<T> extends IReadController, IWriteController {}