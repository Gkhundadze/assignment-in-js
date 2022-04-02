/* მოგესალმებით მეგობრებო ეს არის დავალება ნომერი 2. დავალების ყველა ეტაპი აღწერილია კომენტარის სახით
 * 1) შედარება
 * 3) If პირობები
 * 4) ლოგიკური ოპერატორები
 * 5) Switch 
 */



// <------- შედარება ---------#### //

const num1 = 0;
const boolean1 = false;
const num2 = 5;
const emptyString = "";
const boolean2 = false;
const text = "I'm Text";
const text2 = "0";

// ჩამოწერეთ ცვლადები რომელი არის true რომელი false
// ჩამოწერეთ ზეპირად!
// მაგ. [1, 2, 3, 4]

// >>> კოდი დაწერეთ აქ 

const isFalse = [num1, boolean1, emptyString, boolean2,];
const isTrue = [num2, text, text2];

//


// შეცვალეთ ერთი ასო რომ მიიღოთ ჭეშმარიტი დებულება
// მოკლედ ახსენით მუშაობის პრინციპი თუ რატომ იმოქმედა

// console.log("aic" > "ah")
// სტრინგების შედარებისას ჯავასკრიპტი ჯერ ადარებს სტრინგების პირველ სიმბოლოებს ერთმანეთთან,
// შემდეგ მეორეს და ასე შემდეგ. რადგან b = 66 და h = 72 b > h გამოდის არაჭეშმარიტი და აბრუნებს false.
// მე შევცვალე შედარების მარცხენა მხარეს მეორე ასო ცხრილის მიხედვით ერთით უფრო მძიმე (h-ის შემდეგ მოდის i რომლის კოდის 73) 
// ასოთი და მივიღე ჭეშმარიტი დებულება.


// console.log(2 !== "004")


// <------- ლოგიკური ოპერატორები ---------#### //

// შეამოწმეთ სრულ წლოვნებაზე და თუ მეტი ან ტოლია
// 18 წელზე შესთავაზეთ სასმელი
// >>> კოდი დაწერეთ აქ 

// const adult = 18;
// let age = Number(prompt('რამდენი წლის ხარ?'));
// if(age < adult) {
//   alert('შენ ჯერ პატარა ხარ :)')
// }else{
//   document.body.style.backgroundImage = "url('https://pngset.com/images/jack-daniels-jack-daniels-whiskey-types-liquor-alcohol-beverage-drink-transparent-png-1193582.png')";
// }



//


// მოიფიქრეთ 2 if else-ის მაგალითი თქვენით

// >>> კოდი დაწერეთ აქ

// const userName = prompt('თქვენი სახელი ?');
// if(userName.length != 0){
//   const userPassword = prompt('პაროლი ?')
//   if(userPassword.length != 0) {
//     alert('ახლა გავიაროთ ავტორიზაცია')
//   const checkUserName = prompt('შეიყვანეთ თქვენი სახელი, რომელიც რეგისტრაციისას მიუთითეთ')
//   if(checkUserName === userName){
//     alert('სახელი სწორია')
//   }else{
//     alert('სახელი არასწორია, გაიარეთ რეგისტრაცია ხელახლა')
//   }
//     const checkUserPassword = prompt('შეიყვანეთ თქვენი პაროლი, რომელიც რეგისტრაციისას მიუთითეთ')
//     if(checkUserPassword === userPassword) {
//       alert('მოგესალმებით' + ' ' + userName + ' ' +'თქვენ წარმატებით გაიარეთ ავტორიზაცია')
//     }else {
//   alert('პაროლი არასწორია, გაიარეთ რეგისტრაცია ხელახლა')
// }
//   }
  
// }else{
//    alert('სახელი არ უნდა იყოს ცარიელი')
// }






//


// გადაიყვანეთ If ternary operator-ში მაგ. (true ? 1 : 2) 
  
// >>> კოდი დაწერეთ აქ
  // let isLoggedIn = false  
  // isLoggedIn ? console.log('hello') : console.log('lets log in')
//



/*
  ჩვენ გვაქვს ოთხი ფერი რომელთაც აქვთ
  კონკრეტული ციფრები მინიჭებული (თეთრი=4, 
  წითელი=3, მწვანე=2, ლურჯი=1, შავი=0, 
  სხვა ყველა ფერი=undefinde)
*/

let colorId = 3

// დაწერეთ if ისე, რომ როდესაც ჩვენ
// შევცვლით მაღლა განსაზღვრულ ცვლადს გავიგოთ
// ამ აიდის ფერი (ფერი გამოიტანეთ კონსოლში ტექსტის
// სახით)



// >>> კოდი დაწერეთ აქ
// const white = 'white';
// const red = 'red';
// const green = 'green';
// const blue = 'blue';
// const black = 'black';
// let anyOtherColor;

// if(colorId === 0) console.log(black)
// else if(colorId === 1 ) console.log(blue)
// else if(colorId === 2 ) console.log(green)
// else if(colorId === 3 ) console.log(red)
// else if(colorId === 4 ) console.log(white)
// else console.log(anyOtherColor)


//



// გადაიყვანეთ If ternary operator-ში მაგ. (true ? 1 : 2) 

// >>> კოდი დაწერეთ აქ
// let isAdmin = false;

// isAdmin ? console.log('hello admin') : console.log("you're not Admin")

//


// <------- დავალება Switch ---------#### //

// ცადეთ იგივე გააკეთოთ რაც წინა დავალებაში
// ოღონდ ამჯერად Switch-ის დახმარებით


// >>> კოდი დაწერეთ აქ
// let isAdmin = false;
// switch(isAdmin) {
//   case true:
//     console.log('admin is here')
//     break;
//   case false:
//     console.log('admin is gone')    
//   default:
//     console.log('undefined')  
// }


//



//  ||
//  ||
//  ||
// \  /
//  \/

/*
    ეს დავალება რომ ნახოთ გამოიყენეთ HTML,
    ჩვენი მიზანია ავაწყოთ ჩეთ ბოტი რომელთანაც ვისაუბრებთ
    როგორც ხედავთ დაბლა გამზადებული მაქვს კოდის გარკვეული
    ნაწილი ეს არის ფუნქცია რომელსაც მომავალში გავივლით
    კონკრეტულად ეს ფუნქცია არის რეკურსიული, რეკურსია
    არის პროცესი როდესაც ფუნქცია თავის თავს იძახებს ჩვენ კი
    იმიტომ ვიყენებთ ამას, რომ ყოველ ჯერზე როდესად რაღაცის თქმა
    დაგვჭირდება მზად იყოს სასაუბროდ ჩვენი ბოტი

    // კოდში მოათავსეთ Switch რომლითაც დააპროგნოზებთ სასაუბრო
    // სიტყვებს ააწყობთ მინი ჩათ ბოტს.
    მაგ. 
    """"
      case "გამარჯობა":
        alert("გამარჯობა");
        break;
    """"
*/
const bot = document.getElementById("bot")
bot.addEventListener("click", myFun())

function myFun() {
  let x = prompt("მე მზად ვარ პასუხისათვის, როგორ ხარ ? სავარაუდო პასუხებია ['კარგად', 'ცუდად', 'ნიჩეო ,'ისე რაა']")

  // >>> კოდი დაწერეთ აქ გამოიყენეთ Switch
  switch(x){
    case 'კარგად':
      alert('ძალიან კარგი :P დაათვალიერე ჩვენი ვებ გვერდი')
      return;
    case 'ცუდად':
      alert('ძალიან ცუდი :( გადახედე ვებ გვერდს, იქნებ ხასიათი შეგეცვალოს')
      return;    
    case 'ნიჩეო':
      alert('ნიჩეო წავა კიდე :)')
      return;    
    case 'ისე რაა':
      alert('ისე რა უკვე კარგია :) ვოლლ-ი შენს გვერდითაა :)')
      return;    
    default:
      alert('არაფერს მეტყვი ? ეგ რასიტყვაა არვიცი')  
      return;  
  }
  

  // რეკურსიული ფუნქცია
  myFun()
}