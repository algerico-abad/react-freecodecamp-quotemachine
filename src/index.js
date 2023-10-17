import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ReactComponent as ICON_QUOTE} from './assets/svg/quote.svg'
import {ReactComponent as ICON_TUMBLR} from './assets/svg/tumblr.svg'
import {ReactComponent as ICON_TWITTER} from './assets/svg/twitter-x.svg'
import reportWebVitals from './reportWebVitals';

const QUOTES = [
  {
    text: `If I may be so bold, defective merchandise can often be fixed with the slightest of alterations. That is my feeling on the matter.`,
    author: `Suzune Horikita`
  },
  {
    text: `Most people possessed both a public face and a private inner self after all.`,
    author: `Ayanokouji Kiyotaka`
  },
  {
    text: `For better or for worse, I’ve lived my life making sure to not stir anything up. Being a ‘role model’. Being ‘exemplary’. I believed that to be the right thing to do and never once questioned it.`,
    author: `Manabu Horikita`
  },
  {
    text: `Coincidence can be freaky.`,
    author: `Ayanokouji Kiyotaka`
  },
  {
    text: `I will always do my very best to answer everyone else’s calls, no matter who they are. Even if one day, I may end up getting strangled by it all.`,
    author: `Honami Ichinose`
  },
  {
    text: `It doesn’t matter how it’s done. It doesn’t matter what needs to be sacrificed. In this world, winning is everything.`,
    author: `Ayanokouji Kiyotaka`
  },
  {
    text: `From where I stand, I’d say society is certainly not equal. Not a bit.`,
    author: `Chabashira Sae`
  },
  {
    text: `Confessing your feelings to someone isn’t an easy thing. You spend every day in anguish, yet you still can’t do it. The words “I love you” hang in your throat, and you can’t seem to force them out. I think her earnest feelings deserve a proper answer, don’t you?`,
    author: `Ayanokouji Kiyotaka`
  },
  {
    text: `As usual, you’ve mistaken isolation for independence.`,
    author: `Manabu Horikita`
  },
  {
    text: `If a person ever claims to live their life without telling a lie, their life itself is probably a lie.`,
    author: `Ayanokouji Kiyotaka`
  },
  {
    text: `Normally, I dislike playing with others as a team, but miraculously, I was able to make it work in the case of basketball.`,
    author: `Ken Sudo`
  },
  {
    text: `Smiling means letting your guard down in front of another person, even if just a little.`,
    author: `Ayanokouji Kiyotaka`
  },
  {
    text: `I, for one, feel no need to make friends.`,
    author: `Suzune Horikita`
  },
  {
    text: `I’ve never once thought of you as an ally. Not you. Not Kushida. Not Hirata. All people are nothing but tools.`,
    author: `Ayanokouji Kiyotaka`
  },
  {
    text: `I don’t like expending more effort than I have to.`,
    author: `Ayanokouji Kiyotaka`
  },
  {
    text: `Being alone is not synonymous with being lonely.`,
    author: `Suzune Horikita`
  },
  {
    text: `Every individual has his or her own strengths and weaknesses. That’s what it means to be human.`,
    author: `Ayanokouji Kiyotaka`
  },
  {
    text: `If you worried too much, you’d likely miss out on something important and suffer for it.`,
    author: `Ayanokouji Kiyotaka`
  },
  {
    text: `So. “Am I a perfect human being?” If you ask me that, the answer would be ‘no’.`,
    author: `Kikyo Kushida`
  },
  {
    text: `What might seem trivial to one person could be quite difficult for another, depending on their issues.`,
    author: `Ayanokouji Kiyotaka`
  }
]

function requestQuote() {
  let index = Math.floor(Math.random() * QUOTES.length)
  return QUOTES[index]
}

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props)
    const index = Math.floor(Math.random() * QUOTES.length)
    this.state = {
      text: QUOTES[index].text,
      author: QUOTES[index].author
    }
    this.DisplayNewQuote = this.DisplayNewQuote.bind(this)
  }

  DisplayNewQuote() {
    const quote = requestQuote()
    this.setState({
      text: quote.text,
      author: quote.author
    })
    this.setState((state) => ({
      
    }))
  }

  render() {
    return(
      <div id='quote-box'>
        <ICON_QUOTE id='icon_quote'/>
        <div id='text'>{this.state.text}</div>
        <div id='author'>- {this.state.author} -</div>
        <button id='new-quote' onClick={this.DisplayNewQuote}>New Quote</button>
        <div className='row' style={{
          marginTop: '60px',
          gap: '20px'
        }}>
          <a id='tweet-quote' href={`https://twitter.com/intent/tweet?text=${this.state.text}%0a%0a- ${this.state.author}`}>
            <ICON_TWITTER/>
          </a>
        </div>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QuoteMachine />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
