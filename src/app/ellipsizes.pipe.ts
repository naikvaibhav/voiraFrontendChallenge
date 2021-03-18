import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsizes'
})
export class EllipsizesPipe implements PipeTransform {

  transform(value: String, ...args: any[]): String {
    const file = value.split('.')
    const fileName = file[0]
    const extensionType = file[1]
    const limit = args.length > 0 ? parseInt(args[0], 10) : 25;
    const trail = args.length > 1 ? args[1] : '...';
    return fileName.length > limit ? `${fileName.substring(0, limit)}${trail}  .${extensionType}` : `${fileName}.${extensionType}`;
  }

}
