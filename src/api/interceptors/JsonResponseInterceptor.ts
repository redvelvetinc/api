import { Response } from 'express';
import { Action, Interceptor, InterceptorInterface } from 'routing-controllers';

@Interceptor()
export class JsonReponseInterceptor implements InterceptorInterface {
  intercept(action: Action, content: any): Response {
    return action.response.json(content);
  }
}
