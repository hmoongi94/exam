//? const resultValue : string = <h1 id = “example” class = ”active” style : “color:salmon;”> 내이름 </h1>
function createElement(tagName, props) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    var elementStrings = [];
    // 태그 시작 부분
    var startTag = "<".concat(tagName);
    if (props) {
        for (var prop in props) {
            startTag += " ".concat(prop, "=\"").concat(props[prop], "\"");
            //* prop은 props매개변수에 대한 key값
            //* props[prop]은 prop에 대한 value값
        }
    }
    startTag += '>';
    elementStrings.push(startTag);
    // 자식 요소들 추가
    elementStrings.push.apply(elementStrings, children);
    // 태그 종료 부분
    elementStrings.push("</".concat(tagName, ">"));
    var resultValue = elementStrings.join('');
    return resultValue;
}
var resultValue = createElement('h1', { id: 'example', class: 'active', style: 'color: salmon' }, '홍문기');
console.log(resultValue);
