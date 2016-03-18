// vim: sts=2 sw=2 ts=2 expandtab

import React, { Component } from "react";


// Zenith入力欄
export default class Zenith extends Component {

  render() {
    return (
      <div>
        <header className="subtype">Zenith Perk</header>
        <table className="grbr" id="zenith_table">
          <tbody>
            <ZenithAttack
              parameter={this.props.parameter}
              onChangeParameter={this.props.onChangeParameter}
            />
            <ZenithWeapon1
              parameter={this.props.parameter}
              onChangeParameter={this.props.onChangeParameter}
            />
            <ZenithWeapon2
              parameter={this.props.parameter}
              onChangeParameter={this.props.onChangeParameter}
            />
            <ZenithAttribute
              parameter={this.props.parameter}
              onChangeParameter={this.props.onChangeParameter}
            />
          </tbody>
        </table>
      </div>
    );
  }

};

function renderZenithSelector(onChangeFunc, id) {
  var zenith_list = [[0,"無し"], [1, "★"], [2, "★★"], [3,"★★★"]];
  var option_list = [];
  for (var i=0; i < zenith_list.length; i++) {
    option_list.push(
      <option value={zenith_list[i][0]} key={zenith_list[i][0]}>{zenith_list[i][1]}</option>
    );
  }
  return (
    <select onChange={onChangeFunc} id={id} ref={id} >
      {option_list}
    </select>
  );
}

class ZenithAttack extends Component {

  handleChange(event) {
  }

  render() {
    var elem = renderZenithSelector(this.handleChange, "zenith_atk");
    return (
      <tr>
        <th>攻撃力</th>
        <td>
          {elem}
        </td>
      </tr>
    );
  }

};

class ZenithWeapon1 extends Component{

  handleChange(event) {
  }

  render() {
    var elem = renderZenithSelector(this.handleChange, "zenith_weapon1");
    return (
      <tr>
        <th>得意武器1</th>
        <td>
          {elem}
        </td>
      </tr>
    );
  }

};

class ZenithWeapon2 extends Component {

  handleChange(event) {
  }

  render() {
    var elem = renderZenithSelector(this.handleChange, "zenith_weapon2");
    return (
      <tr>
        <th>得意武器2</th>
        <td>
          {elem}
        </td>
      </tr>
    );
  }

};

class ZenithAttribute extends Component {

  handleChange(event) {
  }

  render() {
    var elem = renderZenithSelector(this.handleChange, "zenith_attribute");
    return (
      <tr>
        <th>属性攻撃力</th>
        <td>
          {elem}
        </td>
      </tr>
    );
  }

};
