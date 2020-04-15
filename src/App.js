import React, { useEffect } from "react";
import axios from 'axios'
import "./App.css";

function App() {

  return (
    <div className="App">
      <header>
        <nav className='header-nav'>
          <a></a>
          <a></a>
          <a></a>
        </nav>
        <img/>
        <h1></h1>
      </header>
      <section className="body">
        <h2></h2>
        <div className='component component1'>
          <h4></h4>
          <p>
            Read through the instructions in the README.md file to build your NASA
            app! Have fun <span role="img" aria-label='go!'>🚀</span>!
          </p>  
        </div>
        <div className='component component2'>
          <h4></h4>
          <p>
            Lorem Ipsum Blah blah
          </p>  
        </div>
        <div className='component component3'>
          <h4></h4>
          <p>
          Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
          </p>  
        </div>

      </section>
      <footer>
        <nav className='footer-nav'>
          <a></a>
          <a></a>
          <a></a>
        </nav>
      </footer>
    
    </div>
  );
}

export default App;
