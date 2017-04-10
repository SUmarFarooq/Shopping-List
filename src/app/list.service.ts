import { Injectable } from '@angular/core';

import { item } from './item';
import { list } from './mock.list';


@Injectable()
export class listservice {
  getlist(): item[] {
    return list;
  }
}
