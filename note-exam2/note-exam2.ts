//? const resultValue : string = <h1 id = “example” class = ”active” style : “color:salmon;”> 내이름 </h1>

//Props객체 정리하기
type Props = {[key:string]: string}

function createElement(tagName: string, props?:Props, ...children:string[]): string{
  let elementStrings: string[] = [];

  // 태그 시작 부분
  let startTag = `<${tagName}`
  if (props){
    for(let prop in props){
      startTag += `${prop}="${props[prop]}"`
      //* prop은 props매개변수에 대한 key값
      //* props[prop]은 prop에 대한 value값
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

let resultValue = createElement('h1', {id: 'example', class:'active', style: 'color: salmon'}, '홍문기')

console.log(resultValue)
