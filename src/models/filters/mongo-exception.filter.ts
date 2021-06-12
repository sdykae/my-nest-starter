import { ArgumentsHost, Catch, RpcExceptionFilter } from '@nestjs/common';
import { Error } from 'mongoose';
import { MongoFilterError } from '../errors/bad-request-exception.error';
import ValidationError = Error.ValidationError;

@Catch(ValidationError)
export class MongoValidationErrorFilter implements RpcExceptionFilter {
  catch(exception: ValidationError, host: ArgumentsHost): any {
    const ctx = host.switchToHttp(),
      response = ctx.getResponse();

    return response.status(400).json(<MongoFilterError>{
      statusCode: 400,
      createdBy: 'MongoValidationErrorFilter, Mongo Schema or Model definition',
      errors: exception.errors,
    });
  }
}
