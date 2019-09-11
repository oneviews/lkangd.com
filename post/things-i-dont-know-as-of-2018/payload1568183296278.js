window.__NUXT__=function(e){return{layout:"default",data:[{post:{attributes:{title:"Things I Don’t Know as of 2018",date:"2018-12-28",spoiler:"We can admit our knowledge gaps without devaluing our expertise.",link:e,min2read:"☕️ 7 min read",wordcount:"1.3k"},body:'<p>People often assume that I know far more than I actually do. That’s not a bad problem to have and I’m not complaining. (Folks from minority groups often suffer the opposite bias despite their hard-earned credentials, and that <em>sucks</em>.)</p>\n<p><strong>In this post I’ll offer an incomplete list of programming topics that people often wrongly assume that I know.</strong> I’m not saying <em>you</em> don’t need to learn them — or that I don’t know <em>other</em> useful things. But since I’m not in a vulnerable position myself right now, I can be honest about this.</p>\n<p>Here’s why I think it’s important.</p>\n<hr>\n<p>First, there is often an unrealistic expectation that an experienced engineer knows every technology in their field. Have you seen a “learning roadmap” that consists of a hundred libraries and tools? It’s useful — but intimidating.</p>\n<p>What’s more, no matter how experienced you get, you may still find yourself switching between feeling capable, inadequate (“Impostor syndrome”), and overconfident (“Dunning–Kruger effect”). It depends on your environment, job, personality, teammates, mental state, time of day, and so on.</p>\n<p>Experienced developers sometimes open up about their insecurities to encourage beginners. But there’s a world of difference between a seasoned surgeon who still gets the jitters and a student holding their first scalpel!</p>\n<p>Hearing how “we’re all junior developers” can be disheartening and sound like empty talk to the learners faced with an actual gap in knowledge. Feel-good confessions from well-intentioned practitioners like me can’t bridge it.</p>\n<p>Still, even experienced engineers have many knowledge gaps. This post is about mine, and I encourage those who can afford similar vulnerability to share their own. But let’s not devalue our experience while we do that.</p>\n<p><strong>We can admit our knowledge gaps, may or may not feel like impostors, and still have deeply valuable expertise that takes years of hard work to develop.</strong></p>\n<hr>\n<p>With that disclaimer out of the way, here’s just a few things I don’t know:</p>\n<ul>\n<li>\n<p><strong>Unix commands and Bash.</strong> I can <code>ls</code> and <code>cd</code> but I look up everything else. I get the concept of piping but I’ve only used it in simple cases. I don’t know how to use <code>xargs</code> to create complex chains, or how to compose and redirect different output streams. I also never properly learned Bash so I can only write very simple (and often buggy) shell scripts.</p>\n</li>\n<li>\n<p><strong>Low-level languages.</strong> I understand Assembly lets you store things in memory and jump around the code but that’s about it. I wrote a few lines of C and understand what a pointer is, but I don’t know how to use <code>malloc</code> or other manual memory management techniques. Never played with Rust.</p>\n</li>\n<li>\n<p><strong>Networking stack.</strong> I know computers have IP addresses, and DNS is how we resolve hostnames. I know there’s low level protocols like TCP/IP to exchange packets that (maybe?) ensure integrity. That’s it — I’m fuzzy on details.</p>\n</li>\n<li>\n<p><strong>Containers.</strong> I have no idea about how to use Docker or Kubernetes. (Are those related?) I have a vague idea that they let me spin up a separate VM in a predictable way. Sounds cool but I haven’t tried it.</p>\n</li>\n<li>\n<p><strong>Serverless.</strong> Also sounds cool. Never tried it. I don’t have a clear idea of how that model changes backend programming (if it does at all).</p>\n</li>\n<li>\n<p><strong>Microservices.</strong> If I understand correctly, this just means “many API endpoints talking to each other”. I don’t know what the practical advantages or downsides of this approach are because I haven’t worked with it.</p>\n</li>\n<li>\n<p><strong>Python.</strong> I feel bad about this one — I <em>have</em> worked with Python for several years at some point and I’ve never bothered to actually learn it. There are many things there like import behavior that are completely opaque to me.</p>\n</li>\n<li>\n<p><strong>Node backends.</strong> I understand how to run Node, used some APIs like <code>fs</code> for build tooling, and can set up Express. But I’ve never talked from Node to a database and don’t really know how to write a backend in it. I’m also not familiar with React frameworks like Next beyond a “hello world”.</p>\n</li>\n<li>\n<p><strong>Native platforms.</strong> I tried learning Objective C at some point but it didn’t work out. I haven’t learned Swift either. Same about Java. (I could probably pick it up though since I worked with C#.)</p>\n</li>\n<li>\n<p><strong>Algorithms.</strong> The most you’ll get out of me is bubble sort and maybe quicksort on a good day. I can probably do simple graph traversing tasks if they’re tied to a particular practical problem. I understand the O(n) notation but my understanding isn’t much deeper than “don’t put loops inside loops”.</p>\n</li>\n<li>\n<p><strong>Functional languages.</strong> Unless you count JavaScript, I’m not fluent in any traditionally functional language. (I’m only fluent in C# and JavaScript — and I already forgot most of C#.) I struggle to read either LISP-inspired (like Clojure), Haskell-inspired (like Elm), or ML-inspired (like OCaml) code.</p>\n</li>\n<li>\n<p><strong>Functional terminology.</strong> Map and reduce is as far as I go. I don’t know monoids, functors, etc. I know what a monad is but maybe that’s an illusion.</p>\n</li>\n<li>\n<p><strong>Modern CSS.</strong> I don’t know Flexbox or Grid. Floats are my jam.</p>\n</li>\n<li>\n<p><strong>CSS Methodologies.</strong> I used BEM (meaning the CSS part, not the original BEM) but that’s all I know. I haven’t tried OOCSS or other methodologies.</p>\n</li>\n<li>\n<p><strong>SCSS / Sass.</strong> Never got to learn them.</p>\n</li>\n<li>\n<p><strong>CORS.</strong> I dread these errors! I know I need to set up some headers to fix them but I’ve wasted hours here in the past.</p>\n</li>\n<li>\n<p><strong>HTTPS / SSL.</strong> Never set it up. Don’t know how it works beyond the idea of private and public keys.</p>\n</li>\n<li>\n<p><strong>GraphQL.</strong> I can read a query but I don’t really know how to express stuff with nodes and edges, when to use fragments, and how pagination works there.</p>\n</li>\n<li>\n<p><strong>Sockets.</strong> My mental model is they let computers talk to each other outside the request/response model but that’s about all I know.</p>\n</li>\n<li>\n<p><strong>Streams.</strong> Aside from Rx Observables, I haven’t worked with streams closely. I used old Node streams one or two times but always messed up error handling.</p>\n</li>\n<li>\n<p><strong>Electron.</strong> Never tried it.</p>\n</li>\n<li>\n<p><strong>TypeScript.</strong> I understand the concept of types and can read annotations but I’ve never written it. The few times I tried, I ran into difficulties.</p>\n</li>\n<li>\n<p><strong>Deployment and devops.</strong> I can manage to send some files over FTP or kill some processes but that’s the limit of my devops skills.</p>\n</li>\n<li>\n<p><strong>Graphics.</strong> Whether it’s canvas, SVG, WebGL or low-level graphics, I’m not productive in it. I get the overall idea but I’d need to learn the primitives.</p>\n</li>\n</ul>\n<p>Of course this list is not exhaustive. There are many things that I don’t know.</p>\n<hr>\n<p>It might seem like a strange thing to discuss. It even feels wrong to write it. Am I boasting of my ignorance? My intended takeaway from this post is that:</p>\n<ul>\n<li>\n<p><strong>Even your favorite developers may not know many things that you know.</strong></p>\n</li>\n<li>\n<p><strong>Regardless of your knowledge level, your confidence can vary greatly.</strong></p>\n</li>\n<li>\n<p><strong>Experienced developers have valuable expertise despite knowledge gaps.</strong></p>\n</li>\n</ul>\n<p>I’m aware of my knowledge gaps (at least, some of them). I can fill them in later if I become curious or if I need them for a project.</p>\n<p>This doesn’t devalue my knowledge and experience. There’s plenty of things that I can do well. For example, learning technologies when I need them.</p>\n<blockquote>\n<p>Update: I also <a href="/the-elements-of-ui-engineering/">wrote</a> about a few things that I know.</p>\n</blockquote>\n',frontmatter:"title: Things I Don’t Know as of 2018\ndate: '2018-12-28'\nspoiler: We can admit our knowledge gaps without devaluing our expertise.",link:e,next:{title:"Why Do React Hooks Rely on Call Order?",date:"2018-12-13",spoiler:"Lessons learned from mixins, render props, HOCs, and classes.",link:"/post/why-do-hooks-rely-on-call-order",min2read:"☕️☕️☕️☕️☕️ 24 min read",wordcount:"4k"},prev:{title:"聊聊 2018 年我所不了解的技术",date:"2019-01-01",spoiler:"承认知识缺口，并不会使我们的知识经验贬值。",link:"/post/things-i-dont-know-as-of-2018-zh",min2read:"☕️ 6 min read",wordcount:"2k"}}}],error:null,serverRendered:!0}}("/post/things-i-dont-know-as-of-2018")