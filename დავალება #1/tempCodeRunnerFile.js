const undefinedPusNull = undefinedType + nullType;
console.log(typeof undefinedPusNull, undefinedPusNull);

const undefinedPlusUndefined = undefinedType + undefinedType
console.log(typeof undefinedPlusUndefined, undefinedPlusUndefined);

const booleanPlusUndefined = nullType + undefinedType;
console.log(typeof booleanPlusUndefined, booleanPlusUndefined);

const numberPlusString = numberType + stringType;
console.log(typeof numberPlusString, numberPlusString);

const numberPlusString2 = numberType + stringType2;
console.log(typeof numberPlusString2, numberPlusString2);

const numberPlusBoolean = numberType + booleanTypeFalse;
console.log(typeof numberPlusBoolean, numberPlusBoolean)

const numberPlusBoolean2 = numberType + booleanTypeTrue;
console.log(typeof numberPlusBoolean2, numberPlusBoolean2)

const stringPlusBoolean = stringType + booleanTypeTrue;
console.log(typeof stringPlusBoolean, stringPlusBoolean);

const stringPlusNull = stringType + nullType;
console.log(typeof stringPlusNull, stringPlusNull);

const stringPlusUndefined = stringType + undefinedType;
console.log(typeof stringPlusUndefined, stringPlusUndefined);

const numberPlusUndefined = numberType + undefinedType;
console.log(typeof numberPlusUndefined, numberPlusUndefined);