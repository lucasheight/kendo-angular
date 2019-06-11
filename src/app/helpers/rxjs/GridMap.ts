import { map } from "../../../../node_modules/rxjs/operators";
import { GridDataResult } from "../../../../node_modules/@progress/kendo-angular-grid";
import { OperatorFunction } from "../../../../node_modules/rxjs";


/**Maps an IOdataCollection to a kendo GridDataResult */
export const gridMap = <T>(): OperatorFunction<IOdataCollection<T>, GridDataResult> => 
    input$ => input$.pipe(map(m => <GridDataResult>{ data: m.value, total: m["@odata.count"] }))
