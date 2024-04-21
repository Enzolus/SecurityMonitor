export default function test() {
    
    fetch("https://projet.lusardi.fr/api/carte").then((resp)=>{
      return <p>{ resp.json() }</p>}
    
  }
  