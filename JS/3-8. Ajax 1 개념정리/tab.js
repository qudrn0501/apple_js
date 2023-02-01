var button = $('.tab-button');
var content = $('.tab-content')

//for문 안의 클릭 이벤트 함수의 내부를 다른 함수로 축약하려 함
// for (let i = 0; i < $('.tab-content').length; i++) {
//   button.eq(i).on('click', function(){
//     탭열기(i)
//   });
// }

// 탭기능 다르게 만들기 -> 이벤트리스너 1개만 쓰기
// 이벤트리스너를 줄이면 램용량 확보 가능
// dataset을 활용해서 if문이나 반복문을 쓸 필요가 없음
$('.list').click(function(e){
  탭열기(e.target.dataset.번호)
})

// 축약할 코드에 변수가 있으면 변수를 파라미터로 바꿔야 잘됩니다
function 탭열기(파라미터) {
  button.removeClass('orange');
  button.eq(파라미터).addClass('orange');
  content.removeClass('show');
  content.eq(파라미터).addClass('show');
}

