import { map } from "../../../../node_modules/rxjs/operators";
import { GridDataResult } from "../../../../node_modules/@progress/kendo-angular-grid";
import { Observable, of } from "../../../../node_modules/rxjs";

/**Maps an IOdataCollection to a kendo GridDataResult */
export const gridMap = () =>
   map<IOdataCollection<any>, GridDataResult>(m => {
      let data = <GridDataResult>{ data: m.value, total: m["@odata.count"] };
      return data;
   }
   )

