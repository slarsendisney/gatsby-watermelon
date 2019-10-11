# 🍉 Gatsby Watermelon Boilerplate

A **GatsbyJS** boilerplate with **Redux** and **socket.io** all wrapped up nicely in an **Express** server. This project is meant to help people 

### Quick Start

```
npx -p yo -p generator-sld -- yo sld:watermelon
```

##### What is Gatsby?

_"Gatsby is a blazing fast modern site generator for React."_ 

[Read the docs.](https://www.gatsbyjs.org/docs/)

##### What is Redux?

_"Redux is a predictable state container for JavaScript apps"_

[Read the docs](https://redux.js.org/introduction/getting-started)

##### What is Express?

_"Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."_

[Read the docs.](https://expressjs.com/en/starter/hello-world.html)


##### Project Structure

```
gatsby-watermelon
scripts
┃ hello.js
┣ server
┃  ┗index.js
┗ src
   ┣ components
   ┃ ┣ Hero.js
   ┃ ┣ SocketExample.js
   ┃ ┣ header.js
   ┃ ┣ layout.js
   ┃ ┗ seo.js
   ┣ data
   ┃ ┗ Start.json
   ┣ images
   ┃ ┣ watermelon.png
   ┃ ┗ watermelon.svg
   ┣ pages
   ┃ ┣ 404.js
   ┃ ┗ index.js
   ┣ state
   ┃ ┣ createStore.js
   ┃ ┗ wrapWithProvider.js
   ┗ styles
     ┣ _flex.scss
     ┣ border.scss
     ┣ button.scss
     ┣ colors.scss
     ┣ global.scss
     ┣ hero.scss
     ┣ layout.scss
     ┣ link.scss
     ┣ margin_padding.scss
     ┣ opacity.scss
     ┗ vars.scss
```

This boilerplate was built with ❤️ by SLD. I try my best to maintain the project but if you notice any issues, or if you need any help - [hit me up!](https://sld.codes)
