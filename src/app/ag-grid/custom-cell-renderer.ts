import { countries } from './countries.const'

export const countryCellRenderer = params => {
  //get flags from here: http://www.freeflagicons.com/
  var countryCode  = countries.filter(item => item.name === params.value).map(item => item.code)[0]
  if (params.value === "" || params.value === undefined || countryCode === undefined || params.value === null) {
      return '';      
  } else {
    var flag = '<img border="0" width="15" height="10" src="https://flags.fmcdn.net/data/flags/mini/' + countryCode.toLowerCase() + '.png">';
    return flag + ' ' + params.value;
  }
}