import Part from "./Part"

const Content = (props) => {  //props.parts = [{}]
    return (
      <div>
        <Part indice={props.parts[0]}/>
        <Part indice={props.parts[1]}/>
        <Part indice={props.parts[2]}/>
      </div>
    )
  }

  export default Content