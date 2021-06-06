import { helper } from '@ember/component/helper';

export default helper(function eq([param1, param2]) {
  return param1 === param2;
});
