import { Controller, Get } from 'routing-controllers';

interface HealthResponse {
  status: string;
}

@Controller('/_health')
export class HealthController {
  @Get()
  health(): HealthResponse {
    return { status: 'OK' };
  }
}
