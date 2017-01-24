console.log('### qs ###');
import qs from 'qs';
const encoded = qs.stringify({a: 1, b: 'one'});
console.log(encoded);
const decoded = qs.parse(encoded);
console.log(decoded);

console.log('### humps ###');
import humps from 'humps';
console.log(humps.camelize('one_two_three'));
console.log(humps.decamelize('OneTwoThree'));

console.log('### string ###');
import S from 'string';
console.log(S('<p>hello, world!</p>').between('<p>', '</p>').s);
