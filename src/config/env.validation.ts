import { Logger } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { IsEnum, IsNumber, IsString, validateSync } from 'class-validator';
import { keys } from 'ts-transformer-keys';
enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
  Provision = 'provision',
}

class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;
  @IsNumber()
  APP_PORT: number;
  @IsString()
  SWAGGER_PATH: string;
  @IsString()
  MONGODB_URI: string;
  constructor(partial?: Partial<EnvironmentVariables>) {
    Object.assign(this, partial);
  }
}

export function validate(
  config: Record<string, unknown>,
): EnvironmentVariables {
  const logger = new Logger('Validate Env');
  Object.keys(config).map((k) => {
    if (
      keys<EnvironmentVariables>().includes(k as keyof EnvironmentVariables)
    ) {
      logger.log(`Variable ${k} set to: ${config[`${k}`]}`);
    }
  });
  const validatedConfig = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
