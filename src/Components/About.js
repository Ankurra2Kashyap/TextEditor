import React from 'react'

export default function About(props) {
   // const[myStyle,setMyStyle]=useState({
    //    color: 'black',
    //    backgroundColor: 'white'
         
  //  })
  let myStyle = {
    color: props.mode === 'dark'?'white':'#042743',
    backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white'
}
  return (
    <div class="container" style={{ color: props.mode === 'dark'?'white':'#042743'}}>
    <h1>About Us</h1>
      <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button my-1" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze your Text
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body"  style={myStyle}>
         Textutils give you a way to analyze your text quickly and efficiently.Be it word count,
         character count 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed my-1" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       Free to use
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body"  style={myStyle}>
        Textutils is a free character counter tool that provides instant character count & word count statistics for a given
        text.textutils reports the number of words and characters.Thus it is suitable for writing text with word/character
        limit. 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Browser Compatible
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body"  style={myStyle}>
        This Word counter software works in any web browsers such as chrome,firefox,internetExplorer
        ,safai,opera.It suits to count characters in facebook,blog,books,excel document,pdf document,essays,etc.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
