// 좋은 관습 : 반복되는 셀렉터들은 변수로 정해서 사용하기
var button = $('.tab-button');
var content = $('.tab-content')

// for 반복문
// var let은 변수의 범위 차이로 인해 var은 for문이 안된다
// for (let i = 0; i < 3; i++) {
//   button.eq(i).on('click', function(){
//     button.removeClass('orange');
//     button.eq(i).addClass('orange');
//     content.removeClass('show');
//     content.eq(i).addClass('show');
//   });
// }

// 확장성 있는 코드로 바꾸기
/* 
1. 원하는 기능 구현이 되는가
2. 확장성이 좋은가
3. 나중에 관리가 쉬울것인가
4. 성능문제가 없는가
 */
for (let i = 0; i < $('.tab-content').length; i++) {
  button.eq(i).on('click', function(){
    button.removeClass('orange');
    button.eq(i).addClass('orange');
    content.removeClass('show');
    content.eq(i).addClass('show');
  });
}


// button.eq(0).on('click', function(){
//   button.removeClass('orange');
//   button.eq(0).addClass('orange');
//   content.removeClass('show');
//   content.eq(0).addClass('show');
// });

// button.eq(1).on('click', function(){
//   button.removeClass('orange');
//   button.eq(1).addClass('orange');
//   content.removeClass('show');
//   content.eq(1).addClass('show');
// });

// button.eq(2).on('click', function(){
//   button.removeClass('orange');
//   button.eq(2).addClass('orange');
//   content.removeClass('show');
//   content.eq(2).addClass('show');
// });