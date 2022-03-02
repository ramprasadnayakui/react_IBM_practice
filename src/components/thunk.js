import React from "react";


export default function thunk() {
  const style={ backgroundColor: 'black', color: 'white' }
    return (
      <div>
        <p>
          Action creators create objects of "type" and "payload", as "type" takes a string its better to declare it constant to avoid redundancy → objects/actions are dispatched to the store → the store invokes reducers and  forwards a message (the action object) to the reducer → reducers generate new state → listeners are notified of state updates.
        </p>
        <p>
          Redux Thunk is a middeware library that sits in between dispatched actions and the reducer. When it sees a thunk is dispatched, it passes some methods into the returned function that can be used to dispatch further actions, like a success or error event.
        </p>
        <p>A Redux middleware is a function that is able to intercept, and act accordingly, our actions, before they reach the reducer</p>
        <p>In its basic form <strong>a Redux middleware is a function returning a function, which takes next as a parameter. Then the inner function returns another function which takes action as a parameter and finally returns</strong> <code className="language-text">next(action)</code>. Here's how it looks like:</p>
        <div data-language="javascript" style={style}>
          <pre>
            <code className="language-javascript">
              <span>function thunkMiddleware</span>
              <span>(</span>
              <span>)</span> 
              <span>&#123;</span>
            <p>
              <span>return </span>
              <span >function</span>
              <span>(</span>
              <span>next</span>
              <span >)</span>
              <span>&#123;</span>
            </p>
            
              <span>return </span>
              <span>function</span>
              <span>(</span>
              <span>action</span>
              <span>)</span>
              <span>&#123;</span>
            
            <p>
              <span>// do your stuff</span>
            </p>
            
              <span>return </span>
              <span>next</span>
              <span>(</span>action<span>)</span><span >;</span>
            <p>
              &#125;
              &#125;
              &#125;
            </p>
            </code>
          </pre>
        </div>
        <p>This last point is really important: you should always call <code className="language-text">next(action)</code> in your middleware. If you forget it, Redux stops, and no other action will reach the reducer. <code className="language-text">next(action)</code> moves the application forward by <strong>calling the next middleware in the chain</strong>.</p>
        <div data-language="javascript" style={style}>
          <pre>
            <code className="language-javascript">
              <span>function thunkMiddleware</span>
              <span>(</span>getState, dispatch
              <span>)</span> 
              <span>&#123;</span>
            <p>
              <span>return </span>
              <span >function</span>
              <span>(</span>
              <span>next</span>
              <span >)</span>
              <span>&#123;</span>
            </p>
            
              <span>return </span>
              <span>function</span>
              <span>(</span>
              <span>action</span>
              <span>)</span>
              <span>&#123;</span>
            
            <p>
              <span>// do your stuff</span>
            </p>
            
              <span>return </span>
              <span>next</span>
              <span>(</span>action<span>)</span><span >;</span>
            <p>
              &#125;
              &#125;
              &#125;
            </p>
            </code>
          </pre>
        </div>
        <p>What's also interesting is that the middleware doesn't exit after <code className="language-text">next(action)</code>. If you're interested in <strong>reading the next state of the app after the middleware chain runs</strong> you can capture it with <code className="language-text">getState</code> after <code className="language-text">next(action)</code>:</p>
        <div data-language="javascript" style={style}>
          <pre>
            <code className="language-javascript">
              <span>function thunkMiddleware</span>
              <span>(</span>getState, dispatch
              <span>)</span> 
              <span>&#123;</span>
            <p>
              <span>return </span>
              <span >function</span>
              <span>(</span>
              <span>next</span>
              <span >)</span>
              <span>&#123;</span>
            </p>
            
              <span>return </span>
              <span>function</span>
              <span>(</span>
              <span>action</span>
              <span>)</span>
              <span>&#123;</span>
            
            <p>
              <span>// do your stuff</span>
            </p>
            const nextAction = next(action);
            <p>// read the next state</p>
            const state = getState();
            <p>// return the next action</p>
            
              <span>return </span>
              <span>next</span>
              <span>(</span>action<span>)</span><span >;</span>
            <p>
              &#125;
              &#125;
              &#125;
            </p>
            </code>
          </pre>
        </div>
        <p>The middlewareshould inspect the action's payload. There are a lot of <strong>benefits from using a Redux middleware</strong>:</p>
        <ul>
        <li>most of the logic can live outside the UI library</li>
        <li>middleware become reusable pieces of logic, easy to reason about</li>
        <li>middleware can be tested in isolation</li>
        </ul>  
        <p>There is no better place than a middleware for abstracting away business logic</p>  
        <hr /> 
        <p>
          Wishing the above part has been clear and now we can say we understand what is Redux Thunk, lets talk about a small example.
          Let's say we want to dispatch an action that changes a title of the page but before the reducer gets this command from the store, we want our middleware to put a logic and check if the tilte has any bad word.
        </p>
        <p>Here’s what the middleware does: when action type is <code className="language-text">ADD_ARTICLE</code> check if <code className="language-text">action.payload.title</code> contains a bad word. If it does then dispatch an action of type <code className="language-text">FOUND_BAD_WORD</code>, otherwise <strong>let the next middleware run</strong>.</p>
        <div data-language="javascript" style={style}>
          <pre>
            <code className="language-javascript">
              <span>import &#123; ADD_ARTICLE &#125; from "../constants/action-types";
              </span><br />
              <span>const forbiddenWords = ["spam", "money"];
              </span><br />
              <span>function thunkMiddleware</span>
              <span>(&#123;</span>dispatch
              <span>&#125;)</span> 
              <span>&#123;</span>
            <p>
              <span>return </span>
              <span >function</span>
              <span>(</span>
              <span>next</span>
              <span >)</span>
              <span>&#123;</span>
            </p>
            
              <span>return </span>
              <span>function</span>
              <span>(</span>
              <span>action</span>
              <span>)</span>
              <span>&#123;</span>
            
            <p>
              <span>// do your stuff</span>
            </p>
            <span>if (action.type === ADD_ARTICLE) &#123;
              </span><br />
              <span> const foundWord = forbiddenWords.filter(word =&#62;
              </span><br />
              <span> action.payload.title.includes(word)
              </span><br />
              <span>);
              </span><br />
              <span>if (foundWord.length) &#123;
              </span><br />
              <span>return dispatch(&#123; type: "FOUND_BAD_WORD" &#125;);
              </span><br />
              <span>&#125;&#125;
              </span><br />
            <p>// return the next action</p>
            
              <span>return </span>
              <span>next</span>
              <span>(</span>action<span>)</span><span >;</span>
            <p>
              &#125;
              &#125;
              &#125;
            </p>
            </code>
          </pre>
        </div>
        <p>Now, time to wire up <code className="language-text">forbiddenWordsMiddleware</code> to the Redux store. For that we need to import our middleware, another utility from Redux (applyMiddleware), and then cook everything together.</p>
        <p>Open up <code className="language-text">src/js/store/index.js</code> and modify the file like so:</p>
        <div data-language="javascript" style={style}>
          <pre>
            <code className="language-javascript">
            <span>import &#123; createStore, applyMiddleware  &#125; from "redux";
              </span><br />
              <span>import rootReducer from "../reducers/index";
              </span><br />
              <span>import &#123; thunkMiddleware  &#125; from "../middleware";
              </span><br />
              <span>const store = createStore( rootReducer, applyMiddleware(thunkMiddleware) );
              </span><br />
            <p>
            export default store;
            </p>
            </code>
          </pre>
        </div>
      </div>
    )
}