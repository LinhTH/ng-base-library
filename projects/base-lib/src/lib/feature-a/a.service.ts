import { Injectable } from '@angular/core';
import {BService} from '@base/base-lib/src/lib/feature-b';

@Injectable({
  providedIn: 'root'
})
export class AService {

  constructor(private bService: BService) { }
}
