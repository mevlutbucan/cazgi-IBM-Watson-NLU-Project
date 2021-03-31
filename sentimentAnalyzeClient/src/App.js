import React from "react";
import axios from "axios";

import EmotionTable from "./EmotionTable.js";

import "./bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  state = {
    innercomp: (
      <textarea id="textinput" rows="4" cols="50" placeholder="TEXT" />
    ),
    mode: "text",
    sentimentOutput: [],
    sentiment: true,
  };

  renderTextArea = () => {
    document.getElementById("textinput").value = "";
    if (this.state.mode === "url") {
      this.setState({
        innercomp: (
          <textarea id="textinput" rows="4" cols="50" placeholder="TEXT" />
        ),
        mode: "text",
        sentimentOutput: [],
      });
    }
  };

  renderTextBox = () => {
    document.getElementById("textinput").value = "";
    if (this.state.mode === "text") {
      this.setState({
        innercomp: (
          <textarea id="textinput" rows="1" cols="50" placeholder="URL" />
        ),
        mode: "url",
        sentimentOutput: [],
      });
    }
  };

  sendForSentimentAnalysis = () => {
    this.setState({ sentiment: true });

    let url = ".";
    if (this.state.mode === "url") {
      url =
        url +
        "/url/sentiment?url=" +
        document.getElementById("textinput").value;
    } else {
      url =
        url +
        "/text/sentiment?text=" +
        document.getElementById("textinput").value;
    }
    axios.get(url).then((response) => {
      let output;
      if (typeof response.data === "string") {
        output = <div>{response.data}</div>;
      } else if (response.data.label === "positive") {
        output = <div style={{ color: "green", fontSize: 20 }}>POSITIVE</div>;
      } else if (response.data.label === "negative") {
        output = <div style={{ color: "red", fontSize: 20 }}>NEGATIVE</div>;
      } else {
        output = <div style={{ color: "orange", fontSize: 20 }}>NEUTRAL</div>;
      }
      this.setState({ sentimentOutput: output });
    });
  };

  sendForEmotionAnalysis = () => {
    this.setState({ sentiment: false });

    let url = ".";
    if (this.state.mode === "url") {
      url =
        url + "/url/emotion?url=" + document.getElementById("textinput").value;
    } else {
      url =
        url +
        "/text/emotion/?text=" +
        document.getElementById("textinput").value;
    }
    axios.get(url).then((response) => {
      if (typeof response.data === "string") {
        this.setState({
          sentimentOutput: <div>{response.data}</div>,
        });
      } else
        this.setState({
          sentimentOutput: <EmotionTable emotions={response.data.emotion} />,
        });
    });
  };

  render() {
    return (
      <div className="App">
        <button className="btn btn-info" onClick={this.renderTextArea}>
          Text
        </button>
        <button className="btn btn-dark" onClick={this.renderTextBox}>
          URL
        </button>
        <br />
        <br />
        {this.state.innercomp}
        <br />
        <button className="btn-primary" onClick={this.sendForSentimentAnalysis}>
          Analyze Sentiment
        </button>
        <button className="btn-primary" onClick={this.sendForEmotionAnalysis}>
          Analyze Emotion
        </button>
        <br />
        {this.state.sentimentOutput}
      </div>
    );
  }
}

export default App;
