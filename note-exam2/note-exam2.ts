//Props객체 정리하기
type Props = {[key:string]: string}

function createElement(tagName: string, props?:Props, ...children:string[]): string{
  let elementStrings: string[] = [];

  // 태그 시작 부분
  let startTag = `<${tagName}`
  if (props){
    for(let prop in props){
      startTag += `${prop}="${props[prop]}"`
    }
  }
  startTag += '>';
  elementStrings.push(startTag);


  // 자식 요소들 추가
  elementStrings.push(...children)

  // 태그 종료 부분
  elementStrings.push(`</${tagName}>`)

  const resultValue = elementStrings.join(''); 
  return resultValue
}



let styleString = styleValueMaker('color:red', 'font-size:16px', 'padding:10px')
let divString = createElement('h1', {id: 'example', class:'active', style: 'color'}, '이것은 스타일이 적용된 div입니다.')
