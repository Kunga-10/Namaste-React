const heading=React.createElement('h1',{id:"heading",  
    xyz:"sgd"},[React.createElement('h1',{id:"child",  
    xyz:"sgd"},"Namste React"),React.createElement('h1',{id:"child",  
    xyz:"sgd"},"Namste React")]);//creating a core element so react.createelement
console.log(heading);   
const root=ReactDOM.createRoot(document.getElementById("root"));//creating the main root so reactDOM.creatRoot
    
root.render(heading);