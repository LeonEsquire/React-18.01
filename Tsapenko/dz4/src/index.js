import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

import Blog from "./app/components/Blog";
import WelcomeModal from "./app/components/WelcomeModal";
import "./app/style/style.css";

class App extends React.Component {
  render() {
    const posts = [
      {
        title: "First post",
        postBody: "Draw from upon here gone add one. Is inquiry no he several excited am. An stairs as be lovers uneasy. Any delicate you how kindness horrible outlived servants. Am wound worth water he linen at vexed.. Strictly numerous outlived kindness whatever on we no on addition. Is inquiry no he several excited am. Bed uncommonly his discovered",
      },
      {
        title: "Second post",
        postBody: "Dissimilar admiration so terminated no in contrasted it. At none neat am do over will. Steepest speaking up attended it as. Fortune day out married parties. Her too add narrow having wished. Dissimilar admiration so terminated no in contrasted it. Indulgence contrasted sufficient to unpleasant in in insensible favour",
      },
      {
        title: "Third post",
        postBody: "Limits far yet turned highly repair parish talked six. Advantages entreaties mr he apartments do. He in sportsman household otherwise it perceived instantly. Mirth learn it he given. Estate was tended ten boy nearer seemed. Hard do me sigh with west same lady. You high bed wish help call draw side. So by colonel hearted ferrars. Called thou",
      }
    ];

    return (
      <div>
        <Blog posts={posts} />
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <App />
    <WelcomeModal />
  </div>,
  document.getElementById("root")
);