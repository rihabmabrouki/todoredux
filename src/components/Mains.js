import React, { Component } from "react";
import { connect } from "react-redux";


class Mains extends Component {
  state = {
    iscomplete: false,
  };
  render() {
    return (
      <div className="list">
        {this.props.todo.map(el => {
          return (
            <div className="task" key={el.id}>
              <input
                className="radio"
                type="radio"
                onClick={() => {
                  this.props.complete(el.id);
                }}
              />
              <span className={el.iscomplete ? "complete" : ""}>
                {el.inputValue}
              </span>
              <div className="icons">
                <span>
                  <i
                    className="far fa-edit"
                    onClick={() => {
                      this.props.edit(el.id);
                    }}
                  ></i>
                </span>

                <span>
                  <i
                    className="far fa-trash-alt"
                    onClick={() => {
                      this.props.remove(el.id);
                    }}
                  ></i>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    todo: state.mainreduce
  };
};
const mapDispatchToProps = dispatch => {
  return {
    remove: id => {
      dispatch({ type: "REMOVE_INPUT", id: id });
    },
    complete: id => {
      dispatch({ type: "COMPLETE_INPUT", id: id });
    },
  
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mains);
