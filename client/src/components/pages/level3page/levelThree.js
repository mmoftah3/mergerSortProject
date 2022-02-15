import React, { Component } from "react";
import incorrectSfx from "../../../sounds/wrong.mp3";
import correctSfx from "../../../sounds/correct.mp3";
import styles from "./levelThree.css";
import {
  Random,
  checkFeedbackCorrect,
  checkFeedbackCorrect1,
  checkFeedbackWrong,
  Next2,
  checkFeedbackCorrect2,
  checkFeedbackCorrect3,
  checkFeedbackCorrect4,
  Next3,
  Next1,
} from "./Level3Functions";
export default class LevelThree extends Component {
  // verify user response
  checkResponse = async (e) => {
    e.preventDefault();
    const response = await fetch("/check-answer", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const body = await response.text();
    alert(body);
    console.log(body);
    this.setState({ userResponse: body });
  };

  state = {
    // Get audio files in a variable
    incorrectSound: new Audio(incorrectSfx),
    correctSound: new Audio(correctSfx),

    // State for user response
    incorrect: true,
    correct: false,
  };

  playSound = () => {
    // Get state of user response
    let incorrect = this.state.incorrect;
    let correct = this.state.correct;

    if (incorrect && !correct) {
      // Play correct sound if user response is right
      this.state.incorrectSound.pause();
      this.state.correctSound.play();
    } else {
      // Play incorrect sound if user response is wrong
      this.state.correctSound.pause();
      this.state.incorrectSound.play();
    }

    // Change the state of user answer later
    this.setState({ incorrect: !incorrect });
    this.setState({ correct: !correct });
  };

  render() {
    return (
      <div>
        <div className="header1">
          <h1>Level 3: MergeSort Algorithm</h1>
        </div>
        <div>
          <button className="home">Home</button>
          <span style={{ display: "inline-block", width: "20px" }}></span>
          <button className="back">Back</button>
          <span style={{ display: "inline-block", width: "20px" }}></span>
          {/* 
                  {/* <!-- button for first step  --> */}
          <button id="next" className="home" value="Start" onClick={Random}>
            Next
          </button>
          <span style={{ display: "inline-block", width: "20px" }}></span>
          <button className="restart">Restart</button>
          <span style={{ display: "inline-block", width: "20px" }}></span>
          <button className="quit">Quit</button>
        </div>
        <div className="instruction1">
          <h3> Click on the button to Start</h3>
        </div>
        <div className="randomdiv">
          <input
            type="button"
            className="random"
            value="Random Number"
            onClick={Random}
          />
        </div>
        <form name="rn">
          {/* <!--step1 --> */}
          <div className="hide" id="showStep1">
            <input
              type="text"
              id="step1"
              name="step1"
              size="80"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            />

            <div className="blockofnum">
              <input type="number" id="tb" value="Random Number!" readOnly />
              <input type="number" id="tb2" value="Random Number!" readOnly />
              <input type="number" id="tb3" value="Random Number!" readOnly />
              <input type="number" id="tb4" value="Random Number!" readOnly />
              <input
                type="number"
                id="tb5"
                value="Random Number!"
                // onClick={checkFeedbackCorrect}
                readOnly
              />
              <input type="number" id="tb6" value="Random Number!" readOnly />
              <input type="number" id="tb7" value="Random Number!" readOnly />
              <input type="number" id="tb8" value="Random Number!" readOnly />
              <input type="number" id="tb9" value="Random Number!" readOnly />
              <input type="number" id="tb10" value="Random Number!" readOnly />
            </div>
            <h3>Choose your next step</h3>
            <input
              type="button"
              className="nextStep"
              value="Merge Array"
              //go to the next step
              onClick={checkFeedbackWrong}
            />

            <span style={{ display: "inline-block", width: "20px" }}></span>
            <input
              type="button"
              className="nextStep"
              value="Split Array"
              //go to the next step
              onClick={checkFeedbackCorrect}
            />
          </div>
          {/* first place to split */}
          <div className="hide" id="Split1">
            <h5 id="right" style={{ color: "black" }}>
              {" "}
              Click where you want to split the array on the yellow space
            </h5>
            <h6 id="right" style={{ color: "black" }}>
              {" "}
              Hint: you must split all the groups in each step to be able to
              move to the next one
            </h6>

            <div className="blockofnum">
              <input type="number" id="n1" value="Random Number!" readOnly />

              <input
                type="number"
                className="split"
                id="n1space"
                value=""
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <input type="number" id="n2" value="Random Number!" readOnly />

              <input
                type="number"
                id="n2space"
                className="split"
                value=""
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <input type="number" id="n3" value="Random Number!" readOnly />
              <input
                type="number"
                id="n3space"
                className="split"
                value=""
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <input type="number" id="n4" value="Random Number!" readOnly />
              <input
                type="number"
                id="n4space"
                className="split"
                value=""
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />

              <input type="number" id="n5" value="Random Number!" readOnly />
              <input
                type="number"
                id="n5space"
                className="split"
                value=""
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackCorrect1}
                readOnly
              />
              <input type="number" id="n6" value="Random Number!" readOnly />
              <input
                type="number"
                id="n6space"
                className="split"
                value=""
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />

              <input type="number" id="n7" value="Random Number!" readOnly />
              <input
                type="number"
                id="n7space"
                value=""
                className="split"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <input type="number" id="n8" value="Random Number!" readOnly />
              <input
                type="number"
                id="n8space"
                value=""
                className="split"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <input type="number" id="n9" value="Random Number!" readOnly />
              <input
                type="number"
                id="n9space"
                value=""
                className="split"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <input type="number" id="n10" value="Random Number!" readOnly />
            </div>
          </div>
          {/* 

          split 2 */}
          <div className="hide" id="split2">
            <div className="blockofnum">
              <input type="number" id="n12" name="n1" size="1" readOnly />
              <input
                type="number"
                id="n12space"
                value=""
                className="split"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <input type="number" id="n22" name="n2" size="1" readOnly />
              <input
                type="number"
                id="n22space"
                value=""
                className="split"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <input type="number" id="n32" name="n32" size="1" readOnly />
              <input
                type="number"
                id="n32space"
                value=""
                className="split"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackCorrect2}
                readOnly
              />

              <input type="number" id="n42" name="n4" size="1" readOnly />
              <input
                type="number"
                id="n42space"
                value=""
                className="split"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <input type="number" id="n52" name="n2" size="1" readOnly />

              <span style={{ display: "inline-block", width: "200px" }}></span>

              <input type="number" id="n62" name="n2" size="1" readOnly />
              <input
                type="number"
                id="n62space"
                value=""
                className="split"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <input type="number" id="n72" name="n2" size="1" readOnly />
              <input
                type="number"
                id="n72space"
                value=""
                className="split"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <input type="number" id="n82" name="n2" size="1" readOnly />
              <input
                type="number"
                id="n82space"
                value=""
                className="split"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackCorrect3}
                readOnly
              />
              <input type="number" id="n92" name="n2" size="1" readOnly />
              <input
                type="number"
                id="n92space"
                value=""
                className="split"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <input type="number" id="n102" name="n2" size="1" readOnly />
            </div>

            {/* split 3 */}
            <div className="hide" id="split3">
              <div className="blockofnum">
                <input type="number" id="num1" name="n1" size="1" readOnly />
                <input
                  type="number"
                  id="n92space"
                  value=""
                  className="split"
                  style={{ backgroundColor: "yellow" }}
                  onClick={checkFeedbackWrong}
                  readOnly
                />
                <input type="number" id="num2" name="n2" size="1" readOnly />
                <input
                  type="number"
                  id="space13"
                  value=""
                  className="split"
                  style={{ backgroundColor: "yellow" }}
                  onClick={checkFeedbackCorrect4}
                  readOnly
                />
                <input type="number" id="num3" name="n3" size="1" readOnly />

                <span style={{ display: "inline-block", width: "70px" }}></span>

                <input type="number" id="num4" name="n4" size="1" readOnly />
                <input
                  type="number"
                  id="space23"
                  value=""
                  className="split"
                  style={{ backgroundColor: "yellow" }}
                  onClick={checkFeedbackCorrect4}
                  readOnly
                />
                <input type="number" id="num5" name="n4" size="1" readOnly />

                <span
                  style={{ display: "inline-block", width: "100px" }}
                ></span>

                <input type="number" id="num6" name="n1" size="1" readOnly />
                <input
                  type="number"
                  id="n92space"
                  value=""
                  className="split"
                  style={{ backgroundColor: "yellow" }}
                  onClick={checkFeedbackWrong}
                  readOnly
                />
                <input type="number" id="num7" name="n2" size="1" readOnly />
                <input
                  type="number"
                  id="space33"
                  value=""
                  className="split"
                  style={{ backgroundColor: "yellow" }}
                  onClick={checkFeedbackCorrect4}
                  readOnly
                />
                <input type="number" id="num8" name="n2" size="1" readOnly />

                <span
                  style={{ display: "inline-block", width: "100px" }}
                ></span>

                <input type="number" id="num9" name="n2" size="1" readOnly />
                <input
                  type="number"
                  id="space43"
                  value=""
                  className="split"
                  style={{ backgroundColor: "yellow" }}
                  onClick={checkFeedbackCorrect4}
                  readOnly
                />
                <input type="number" id="num10" name="n2" size="1" readOnly />
              </div>
            </div>
          </div>
          <div className="hide" id="fedback1">
            <input
              type="button"
              id="feedbackcorrect"
              name="feedback"
              size="80"
              style={{ color: "green" }}
              readOnly
            />
          </div>
          <div className="hide" id="fedback2">
            <input
              type="button"
              id="feedbackwrong"
              name="feedback"
              size="80"
              style={{ color: "red" }}
              readOnly
            />
          </div>
          <div className="hide" id="Next">
            <input
              type="button"
              id="next"
              value="Next"
              //go to the next step
              onClick={Next1}
            />
          </div>
          <input
            className="hide"
            type="button"
            id="next2"
            value="Next"
            //go to the next step
            onClick={Next2}
          />
          <input
            className="hide"
            type="button"
            id="next3"
            value="Next"
            //go to the next step
            onClick={Next3}
          />
          <input
            className="hide"
            type="button"
            id="next4"
            value="Next"
            //go to the next step
            style={{ backgroundColor: "orange" }}
            onClick={Next3}
          />
          {/* <h4 class="hide" id="right">
              Correct answer!{" "}
            </h4> */}{" "}
        </form>
        <div className="footer"></div>
        <div className="footer"></div>{" "}
        <h1>
          Hello{" "}
          <button onClick={this.playSound}>Play Audio Feedback Sample</button>{" "}
        </h1>
      </div>
    );
  }
}
