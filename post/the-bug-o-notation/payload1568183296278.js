window.__NUXT__=function(e,t,n){return{layout:"default",data:[{post:{attributes:{title:"The “Bug-O” Notation",date:t,spoiler:"What is the 🐞(<i>n</i>) of your API?",link:n,min2read:"☕️ 7 min read",wordcount:"1.2k"},body:"<p>When you write performance-sensitive code, it’s a good idea to keep in mind its algorithmic complexity. It is often expressed with the <a href=\"https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/\">Big-O notation</a>.</p>\n<p>Big-O is a measure of <strong>how much slower the code will get as you throw more data at it</strong>. For example, if a sorting algorithm has O(<i>n<sup>2</sup></i>) complexity, sorting ×50 times more items will be roughly 50<sup>2</sup> = 2,500 times slower. Big O doesn’t give you an exact number, but it helps you understand how an algorithm <em>scales</em>.</p>\n<p>Some examples: O(<i>n</i>), O(<i>n</i> log <i>n</i>), O(<i>n<sup>2</sup></i>), O(<i>n!</i>).</p>\n<p>However, <strong>this post isn’t about algorithms or performance</strong>. It’s about APIs and debugging. It turns out, API design involves very similar considerations.</p>\n<hr>\n<p>A significant part of our time goes into finding and fixing mistakes in our code. Most developers would like to find bugs faster. As satisfactory as it may be in the end, it sucks to spend the whole day chasing a single bug when you could have implemented something from your roadmap.</p>\n<p>Debugging experience influences our choice of abstractions, libraries, and tools. Some API and language designs make a whole class of mistakes impossible. Some create endless problems. <strong>But how can you tell which one is which?</strong></p>\n<p>Many online discussions about APIs are primarily concerned with aesthetics. But that <a href=\"/optimized-for-change/\">doesn’t say much</a> about what it feels like to use an API in practice.</p>\n<p><strong>I have a metric that helps me think about this. I call it the <em>Bug-O</em> notation:</strong></p>\n<p><font size=\"40\">🐞(<i>n</i>)</font></p>\n<p>The Big-O describes how much an algorithm slows down as the inputs grow. The <em>Bug-O</em> describes how much an API slows <em>you</em> down as your codebase grows.</p>\n<hr>\n<p>For example, consider this code that manually updates the DOM over time with imperative operations like <code>node.appendChild()</code> and <code>node.removeChild()</code> and no clear structure:</p>\n<pre   class=\"language-jsx\"><code class=\"language-jsx\">function trySubmit() {\n  // Section 1\n  let spinner = createSpinner();\n  formStatus.appendChild(spinner);\n  submitForm().then(() =&gt; {\n  \t// Section 2\n    formStatus.removeChild(spinner);\n    let successMessage = createSuccessMessage();\n    formStatus.appendChild(successMessage);\n  }).catch(error =&gt; {\n  \t// Section 3\n    formStatus.removeChild(spinner);\n    let errorMessage = createErrorMessage(error);\n    let retryButton = createRetryButton();\n    formStatus.appendChild(errorMessage);\n    formStatus.appendChild(retryButton)\n    retryButton.addEventListener('click', function() {\n      // Section 4\n      formStatus.removeChild(errorMessage);\n      formStatus.removeChild(retryButton);\n      trySubmit();\n    });\n  })\n}\n</code></pre><p>The problem with this code isn’t that it’s “ugly”. We’re not talking about aesthetics. <strong>The problem is that if there is a bug in this code, I don’t know where to start looking.</strong></p>\n<p><strong>Depending on the order in which the callbacks and events fire, there is a combinatorial explosion of the number of codepaths this program could take.</strong> In some of them, I’ll see the right messages. In others, I’ll see multiple spinners, failure and error messages together, and possibly crashes.</p>\n<p>This function has 4 different sections and no guarantees about their ordering. My very non-scientific calculation tells me there are 4×3×2×1 = 24 different orders in which they could run. If I add four more code segments, it’ll be 8×7×6×5×4×3×2×1 — <em>forty thousand</em> combinations. Good luck debugging that.</p>\n<p><strong>In other words, the Bug-O of this approach is 🐞(<i>n!</i>)</strong> where <em>n</em> is the number of code segments touching the DOM. Yeah, that’s a <em>factorial</em>. Of course, I’m not being very scientific here. Not all transitions are possible in practice. But on the other hand, each of these segments can run more than once. <span style=\"word-break: keep-all\">🐞(<em>¯\\_(ツ)_/¯</em>)</span> might be more accurate but it’s still pretty bad. We can do better.</p>\n<hr>\n<p>To improve the Bug-O of this code, we can limit the number of possible states and outcomes. We don't need any library to do this. It’s just a matter of enforcing some structure on our code. Here is one way we could do it:</p>\n<pre   class=\"language-jsx\"><code class=\"language-jsx\">let currentState = {\n  step: 'initial', // 'initial' | 'pending' | 'success' | 'error'\n};\n\nfunction trySubmit() {\n  if (currentState.step === 'pending') {\n    // Don't allow to submit twice\n    return;\n  }\n  setState({ step: 'pending' });\n  submitForm().then(() =&gt; {\n    setState({ step: 'success' });\n  }).catch(error =&gt; {\n    setState({ step: 'error', error });\n  });\n}\n\nfunction setState(nextState) {\n  // Clear all existing children\n  formStatus.innerHTML = '';\n\n  currentState = nextState;\n  switch (nextState.step) {\n    case 'initial':\n      break;\n    case 'pending':\n      formStatus.appendChild(spinner);\n      break;\n    case 'success':\n      let successMessage = createSuccessMessage();\n      formStatus.appendChild(successMessage);\n      break;\n    case 'error':\n      let errorMessage = createErrorMessage(nextState.error);\n      let retryButton = createRetryButton();\n      formStatus.appendChild(errorMessage);\n      formStatus.appendChild(retryButton);\n      retryButton.addEventListener('click', trySubmit);\n      break;\n  }\n}\n</code></pre><p>This code might not look too different. It’s even a bit more verbose. But it is <em>dramatically</em> simpler to debug because of this line:</p>\n<pre data-line=\"3,\"  3=\"\" class=\"language-jsx\"><code 3=\"\" class=\"language-jsx\">function setState(nextState) {\n  // Clear all existing children\n  formStatus.innerHTML = '';\n\n  // ... the code adding stuff to formStatus ...\n</code></pre><p>By clearing out the form status before doing any manipulations, we ensure that our DOM operations always start from scratch. This is how we can fight the inevitable <a href=\"/the-elements-of-ui-engineering/\">entropy</a> — by <em>not</em> letting the mistakes accumulate. This is the coding equivalent of “turning it off and on again”, and it works amazingly well.</p>\n<p><strong>If there is a bug in the output, we only need to think <em>one</em> step back — to the previous <code>setState</code> call.</strong> The Bug-O of debugging a rendering result is 🐞(<em>n</em>) where <em>n</em> is the number of rendering code paths. Here, it’s just four (because we have four cases in a <code>switch</code>).</p>\n<p>We might still have race conditions in <em>setting</em> the state, but debugging those is easier because each intermediate state can be logged and inspected. We can also disallow any undesired transitions explicitly:</p>\n<pre   class=\"language-jsx\"><code class=\"language-jsx\">function trySubmit() {\n  if (currentState.step === 'pending') {\n    // Don't allow to submit twice\n    return;\n  }\n</code></pre><p>Of course, always resetting the DOM comes with a tradeoff. Naïvely removing and recreating the DOM every time would destroy its internal state, lose focus, and cause terrible performance problems in larger applications.</p>\n<p>That’s why libraries like React can be helpful. They let you <em>think</em> in the paradigm of always recreating the UI from scratch without necessarily doing it:</p>\n<pre   class=\"language-jsx\"><code class=\"language-jsx\">function FormStatus() {\n  let [state, setState] = useState({\n    step: 'initial'\n  });\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    if (state.step === 'pending') {\n      // Don't allow to submit twice\n      return;\n    }\n    setState({ step: 'pending' });\n    submitForm().then(() =&gt; {\n      setState({ step: 'success' });\n    }).catch(error =&gt; {\n      setState({ step: 'error', error });\n    });\n  }\n\n  let content;\n  switch (state.step) {\n    case 'pending':\n      content = &lt;Spinner /&gt;;\n      break;\n    case 'success':\n      content = &lt;SuccessMessage /&gt;;\n      break;\n    case 'error':\n      content = (\n        &lt;&gt;\n          &lt;ErrorMessage error={state.error} /&gt;\n          &lt;RetryButton onClick={handleSubmit} /&gt;\n        &lt;/&gt;\n      );\n      break;\n  }\n\n  return (\n    &lt;form onSubmit={handleSubmit}&gt;\n      {content}\n    &lt;/form&gt;\n  );\n}\n</code></pre><p>The code may look different, but the principle is the same. The component abstraction enforces boundaries so that you know no <em>other</em> code on the page could mess with its DOM or state. Componentization helps reduce the Bug-O.</p>\n<p>In fact, if <em>any</em> value looks wrong in the DOM of a React app, you can trace where it comes from by looking at the code of components above it in the React tree one by one. No matter the app size, tracing a rendered value is 🐞(<em>tree height</em>).</p>\n<p><strong>Next time you see an API discussion, consider: what is the 🐞(<em>n</em>) of common debugging tasks in it?</strong> What about existing APIs and principles you’re deeply familiar with? Redux, CSS, inheritance — they all have their own Bug-O.</p>\n<hr>\n",frontmatter:"title: The “Bug-O” Notation\ndate: '2019-01-25'\nspoiler: What is the 🐞(<i>n</i>) of your API?",link:n,next:{title:"UI工程的要素",date:"2018-12-30",spoiler:"UI工程的困难之处?",featured:!0,link:"/post/the-elements-of-ui-engineering-zh",min2read:"☕️☕️ 11 min read",wordcount:"3.3k"},prev:{title:"“Bug-O” 表示法",date:t,spoiler:"你的 API 的 🐞(<i>n</i>) 是什么？",featured:!0,link:"/post/the-bug-o-notation-zh",min2read:"☕️ 6 min read",wordcount:"1.7k"}}}],error:null,serverRendered:!0}}(0,"2019-01-25","/post/the-bug-o-notation")