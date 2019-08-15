import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { MongoError } from 'mongodb';
export declare class MongoFilter implements ExceptionFilter {
    catch(exception: MongoError, host: ArgumentsHost): void;
}
