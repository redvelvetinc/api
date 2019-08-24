import { Controller, Get, Post } from 'routing-controllers';

@Controller('/account')
export class AccountController {
  @Get('/me')
  me(): string {
    return '"/me" resource';
  }

  @Post('/login')
  login(): string {
    return '"/login" resource';
  }

  @Post('/logout')
  logout(): string {
    return '"/logout" resource';
  }

  @Post('/registration')
  registration(): string {
    return '"/registration" resource';
  }
}
