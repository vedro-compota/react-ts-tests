import { useCallback,  } from "react";
const { Parser } = require('json2csv');


function download(filename: string, text: string, type='text/plain') {
    var element = document.createElement('a');
    element.setAttribute('href', `data:${type};charset=utf-8,` + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }

function downloadCsv(filename: string, text: string) {
    download(filename, text, 'text/csv');
  }

export type PropsType = any;



export function Json2CsvDemo({some}: PropsType) {


      const handleClick = useCallback(() => {
            let myCars = {
                  "car":
                  {
                      "name": 'Audi',
                      "price": null,
                      "color": ["blue"]
                  }
              };
              
              let fields = ["car.name", "car.price", "car.color"];
              
              const parser = new Parser({
                  fields,
                  unwind: ["car.name", "car.price", "car.color"]
              });
              
              const csv = parser.parse(myCars);
              
              console.log('output',csv);
              downloadCsv('my.csv', csv);
      }, []);

  


      return (
      <>
      <div onClick={handleClick} style={{cursor: 'pointer'}}> Click to export -- Json2csv</div>
      </>
      );

}