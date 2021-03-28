// Test import of a JavaScript function
import { example } from './js/example'

// Test import of an asset
import webpackLogo from './images/webpack-logo.svg'

// Test import of styles
import './styles/index.scss'

// Appending to the DOM
const logo = document.createElement('img')
logo.src = webpackLogo

const heading = document.createElement('h1')
heading.textContent = example()

const app = document.querySelector('#root')
app.append(logo, heading)

function run(wasm) {
  // eslint-disable-next-line no-console
  wasm.browser_debug()
  console.log(wasm.hello())
}

// The new spec for importing webassembly doesn't need this weird
// async stuff... but it's not working too great. So for now
// we need to continue to do this.
import(/* webpackPreload: true */ './wasm/pkg').then(run)
