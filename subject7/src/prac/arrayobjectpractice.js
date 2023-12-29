const array = [{name:'김현', content:'불라불라'}, {name:'방승희', content:'불라불라'}, {name:'김우진', content:'불라불라'}, {name:'신동현', content:'불라불라'}, {name:'송영준', content:'불라불라'}]
array.forEach((array)=>{
  // if(Object.keys(key)===key){
    // console.log(Object.keys(key))
  // }
  
  if(array === 'name'){
    console.log(array)
  }
})

const names = array.map(item => item.name);
console.log(names)