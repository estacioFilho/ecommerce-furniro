import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class OptionalParseIntPipe implements PipeTransform {
  transform(value: any): number | undefined {
    if (value === undefined || value === null || value === '') {
      return undefined;
    }
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException('Validation failed (numeric string is expected)');
    }
    return val;
  }
}