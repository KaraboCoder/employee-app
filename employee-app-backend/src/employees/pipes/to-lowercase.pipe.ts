import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class ToLowerCasePipe implements PipeTransform {
    transform(value: string, metadata: ArgumentMetadata) {
        return value.toLowerCase();
    }
}