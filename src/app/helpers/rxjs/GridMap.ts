import { map } from "../../../../node_modules/rxjs/operators";
import { GridDataResult } from "../../../../node_modules/@progress/kendo-angular-grid";
import { OperatorFunction } from "../../../../node_modules/rxjs";

/**Maps an array or IOdataCollection to a kendo GridDataResult
 * @param count {number} overides the count from the array length or odata.count returned from request
 * @returns OperatorFunction
 */
export const gridMap = <T>(count:number = undefined): OperatorFunction<IOdataCollection<T> | T[], GridDataResult> =>
   input$ => input$.pipe(map(m => Array.isArray(m)? 
                             <GridDataResult>{ data: m, total:count|| m.length }: 
                             <GridDataResult>{ data: m.value, total:count || m["@odata.count"] }
                            )
                        )
