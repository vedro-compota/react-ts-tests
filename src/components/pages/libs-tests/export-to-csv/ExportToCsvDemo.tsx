import { ExportToCsv } from "export-to-csv";
import { useCallback,  useMemo } from "react";

import {data} from './data';

const options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'My Awesome CSV',
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
      // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
    };

export type PropsType = any;

export function ExportToCsvDemo({some}: PropsType) {


      const csvExporter = useMemo(() => {
         return new ExportToCsv(options);
      }, []);

      const handleClick = useCallback(() => {
            csvExporter.generateCsv(data);
      }, [csvExporter]);

  


      return (
      <>
      <div onClick={handleClick} style={{cursor: 'pointer'}}>Click to export -- export to csv</div>
      </>
      );

}