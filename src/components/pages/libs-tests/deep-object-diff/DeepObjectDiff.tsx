import { diff } from "deep-object-diff";

export type PropsType = any;
export function DeepObjectDiff(props: PropsType) {


    const lhs = {
        foo: {
          a: 1
        },
      };
       
      const rhs = {
        foo: {
          a: 1
        },
      };
       
      console.log(diff(lhs, rhs));

      return   ( <>
        look at console
      </>);
}