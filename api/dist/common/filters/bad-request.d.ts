import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
export declare class BadRequestFilter implements ExceptionFilter {
    catch(exception: Error, host: ArgumentsHost): void;
}
