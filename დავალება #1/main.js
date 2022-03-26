/* მოგესალმებით მეგობრებო ეს არის დავალება ნომერი 1. დავალების ყველა ეტაპი აღწერილია კომენტარის სახით
 * 1) კომენტარები
 * 2) ცვლადები
 * 3) მონაცემთა ტიპები
 * 4) ოპერატორები და არითმეტიკა
 */



// 1 კომენტარები

/*
  // კომენტარები გაფუჭდა თქვენი დავალებაა
  // არასწორად დაწერილი კომენტარი ჩაასწოროთ
  // და ასევე გამოიყენოთ თქვენი კოდის აღსაწერად
*/



// 2 ცვლადები

/*
  // მსურს ჩემი Spotify ლისტის განახლება 
  // ამაში კი თქვენი დახმარება მჭირდება
  // აღწერეთ თქვენი საყვარელი მომღერლის
  // (სახელი, გვარი, ასაკი, დაბადების წელი, დაბადების ადგილი,)
  // გაითვალისწინეთ რომ ამისთვის უნდა
  // გამოიყენოთ მხოლოდ (const, let)
  // (ნებისმიერი პიროვნების ჩაწერა შეგიძლიათ)
*/

// >>>> კოდი დაწერეთ აქ

// პირველი, რთული ვარიანტი :)

const actorName = 'რეი';
const actorLastname = 'ჩარლზი';
let actorAge = 92;
const actorDateOfBirth = '23/09/1930';
const actorBirthPlace = 'ალბანი, ჯორჯია, აშშ';

// console.log(actorName);
// console.log(actorLastname);
// console.log(actorAge);
// console.log(actorDateOfBirth);
// console.log(actorBirthPlace);


// მეორე, უფრო მარტიცი :P
const actor = {
  actorName: 'რეი',
  actorLastname: 'ჩარლზი',
  actorAge: 92,
  actorDateOfBirth: '23/09/1930',
  actorBirthPlace: 'ალბანი, ჯორჯია, აშშ'
};
// console.log(actor);



  // დროა დავიწყოთ მზადება ჩვენს მომავალ პროექტზე.
  // ჩვენი დავალეებაა მოვიფიქროთ რაიმე პროდუქტთა სია
  // რომელსაც გამოვიყენებთ მომავალში.

  // წიგნების მაღაზიის მაგალითი:

  // const BookName = "ვეფხისტყაოსანი";
  // const AuthrName = "შოთა რუსთაველი";
  // const CreateDate = "13 საუკუნე";
  // let ProductQuant = 124;

// მობილურების ონლაინ მაღაზიის მაგალითი:
const productName = 'iphone 13';
const brandName = 'apple';
const releaseDate = 2021;
let productPrice = 1000;
let productDiscountPercent = 15;
let productInStore = 35;

// >>>> კოდი დაწერეთ აქ


//



// 3 მონაცემთა ტიპები

/*
  // აქ რაღაც შეცდომაა თქვენი დავალებაა ცვლადის გამოცხადების
  // დროს გაასწოროთ შეცდომა;
*/



const age = 1;
const hisName = "bob";
const isHigh = true;
const dateOfBirth = 1995;




// ეს კოდი ამოწმებს თქვენ მიერ მითითებულ ტიპებს

// თქვენი მიზანია დააბრუნოთ პირველი 4 frue

console.log(typeof age === "number");
console.log(typeof hisName === "string");
console.log(typeof isHigh === "boolean");
console.log(typeof dateOfBirth === "number")



// აქ უნდა გაიგოთ თქვენი პროდუქტის სიის ტიპი

// მაგ: console.log(typeof age)

console.log(typeof age);
console.log(typeof hisName);
console.log(typeof isHigh);
console.log(typeof dateOfBirth);

// ოპერატორები არითმეტიკა

let num = 5;

// გამოიყენეთ ყველა ვარიანტი რომლითაც შეგვიძლია ამ ციფრის გაზრდა

// >>> კოდი დაწერეთ აქ

// num = num + num;
// num = num * num;
// num = num + (num + num);
// num = num + (num * num);
// num = num ** (num + num);
// num = num ** (num * num);
// num = num * (num + num);
// num = num * (num * num);

//

console.log(num)



// სცადეთ შეკრიბოთ განსხვავებული ტიპის მქონე 
// მნიშვნელობები და გაიგოთ შეკრებილი მონაცემების ტიპი

// >>> კოდი დაწერეთ აქ
const numberType = 12;
const stringType = '23';
const stringType2 = 'message';
const booleanTypeTrue = true;
const booleanTypeFalse = false;
const nullType = null;
const undefinedType = undefined;


// const undefinedPusNull = undefinedType + nullType;
// console.log(typeof undefinedPusNull, undefinedPusNull);

// const undefinedPlusUndefined = undefinedType + undefinedType
// console.log(typeof undefinedPlusUndefined, undefinedPlusUndefined);

// const booleanPlusUndefined = nullType + undefinedType;
// console.log(typeof booleanPlusUndefined, booleanPlusUndefined);

// const numberPlusString = numberType + stringType;
// console.log(typeof numberPlusString, numberPlusString);

// const numberPlusString2 = numberType + stringType2;
// console.log(typeof numberPlusString2, numberPlusString2);

// const numberPlusBoolean = numberType + booleanTypeFalse;
// console.log(typeof numberPlusBoolean, numberPlusBoolean)

// const numberPlusBoolean2 = numberType + booleanTypeTrue;
// console.log(typeof numberPlusBoolean2, numberPlusBoolean2)

// const stringPlusBoolean = stringType + booleanTypeTrue;
// console.log(typeof stringPlusBoolean, stringPlusBoolean);

// const stringPlusNull = stringType + nullType;
// console.log(typeof stringPlusNull, stringPlusNull);

// const stringPlusUndefined = stringType + undefinedType;
// console.log(typeof stringPlusUndefined, stringPlusUndefined);

// const numberPlusUndefined = numberType + undefinedType;
// console.log(typeof numberPlusUndefined, numberPlusUndefined);

