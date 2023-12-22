class ForExam{

  constructor(){
    this.initData()
  }

  initData(){
    const config={
      baseArray: ['피카츄','라이츄','꼬부기'],
      specialProblems:[10,16,17,18,19,20],
      htmlTagProblems:[22,23,25,27,29,30],
      startProblemIndex: 1,
      endProblemIndex: 30
    }

    for(let i = config.startProblemIndex; i <= config.endProblemIndex; i++){
      this['poblem' + i] = this.generateProblemData(
        i,
        config.baseArray,
        config.specialProblems
      )
    }

    this.problem16 = [['피카츄','라이츄'],['꼬부기','이브이']]

    this.assembleHTMLTags(config.htmlTagPromblems)
  }

  generateProblemData(){

  }

  assembleHTMLTags(){

  }
}

let forExam = new ForExam()
console.dir(forExam)